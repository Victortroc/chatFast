import { Request, Response } from "express";

import { getIO } from "../libs/socket";
import AuthUserService from "../services/UserServices/AuthUserService";
import { SendRefreshToken } from "../helpers/SendRefreshToken";
import { RefreshTokenService } from "../services/AuthServices/RefreshTokenService";
import FindUserFromToken from "../services/AuthServices/FinUserFromToken";
import User from "../models/User";

export const store = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  const { token, serializedUser, refreshToken } = await AuthUserService({
    email,
    password
  });

  SendRefreshToken(res, refreshToken);

  const io = getIO();
  io.emit(`user-${serializedUser.id}-auth`, {
    action: "update",
    user: {
        id: serializedUser.id,
        username: serializedUser.username,
        email: serializedUser.email,
    }
  });

  return res.status(200).json({
    token,
    user: serializedUser
  });
};

export const update = async (req: Request, res: Response): Promise<Response> => {
  const token: string = req.cookies.jrt;

  if (!token) {
    throw new Error("ERR_SESSION_EXPIRED");
  }

  const { user, newToken, refreshToken } = await RefreshTokenService(res, token);

  SendRefreshToken(res, refreshToken);

  return res.json({ token: newToken, user });
};

export const me = async (req: Request, res: Response): Promise<Response> => {
  const token: string = req.cookies.jrt;
  const user = await FindUserFromToken(token);
  const { _id } = user;

  if (!token) {
    throw new Error("ERR_SESSION_EXPIRED");
  }

  return res.json({ _id });
};

export const remove = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.user!;
  const user = await User.findOne({ id });
  await user.updateOne({ status: 'offline' });

  res.clearCookie("jrt");

  return res.send();
};
