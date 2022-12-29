import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { InputField } from '../index'

type ImageWrapperT = {
	height: string
}

type FieldErrorT = {
	message?: string
}

type CaptchaPropsT = {
	name: string
	label: string
	register: UseFormRegister<FieldValues>
	errors: FieldErrorT
	onClearErrors: () => void
	captcha: string
	height: string
}

export const Captcha = ({
	name,
	label,
	register,
	errors,
	onClearErrors,
	captcha,
	height
}: CaptchaPropsT): JSX.Element => {
	const { t } = useTranslation()

	return (
		<CaptchaWrapper>
			<InputField
				name={name}
				label={label}
				type="text"
				register={register}
				validationSchema={{
					required: t('auth.errors.captchaIsRequired')
				}}
				placeholder="captcha"
				errors={errors}
				onClearErrors={onClearErrors}
			/>
			<ImageWrapper height={height}>
				<img src={captcha} alt={captcha} />
			</ImageWrapper>
		</CaptchaWrapper>
	)
}

const CaptchaWrapper = styled.div`
	display: grid;
	grid-gap: 5px;
	margin-bottom: 15px;
`

const ImageWrapper = styled.div<ImageWrapperT>`
	display: grid;
	justify-content: center;

	& img {
		height: ${({ height = 'auto' }) => height}px;
		border: 1px solid ${(props) => props.theme.borderPrimary};
	}
`
