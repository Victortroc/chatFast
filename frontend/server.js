import express from "express";
import cors from "cors";
import path from "path";
import httpProxy from "http-proxy";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";


dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const proxy = httpProxy.createProxyServer({
    target: process.env.VITE_BACKEND, // URL do backend
    ws: true,
});

// Configurar CORS
app.use(cors({
    origin: process.env.VITE_FRONTEND, // URL do frontend
    //   methods: ["GET", "POST", "DELETE", "UPDATE"],
    methods: "*",
    credentials: true
}));

// Servir a versão de produção do frontend
app.use(express.static(path.join(__dirname, "dist")));

// Redirecionar todas as requisições para o frontend
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Proxy para WebSocket
const server = createServer(app);

server.on("upgrade", (req, socket, head) => {
  proxy.ws(req, socket, head);
});

server.listen(5173, () => {
  console.log("Servidor rodando na porta 5173");
});
