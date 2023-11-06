import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./views/layouts/AdminLayout";
import GuestLayout from "./views/layouts/GuestLayout";
import Error from "./views/pages/Error";
import Dashboard from "./views/pages/Dashboard";
import Login from "./views/pages/Login";
import Application from "./views/pages/Application";
import ViewApplication from "./views/pages/ViewApplication";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout></GuestLayout>,
        children: [
            {
                path: "/",
                element: <Application></Application>,
            },
            {
                path: "/application",
                element: <Application></Application>,
            },
            {
                path: "/viewapplication",
                element: <ViewApplication></ViewApplication>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
        ],
    },
    {
        path: "/",
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
            },
        ],
    },
    {
        path: "*",
        element: <Error></Error>,
    },
]);

export default router;
