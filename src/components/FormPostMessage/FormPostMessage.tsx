import React, { FormEventHandler } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { Button, TextAreaField } from '../index'

type FormPostMessageT = {
	onSubmit: FormEventHandler<HTMLFormElement>
	register: UseFormRegister<FieldValues>
	validationSchema: {
		required?: string
		maxLength?: {
			value: number
			message: string
		}
	}
	errors: {
		postMessage?: string
	}
}

export const FormPostMessage = (props: FormPostMessageT): JSX.Element => {
	const { onSubmit, register, validationSchema, errors } = props
	const { t } = useTranslation()

	return (
		<FormProfilePost onSubmit={onSubmit}>
			<ProfilePostAreaWrapper>
				<TextAreaField
					name={'postMessage'}
					register={register}
					validationSchema={validationSchema}
					errors={errors?.postMessage}
				/>
			</ProfilePostAreaWrapper>
			<Button fontSize="14px" areaName={'profilePostButton'}>
				{t('profile.myPosts.send')}
			</Button>
		</FormProfilePost>
	)
}

const FormProfilePost = styled.form`
	display: grid;
	grid-template-columns: 1fr 100px;
	grid-template-rows: auto 35px;
	grid-template-areas:
		'profilePostArea profilePostArea'
		'. profilePostButton';
`

const ProfilePostAreaWrapper = styled.div`
	display: grid;
	grid-area: profilePostArea;
	margin: 5px 0;
	border-radius: 8px;
`
