import openSocket from "socket.io-client";
import { isObject } from "lodash";

export function socketConnection(params) {
  let user = null;
  if (localStorage.getItem("user")) {
    user = localStorage.getItem("user");
  }
  return openSocket(process.env.REACT_APP_BACKEND_URL, {
    transports: ["websocket", "polling", "flashsocket"],
    pingTimeout: 18000,
    pingInterval: 18000,
    query: isObject(params) ? { ...params, user } : { user },
  });
};
