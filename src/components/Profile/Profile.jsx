import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {updateStatus} from "../../Redux/ProfileReducer";




const Profile = (props) => {

  return (
    <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />

      <MyPostsContainer   />
    </div>
  )
};

export default Profile;

