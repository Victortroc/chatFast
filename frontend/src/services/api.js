import axios from "axios";

const apiBackend = import.meta.env.VITE_BACKEND;

const api = axios.create({
	baseURL: apiBackend,
	withCredentials: true,
});

export const openApi = axios.create({
	baseURL: apiBackend
});

export default api;
