import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';

function Posts() {
    const postData = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    

    if(!!postData.newPost) {
        console.log(postData.newPost, Object.keys(postData.newPost).length)
        if(postData.newPost)
        postData.items.unshift(postData.newPost)
    }

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const click = () => {
        console.log('called');
    };

    return postData.loading ? (
        <h2>Loading posts</h2>
    ) : postData.loading ? (
        <h2>Error {postData.error}</h2>
    ) : (
        <div>
            <h1>this should display a post</h1>
            <button onClick={click}>Click me!</button>
            {postData &&
                postData.items.map((post) => (
                    <div key={ post.id }>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <small>{post.user}</small>
                    </div>
                ))}
        </div>
    );
}

export default Posts;
