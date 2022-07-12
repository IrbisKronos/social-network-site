import React from "react";
import set from './Profile.module.css';
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={set.content}>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;