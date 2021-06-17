import React, {useState} from 'react';
import { createPost } from '../redux/actions/postActions';
import { useDispatch, useSelector } from 'react-redux';

export default function PostForm() {
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent]  = useState('');
    const dispatch = useDispatch();

    const handleSubmt = (e) => {
        e.preventDefault()
        const newPost = {
            userId: 1,
            title: postTitle, 
            body: postContent
        }
        dispatch(createPost(newPost))
    }

    return (
        <div>
            <form onSubmit={e => handleSubmt(e)}>
                <div>
                    <label htmlFor=''>
                        <span>Post title</span>
                        <input 
                            type='text' 
                            name='post_title'   
                            placeholder='Post title'
                            value={postTitle}
                            onChange={e => setPostTitle(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor=''>
                        <span>Post content</span>
                        <textarea 
                            name="post_content" 
                            id="post_content" 
                            placeholder='Insert Post content here' 
                            cols="30" 
                            rows="10"
                            value={postContent}
                            onChange={e => setPostContent(e.target.value)}
                        ></textarea>
                    </label>
                    
                </div>
                <button type='submit'>Submit</button>
                <button type='reset'>Clear</button>
            </form>
        </div>
    );
}
