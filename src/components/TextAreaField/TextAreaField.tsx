import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'

type TextAreaFieldT = {
	name: string
	register: UseFormRegister<FieldValues>
	validationSchema: {
		required?: string
		maxLength?: {
			value: number
			message: string
		}
	}
	placeholder?: string
	errors: FieldValues
}

export const TextAreaField = (props: TextAreaFieldT) => {
	const { name, register, validationSchema, placeholder, errors } = props

	return (
		<InputWrapper>
			<Textarea
				{...register(name, validationSchema)}
				name={name}
				placeholder={placeholder}
			/>
			{errors && <Error>{errors?.message}</Error>}
		</InputWrapper>
	)
}

const InputWrapper = styled.div`
	display: grid;
	grid-template-rows: auto 20px;
	grid-template-columns: auto 300px;
`

const Textarea = styled.textarea`
	display: grid;
	grid-row: 1/2;
	grid-column: 1/3;
	grid-template-rows: minmax(100px, auto);
	border: 1px solid ${(props) => props.theme.borderPrimary};
	color: ${(props) => props.theme.colorPrimary};
	border-radius: 4px;
	padding: 0 5px;
	font-size: 16px;
	background-color: transparent;
	resize: none;
`

const Error = styled.div`
	display: grid;
	grid-row: 2/3;
	grid-column: 2/3;
	font-size: 12px;
	text-transform: uppercase;
	color: red;
	justify-content: end;
	align-content: center;
`
