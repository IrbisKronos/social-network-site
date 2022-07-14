import React from "react";
import set from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
debugger;
    const post = props.postData.map(postItem => {
        return <Post id={postItem.id} message={postItem.message} likes={postItem.likesCount} />
    })

    return (
        <div className={set.myPosts}>
            <h3>My post:</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={set.newPosts}>
                {post}
            </div>
        </div>
    )
}

export default MyPosts;