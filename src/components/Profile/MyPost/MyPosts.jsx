import React from "react";
import set from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={set.myPosts}>
            My posts
            <div className={set.newPosts}>
                New post
            </div>
            <Post massage='Hi, how are you?' likes='3'/>
            <Post massage="It's my first post" likes='7'/>
        </div>
    )
}

export default MyPosts;