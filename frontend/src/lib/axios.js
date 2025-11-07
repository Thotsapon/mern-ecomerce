import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.mode === "development" ? `${process.env.CLIENT_URL}/api` : "/api",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
