import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersComponent from "./components/pages/UsersComponent.tsx";
import PostComponent from "./components/pages/PostComponent.tsx";
import CommentsComponent from "./components/pages/CommentsComponent.tsx";
import ProductsComponent from "./components/pages/ProductsComponent.tsx";
import App from "./App.tsx";


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App/>}>
                <Route path={'users'} element={<UsersComponent/>}/>
                <Route path={'posts'} element={<PostComponent/>}/>
                <Route path={'comments'} element={<CommentsComponent/>}/>
                <Route path={'products'} element={<ProductsComponent/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
