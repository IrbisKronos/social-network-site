import React from "react";
import set from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElement =
        props.posts.map(p => <Post id={p.id} message={p.message} likes={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        //props.addPost();
        props.dispatch({ type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text);
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
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
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;