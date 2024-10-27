import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RouterPath } from "./path";
import { PeopleManagementPage } from "@/feature/people-management";

const router = createBrowserRouter([
    {
        path: RouterPath.ROOT,
        element: <PeopleManagementPage />,
    },
]);

export const Routes = () => {
    return <RouterProvider router={router} />;
};
