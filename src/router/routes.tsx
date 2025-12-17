import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layouts/Layout.tsx";
import UserPage from "../pages/UserPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Layout/>, children: [
            {path: "users", element: <UsersPage/>},
            {path: "users/:id", element: <UserPage/>},
            {path: "posts", element: <PostsPage/>},
        ]
    }
])