import React from "react";
import {Post, FormPostMessage} from "../../index";
import {useForm} from "react-hook-form";
import styled from "styled-components";

export default function MyPosts(props) {
    const {myPosts, addNewPostAC} = props;

    let posts = myPosts.map(post => <Post key={post.id} message={post.message} likeCount={post.like}/>);

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({mode: "onBlur"});

    const onFormSubmit = (data) => {
        addNewPostAC({message: data.postMessage})
        reset();
    }

    return (
        <UserPostsWrapper>
            <PostsTitle>My Posts</PostsTitle>
            <ProfileTextArea>
                <FormPostMessage onSubmit={handleSubmit(onFormSubmit)}
                                 register={register}
                                 validationSchema={{
                                     required: "Required field",
                                     maxLength: {value: 100, message: "max length is 100 characters"}
                                 }}
                                 errors={errors}/>
            </ProfileTextArea>
            <AllPostsWrapper>
                {posts}
            </AllPostsWrapper>
        </UserPostsWrapper>
    );
}

const UserPostsWrapper = styled.div`
  display: grid;
  grid-template-rows: 30px minmax(50px, 150px) auto;
`

const PostsTitle = styled.h3`
  padding: 5px;
`

const ProfileTextArea = styled.div`
  display: grid;
`

const AllPostsWrapper = styled.div`
  display: grid;
`
