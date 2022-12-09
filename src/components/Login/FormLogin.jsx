import React from "react";
import {Button, Captcha, InputField, Label} from "../index";
import styled from "styled-components";
import {useTranslation} from "react-i18next";

export const FormLogin = (props) => {
    const {onSubmit, registerInput, errors, registerCheckbox, onClearErrors, captcha} = props
    const { t } = useTranslation()
    const minLength = 5
    const minLengthError = t('auth.errors.minLength', {count: minLength})

    return (
        <LoginForm onSubmit={onSubmit}>
            <InputField name={"email"}
                        label={t('auth.email')}
                        type={"text"}
                        register={registerInput}
                        validationSchema={{
                            required: t('auth.errors.emailIsRequired'),
                            minLength: {value: minLength, message: minLengthError}
                        }}
                        placeholder={"example@gmail.com"}
                        errors={errors}
                        onClearErrors={onClearErrors}/>
            <InputField name={"password"}
                        label={t('auth.password')}
                        type={"password"}
                        register={registerInput}
                        validationSchema={{
                            required: t('auth.errors.passwordIsRequired'),
                            minLength: {value: minLength, message: minLengthError}
                        }}
                        placeholder={"password"}
                        errors={errors}
                        onClearErrors={onClearErrors}/>
            <LoginCheckboxWrapper>
                <LoginCheckbox name={"rememberMe"}
                               type={"checkbox"}
                               defaultChecked={true}
                               {...registerCheckbox} className='geekmark'/>
                <Label htmlFor={"rememberMe"}
                       color={'black'}
                       fontSize={'14px'}
                       transform={'none'}>
                    {t('auth.rememberMe')}
                </Label>
            </LoginCheckboxWrapper>
            {
                captcha && <Captcha name="captcha"
                                    label={t('auth.captcha')}
                                    register={registerInput}
                                    errors={errors}
                                    onClearErrors={onClearErrors}
                                    captcha={captcha}
                                    height={85}/>
            }
            <Button fontSize='16px'>{t('auth.login')}</Button>
        </LoginForm>
    )
}

const LoginForm = styled.form`
  display: grid;
  grid-row-gap: 5px;
  align-content: start;
`

const LoginCheckboxWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 20px 150px;
  height: 35px;
  font-size: 16px;
  text-transform: uppercase;
  align-items: center;
  justify-items: center;
  justify-content: center;
`

const LoginCheckbox = styled.input`
  align-content: center;
  height: 35px;
  width: 20px;
  border: 1px solid ${props => props.theme.borderPrimary};
  color: ${props => props.theme.colorPrimary};
  
  &[type='checkbox'] {
    accent-color: ${props => props.theme.colorSecondary};
  }
`