import React from "react";
import set from './Post.module.css';

const Post = (props) => {
    return  (
        <div className={set.newPost}>
            <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" />
            {props.massage}
            <div>{props.likes} Likes</div>
        </div>
)
}

export default Post;