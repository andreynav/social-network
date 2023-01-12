import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'

import { Label } from '../index'

type InputFieldT = {
	name: string
	type?: string
	label: string
	register: UseFormRegister<FieldValues>
	validationSchema?: {
		required?: string
		maxLength?: {
			value: number
			message: string
		}
	}
	placeholder?: string
	errors: FieldValues
	isPutError: boolean
	onClearErrors: () => void
}

export const InputField = (props: InputFieldT): JSX.Element => {
	const {
		name,
		label,
		type,
		register,
		validationSchema,
		placeholder,
		errors,
		onClearErrors,
		isPutError,
		...inputProps
	} = props

	const isProfileFormError = isPutError
	const isLoginFormError =
		errors && (name === 'email' || name === 'password' || name === 'captcha')
	const labelError = (
		<Label color={'error'}>
			{(errors[name] && errors[name]?.message) || errors?.server?.message}
		</Label>
	)

	return (
		<InputWrapper>
			<Label htmlFor={name} fontSize="10px">
				{label}
			</Label>
			<Input
				type={type}
				{...register(name, validationSchema)}
				name={name}
				placeholder={placeholder}
				onClick={onClearErrors}
				{...inputProps}
			/>
			{isProfileFormError && labelError}
			{isLoginFormError && labelError}
		</InputWrapper>
	)
}

const InputWrapper = styled.div`
	display: grid;
	grid-template-rows: 16px auto 16px;
	align-items: center;
`
const Input = styled.input`
	display: grid;
	background-color: transparent;
	color: ${(props) => props.theme.colorPrimary};
	min-width: 100%;
	height: ${({ height = '35' }) => height}px;
	border: 1px solid ${(props) => props.theme.borderPrimary};
	border-radius: 4px;
	padding: 0 5px;
	font-size: 16px;
`
