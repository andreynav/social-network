import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { DialogUsersT, MessagesT } from '../../store/dialogReducer'
import { DialogMessage, DialogUser, FormPostMessage } from '../index'

type PropsT = {
	dialogUsers: Array<DialogUsersT>
	messages: Array<MessagesT>
	addMessageAC: (message: string) => void
}

export type DialogDataT = {
	postMessage?: string
}

export const Dialogs = (props: PropsT): JSX.Element => {
	const { dialogUsers, messages, addMessageAC } = props
	const { t } = useTranslation()
	const maxLength = 100
	const maxLengthError = t('profile.myPosts.errors.maxLength', {
		count: maxLength
	})

	const dialogsUsers = dialogUsers.map((user) => (
		<DialogUser key={user.id} userName={user.name} userId={user.id} />
	))
	const userMessages = messages.map(
		(message: { message: string }, item: number) => (
			<DialogMessage key={item} message={message.message} />
		)
	)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<DialogDataT>({ mode: 'onBlur' })

	const onFormSubmit = (data: DialogDataT) => {
		const message = data.postMessage
		addMessageAC(message as string)
		reset()
	}

	return (
		<DialogWrapper>
			<DialogMessagesWrapper>
				<DialogUsersContainer>{dialogsUsers}</DialogUsersContainer>
				<DialogMessages>{userMessages}</DialogMessages>
			</DialogMessagesWrapper>
			<DialogTextArea>
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
			</DialogTextArea>
		</DialogWrapper>
	)
}

const DialogWrapper = styled.div`
	display: grid;
	grid-template-rows: 1fr 170px;
	grid-template-columns: 200px 1fr;
	overflow: auto;
`

const DialogMessagesWrapper = styled.div`
	display: grid;
	grid-column: 1/3;
	grid-template-columns: 200px 1fr;
	overflow: auto;
`

const DialogUsersContainer = styled.div`
	display: grid;
	align-self: start;
	background-color: transparent;
	border: 1px solid ${(props) => props.theme.borderPrimary};
	border-radius: 8px;
	padding: 10px;
`

const DialogMessages = styled.div`
	display: grid;
	margin-left: 20px;
	align-self: start;
	overflow: visible;
`

const DialogTextArea = styled.div`
	display: grid;
	grid-column: 2/3;
	padding-top: 5px;
`
