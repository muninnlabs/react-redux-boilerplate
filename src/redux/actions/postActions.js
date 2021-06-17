import {
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_FAILURE,
    NEW_POST_FAILURE,
    NEW_POST_REQUEST,
    NEW_POST_SUCCESS
} from '../types';
import axios from 'axios';

export const fetchPosts = () => (dispatch) => {
    dispatch(fetchPostsRequest());
    axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            const posts = res.data;
            dispatch(fetchPostsSuccess(posts));
        })
        .catch((err) => {
            console.log('Error fetch posts', err);
            dispatch(fetchPostsError(err.message));
        });
};

export const fetchPostsRequest = () => {
    return {
        type: FETCH_POSTS_REQUEST
    };
};

export const fetchPostsSuccess = (posts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    };
};

export const fetchPostsError = (error) => {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    };
};

export const createPost = (postData) => (dispatch) => {
    dispatch(newPostRequest());
    axios.post('https://jsonplaceholder.typicode.com/posts', postData).then(
        (response) => {
            dispatch(newPostSuccess(response.data));
        },
        (error) => {
            dispatch(newPostError(error));
        }
    );
};

export const newPostRequest = () => {
    return {
        type: NEW_POST_REQUEST
    };
};

export const newPostSuccess = (posts) => {
    return {
        type: NEW_POST_SUCCESS,
        payload: posts
    };
};

export const newPostError = (error) => {
    return {
        type: NEW_POST_FAILURE,
        payload: error
    };
};
