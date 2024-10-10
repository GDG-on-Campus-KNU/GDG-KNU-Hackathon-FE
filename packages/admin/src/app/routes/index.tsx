import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import MainPage from "@/pages/main";

import { RouterPath } from "./path";

const router = createBrowserRouter([
    {
        path: RouterPath.root,
        element: <Navigate to={RouterPath.admin} replace />,
    },
    {
        path: RouterPath.admin,
        element: <MainPage />,
    },
]);

export const Routes = () => {
    return <RouterProvider router={router} />;
};
