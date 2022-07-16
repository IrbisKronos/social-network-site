import React from "react";
import set from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    const post = props.postData.map(p => <Post id={p.id} message={p.message} likes={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (

        <div className={set.myPosts}>
            <h3>My post:</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
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