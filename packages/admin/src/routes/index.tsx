import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/home";
import { RouterPath } from "./path";

const router = createBrowserRouter([
    {
        path: RouterPath.root,
        element: <HomePage />,
    },
]);

export const Routes = () => {
    return <RouterProvider router={router} />;
};
