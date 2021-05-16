import React from 'react';
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return  <Preloader />

    }
    return (
        <div>

            <div>
                <img
                    src='https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/87af2349-6a49-4135-b1e6-6730c7c65e31/300x450'/>
            </div>
            <div className="s.descriptionBlock">
                <img src={props.profile.photos.large} alt=""/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;