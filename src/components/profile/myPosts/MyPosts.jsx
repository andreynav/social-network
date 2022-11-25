import React from "react";
import {Post, FormPostMessage} from "../../index";
import {useForm} from "react-hook-form";
import styled from "styled-components";
import {useTranslation} from "react-i18next";

export default function MyPosts(props) {
    const {myPosts, addNewPostAC} = props
    const {t} = useTranslation()
    const maxLength = 100
    const maxLengthError = t('profile.myPosts.errors.maxLength', {count: maxLength})

    let posts = myPosts.map(post => <Post key={post.id} message={post.message} likeCount={post.like}/>)

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
            <PostsTitle>{t("profile.myPosts.title")}</PostsTitle>
            <ProfileTextArea>
                <FormPostMessage onSubmit={handleSubmit(onFormSubmit)}
                                 register={register}
                                 validationSchema={{
                                     required: t('profile.myPosts.errors.fieldRequired'),
                                     maxLength: {value: maxLength, message: maxLengthError}
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
