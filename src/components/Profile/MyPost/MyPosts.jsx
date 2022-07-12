import React from "react";
import set from './MyPosts.module.css';
import Post from "./Post/Post";

let postData = [
    {id:0, massage:"Hi, how are you?", likesCount:3},
    {id:1, massage:"It's my first post", likesCount:7},
    {id:1, massage:"It's my second post", likesCount:5},
    {id:1, massage:"boom", likesCount:2},
    {id:1, massage:"aaaaaaaa", likesCount:0},
]
const posts = postData.map(post => {
    return <Post id={post.id} massage={post.massage} likes={post.likesCount}/>
})

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
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;