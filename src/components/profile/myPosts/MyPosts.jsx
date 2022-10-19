import React from "react";
import style from './MyPosts.module.css'
import {Post, FormPostMessage} from "../../index";
import {useForm} from "react-hook-form";

export default function MyPosts(props) {
    const {userPostsWrapper, postsTitle, profileTextArea, allPostsWrapper} = style;
    const {myPosts, addNewPostAC} = props;

    let posts = myPosts.map( post => <Post key={post.id} message={post.message} like={post.like} />);

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({mode: "onBlur"});

    const onFormSubmit = (data) => {
        console.log(data)
        addNewPostAC({message: data.postMessage})
        reset();
    }

    return (
        <div className={userPostsWrapper}>
            <h3 className={postsTitle}>My Posts</h3>
            <div className={profileTextArea}>
                <FormPostMessage onSubmit={handleSubmit(onFormSubmit)}
                            register={register}
                            validationSchema={{
                                required: "Required field",
                                maxLength: {value: 100, message: "max length is 100 characters"}
                            }}
                            errors={errors} />
            </div>
            <div className={allPostsWrapper}>
                { posts }
            </div>
        </div>
    );
}
