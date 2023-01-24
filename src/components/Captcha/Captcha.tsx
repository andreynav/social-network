import { FieldValues, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { InputField } from '../index'

type CaptchaPropsT = {
	name: 'captcha'
	label: string
	register: UseFormRegister<FieldValues>
	errors: {
		message?: string
	}
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
					// @ts-expect-error: https://www.i18next.com/overview/typescript#argument-of-type-defaulttfuncreturn-is-not-assignable-to-parameter-of-type-xyz
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

const ImageWrapper = styled.div<{ height: string }>`
	display: grid;
	justify-content: center;

	& img {
		height: ${({ height = 'auto' }) => height}px;
		border: 1px solid ${(props) => props.theme.borderPrimary};
	}
`
