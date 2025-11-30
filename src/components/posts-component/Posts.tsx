import {useEffect, useState} from "react";
import type {PostModel} from "../../models/PostModel.ts";
import {loadPost} from "../../service/api.service.ts";
import {Post} from "../post-component/Post.tsx";

export const Posts = () => {
    const [posts, setPosts] = useState<PostModel[]>([])
    useEffect(() => {
        async function fetchPosts() {
            const allPosts = await loadPost();
            setPosts(allPosts);
        }
        fetchPosts();
    },[])
    
    return (
        <div>
            {
                posts.map((post) => (<Post post={post} key={post.id} />))
            }
        </div>
    );
};