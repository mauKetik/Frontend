import { createBrowserRouter, redirect } from "react-router-dom";
import { MainLayout } from "./src/components/MainLayout";
import { Login } from "./src/pages/Login";
import { Room } from "./src/pages/Room";
import { Leaderboard } from "./src/pages/Leaderboard";
import { Profile } from "./src/pages/Profile";
import { TypingTest } from "./src/pages/TypingTest";
import { Register } from "./src/pages/Register";
import { WaitingRoom } from "./src/pages/WaitingRoom";
import { GameView } from "./src/pages/GameView";

const loader = () => {
    if(!localStorage.access_token) return redirect('/login')
    return null
}

export const router = createBrowserRouter([
  {
    element: < MainLayout />,
    children: [
      {
        path: "/",
        element: <Room />,
        loader
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
        loader
      },
      {
        path: "/profile",
        element: <Profile />,
        loader
      },
      {
        path: "/test",
        element: <TypingTest />,
        loader
      },
      {
        path: "/xyz",
        element: <WaitingRoom />,
        loader
      },
      {
        path: "/playing/:roomId",
        element: <GameView />,
        loader
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
