import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../Common/FormsControls/FormsControls";


const  maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {


    let postElements =
        props.posts.map(p => <Post key={p.id} message={p.message} id={p.id} like={p.likes}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (

        <div className={s.postsBlock}>
            <h3>My posts </h3>

            <div className={s.posts}>
                {postElements}

            </div>
            < AddNewPostFormRedux onSubmit={onAddPost}/>
        </div>
    )

});

const AddNewPostForm  = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={TextArea} validate={[required, maxLength10 ]} />

            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux= reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;