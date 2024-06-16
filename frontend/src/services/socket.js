import openSocket from "socket.io-client";
import { isObject } from "lodash";

// const apiBackend = import.meta.env.VITE_BACKEND;
const apiBackend = import.meta.env.VITE_BACKEND;

export function socketConnection(params) {
  // let userId = null;
  // if (localStorage.getItem("userId")) {
  //   userId = localStorage.getItem("userId");
  // }
  return openSocket(apiBackend, {
    transports: ["websocket", "polling", "flashsocket"],
    pingTimeout: 18000,
    pingInterval: 18000,
    // query: isObject(params) ? { ...params, userId } : { userId }
    query: params
  });
}
