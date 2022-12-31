import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ConnectedProps, connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import {
	AuthDataT,
	loginUser,
	selectCaptcha,
	selectError,
	selectIsAuth
} from '../../store/authReducer'
import { RootState } from '../../store/store'
import { FormLogin } from '../index'

type MapStateToPropsT = {
	isAuth: boolean
	captcha: string | null
	error: string
}

const Login = ({
	isAuth,
	error,
	captcha,
	loginUser
}: PropsFromRedux): JSX.Element => {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setError,
		clearErrors
	} = useForm<AuthDataT>({ mode: 'onBlur' })

	const onFormSubmit = (data: AuthDataT) => {
		loginUser(data)
		if (errors && Object.keys(errors).length !== 0) {
			reset()
		}
	}

	const onClearErrors = () => {
		errors && clearErrors()
	}

	useEffect(() => {
		isAuth && navigate('/profile')
		if (error === 'Incorrect Email or Password') {
			setError('email', { message: error })
			setError('password', { message: error })
		} else if (error === 'Incorrect anti-bot symbols') {
			setError('captcha', { message: error })
		}
	}, [isAuth, error, navigate, setError])

	const { t } = useTranslation()

	return (
		<LoginWrapper>
			<LoginTitle>{t('auth.login')}</LoginTitle>
			<LoginFormWrapper>
				<FormLogin
					onSubmit={handleSubmit(onFormSubmit)}
					registerInput={register}
					errors={errors}
					onClearErrors={onClearErrors}
					registerCheckbox={register('rememberMe')}
					captcha={captcha}
				/>
			</LoginFormWrapper>
		</LoginWrapper>
	)
}

const mapStateToProps = (state: RootState): MapStateToPropsT => ({
	isAuth: selectIsAuth(state),
	captcha: selectCaptcha(state),
	error: selectError(state)
})

const connector = connect(mapStateToProps, { loginUser })
export type PropsFromRedux = ConnectedProps<typeof connector>

export const LoginWithMapProps = connector(Login)

const LoginWrapper = styled.div`
	display: grid;
	grid-template-columns: 0.25fr 1fr 0.25fr;
	grid-template-rows: 35px auto;
`

const LoginTitle = styled.div`
	display: grid;
	font-weight: bold;
	grid-row: 1/2;
	grid-column: 1/2;
`

const LoginFormWrapper = styled.div`
	display: grid;
	grid-row: 2/3;
	grid-column: 2/3;
`
