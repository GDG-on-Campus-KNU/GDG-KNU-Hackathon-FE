import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { RouterPath } from "./path";
import { PeopleManagementPage } from "@/feature/people-management";

const router = createBrowserRouter([
    {
        path: RouterPath.ROOT,
        element: <Navigate to={RouterPath.ADMIN} replace />,
    },
    {
        path: RouterPath.ADMIN,
        element: <PeopleManagementPage />,
    },
]);

export const Routes = () => {
    return <RouterProvider router={router} />;
};
