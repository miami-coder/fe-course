import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import UsersComponent from "../components/UsersComponent.tsx";
import PostComponent from "../components/PostComponent.tsx";
import CommentsComponent from "../components/CommentsComponent.tsx";
import ProductsComponent from "../components/ProductsComponent.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <App/>, children: [
            {path:'users', element: <UsersComponent/>},
            {path:'posts', element: <PostComponent/>},
            {path:'comments', element: <CommentsComponent/>},
            {path:'products', element: <ProductsComponent/>}
        ]
    }
])