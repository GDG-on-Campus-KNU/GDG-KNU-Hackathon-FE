import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import HomePage from "../pages/home";
import { RouterPath } from "./path";

const router = createBrowserRouter([
    {
        path: RouterPath.root,
        element: <Navigate to={RouterPath.admin} replace />,
    },
    {
        path: RouterPath.admin,
        element: <HomePage />,
    },
]);

export const Routes = () => {
    return <RouterProvider router={router} />;
};
