import React from "react";
import set from './MyPosts.module.css';
import Post from "./Post/Post";

let postData = [
    {id:0, massage:"Hi, how are you?", likesCount:3},
    {id:1, massage:"It's my first post", likesCount:7},
]

const MyPosts = () => {
    return (
        <div className={set.myPosts}>
            <h3>My posts</h3>
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
                <Post id={postData[0].id} massage={postData[0].massage} likes={postData[0].likesCount}/>
                <Post id={postData[1].id} massage={postData[1].massage} likes={postData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;