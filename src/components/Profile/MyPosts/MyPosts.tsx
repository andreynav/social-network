import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { PostT } from '../../../store/profileReducer'
import { FormPostMessage, Post } from '../../index'

type MyPostsPropsT = {
	myPosts: Array<PostT>
	addNewPostAC: (message: string) => void
}

export const MyPosts = ({ myPosts, addNewPostAC }: MyPostsPropsT) => {
	const { t } = useTranslation()
	const maxLength = 100
	const maxLengthError = t('profile.myPosts.errors.maxLength', {
		count: maxLength
	})

	const posts = myPosts.map((post) => (
		<Post key={post.id} message={post.message} likeCount={post.like} />
	))

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<FieldValues>({ mode: 'onBlur' })

	const onFormSubmit = (data: FieldValues) => {
		addNewPostAC(data.message)
		reset()
	}

	return (
		<UserPostsWrapper>
			<PostsTitle>{t('profile.myPosts.title')}</PostsTitle>
			<FormPostMessage
				onSubmit={handleSubmit(onFormSubmit)}
				register={register}
				validationSchema={{
					// @ts-expect-error: https://www.i18next.com/overview/typescript#argument-of-type-defaulttfuncreturn-is-not-assignable-to-parameter-of-type-xyz
					required: t('profile.myPosts.errors.fieldRequired'),
					maxLength: { value: maxLength, message: maxLengthError }
				}}
				errors={errors}
			/>
			<AllPostsWrapper>{posts}</AllPostsWrapper>
		</UserPostsWrapper>
	)
}

const UserPostsWrapper = styled.div`
	display: grid;
	grid-template-rows: 30px minmax(50px, 150px) auto;
`

const PostsTitle = styled.h3`
	padding: 5px;
`

const AllPostsWrapper = styled.div`
	display: grid;
`
