import "./bootstrap";
import express from "express";
import routes from "./routes";
import uploadConfig from "./config/update";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

const corsOptions = {
    origin: process.env.FRONTEND_URL, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};
  
app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json());
app.use("/public", express.static(uploadConfig.directory));

app.use(routes);

export default app;