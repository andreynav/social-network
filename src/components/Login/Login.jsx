import React, {useEffect} from "react"
import {useForm} from "react-hook-form"
import {FormLogin} from "../index"
import {loginUser, selectCaptcha, selectError, selectIsAuth} from "../../store/authReducer"
import {connect} from "react-redux"
import {useNavigate} from "react-router-dom"
import styled from "styled-components"
import {useTranslation} from "react-i18next"

function Login({ isAuth, error, captcha, loginUser }) {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        setError,
        clearErrors
    } = useForm({mode: "onBlur"})

    const onFormSubmit = (data) => {
        loginUser(data)
        !!errors.server && reset()
    }

    const onClearErrors = () => {
        errors.server && clearErrors()
    }

    useEffect(() => {
        isAuth && navigate('/profile');
        error && setError('server', {message: error});
    }, [isAuth, error])

    const { t } = useTranslation()

    return (
        <LoginWrapper>
            <LoginTitle>{t('auth.login')}</LoginTitle>
            <LoginFormWrapper>
                <FormLogin onSubmit={handleSubmit(onFormSubmit)}
                           registerInput={register}
                           errors={errors}
                           onClearErrors={onClearErrors}
                           registerCheckbox={register("rememberMe")}
                           captcha={captcha} />
            </LoginFormWrapper>
        </LoginWrapper>
    )
}

const mapStateToProps = (state) => ({
    isAuth: selectIsAuth(state),
    captcha: selectCaptcha(state),
    error: selectError(state),
})

export default connect(mapStateToProps, {loginUser})(Login);

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