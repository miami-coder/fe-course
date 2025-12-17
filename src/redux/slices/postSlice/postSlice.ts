import type {IPost} from "../../../models/IPost.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";

type PostSliceType = {
    posts: IPost[];
    loadState: boolean;
}

const initialState: PostSliceType = {posts: [], loadState: false};

const loadPosts = createAsyncThunk('postsSlice/loadPosts',
        async (_, thunkAPI) => {
            try {
                const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
                    .then((response) => response.json())
                return thunkAPI.fulfillWithValue(posts);
            } catch (e) {
                console.log(e);
                return thunkAPI.rejectWithValue('some error')
            }
        }
    );

export const postSlice = createSlice({
    name: "postSlice",
    initialState: initialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.loadState = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>) => {
                state.posts = action.payload
            })
})

export const postSliceActions = {
    ...postSlice.actions, loadPosts
}