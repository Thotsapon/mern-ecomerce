import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.mode === "development" ? "https://c9af9603.mern-ecomerce.pages.dev" : "/api",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
