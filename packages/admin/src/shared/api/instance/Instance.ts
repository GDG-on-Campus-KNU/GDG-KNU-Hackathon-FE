import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";

import { QueryClient } from "@tanstack/react-query";

const initInstance = (config: AxiosRequestConfig): AxiosInstance => {
    const instance = axios.create({
        timeout: 5000,
        ...config,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...config.headers,
        },
    });

    return instance;
};

export const fetchInstance = initInstance({
    baseURL: `https://k8q4ci7a8j.execute-api.us-east-1.amazonaws.com`,
});

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnMount: true,
            refetchOnReconnect: true,
            refetchOnWindowFocus: true,
        },
    },
});
