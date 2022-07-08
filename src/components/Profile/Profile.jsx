import React from "react";
import set from './Profile.module.css';
import MyPosts from "./MyPost/MyPosts";

const Profile = () => {
    return (
        <div className={set.content}>
            <div>
                <img className={set.img}
                     src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div>
                Ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;