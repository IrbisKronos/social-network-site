import React from "react";
import set from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
debugger;
    const post = props.postData.map(postItem => {
        return <Post id={postItem.id} message={postItem.message} likes={postItem.likesCount} />
    })

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (

        <div className={set.myPosts}>
            <h3>My post:</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={set.newPosts}>
                {post}
            </div>
        </div>
    )
}

export default MyPosts;