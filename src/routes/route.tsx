import App from "@/App";
import Login from "@/pages/login/Login";
import Tasks from "@/pages/tasks/Tasks";
import Users from "@/pages/users/Users";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Tasks></Tasks>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
export default router;
