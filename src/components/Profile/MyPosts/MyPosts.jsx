import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>

                <Post like='3' message='I am a mandalorian'/>
                <Post like='5' message='I never take off my helmet'/>
            </div>
        </div>
    )

}

export default MyPosts;