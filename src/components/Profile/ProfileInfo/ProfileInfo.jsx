import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>

            <div>
                <img
                    src='https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/87af2349-6a49-4135-b1e6-6730c7c65e31/300x450'/>
            </div>
            <div className="s.descriptionBlock">
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;