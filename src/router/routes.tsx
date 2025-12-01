import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import UsersComponent from "../components/pages/UsersComponent.tsx";
import PostComponent from "../components/pages/PostComponent.tsx";
import CommentsComponent from "../components/pages/CommentsComponent.tsx";
import ProductsComponent from "../components/pages/ProductsComponent.tsx";

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