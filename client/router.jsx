import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./src/components/MainLayout";
import { Login } from "./src/pages/Login";
import { Room } from "./src/pages/Room";
import { Leaderboard } from "./src/pages/Leaderboard";
import { Profile } from "./src/pages/Profile";

export const router = createBrowserRouter([
    {
        element : <   MainLayout />,
        children : [
            {
                path : '/login',
                element : < Login />
            },
            {
                path : '/',
                element  : < Room />
            },
            {
                path : '/leaderboard',
                element  : < Leaderboard />
            },
            {
                path : '/profile',
                element  : < Profile />
            },
        ]
    }
])