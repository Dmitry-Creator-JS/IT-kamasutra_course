import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    
  return (
    <div className={s.item}>
      <img src='https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/50628553dc27b894d9344d4055da9f8b/960x540' />

      { props.message }
          <div>
        <span>{ props.like }</span>
      </div>
    </div>
  )

}

export default Post;