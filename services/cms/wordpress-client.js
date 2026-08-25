import axios from "axios";

import { cmsConfig } from "@/lib/cms-config";

const wordpressClient = axios.create({
  baseURL: cmsConfig.apiUrl,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

wordpressClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const apiMessage = error.response?.data?.message;

    const message =
      apiMessage ||
      error.message ||
      "An unexpected WordPress API error occurred.";

    console.error("WordPress API request failed:", {
      status,
      message,
      url: error.config?.url,
    });

    return Promise.reject(
      new Error(
        status
          ? `WordPress API request failed with status ${status}: ${message}`
          : `WordPress API request failed: ${message}`
      )
    );
  }
);

export default wordpressClient;