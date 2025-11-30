import type {TodoModel} from "../models/TodoModal.ts";
import type {PostModel} from "../models/PostModel.ts";
import type {CommentModel} from "../models/CommentModel.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos';
const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts';
const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments';

const loadTodos = async ():Promise<TodoModel[]> => {
        return await fetch(endpointTodos)
            .then((response) => response.json())
}

const loadPost = async ():Promise<PostModel[]> => {
    return await fetch(endpointPosts)
        .then((response) => response.json())
}

const loadComments = async ():Promise<CommentModel[]> => {
    return await fetch(endpointComments)
        .then((response) => response.json())
}

export { loadTodos, loadPost, loadComments };