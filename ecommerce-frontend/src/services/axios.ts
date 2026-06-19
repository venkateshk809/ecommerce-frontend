import axios from "axios";

const api = axios.create({
  baseURL: "https://kids-store-api-dev.onrender.com",
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // Common headers
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  },
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error("Response Error:", error.response?.status, error.message);

    return Promise.reject(error);
  },
);

export default api;
