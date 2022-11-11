import React from "react";
import {Button, InputField, Label} from "../index";
import styled from "styled-components";

export default function FormLogin(props) {
    const {onSubmit, registerInput, errors, registerCheckbox, onClearErrors, captcha} = props;

    return (
        <LoginForm onSubmit={onSubmit}>
            <InputField name={"email"}
                        label={"Email"}
                        type={"text"}
                        register={registerInput}
                        validationSchema={{
                            required: "Email is required field",
                            minLength: {value: 5, message: "min length is 5 characters"}
                        }}
                        placeholder={"example@gmail.com"}
                        errors={errors}
                        onClearErrors={onClearErrors}
            />
            <InputField name={"password"}
                        label={"Password"}
                        type={"password"}
                        register={registerInput}
                        validationSchema={{
                            required: "Password is required field",
                            minLength: {value: 5, message: "min length is 5 characters"}
                        }}
                        placeholder={"password"}
                        errors={errors}
                        onClearErrors={onClearErrors}
            />
            <LoginCheckboxWrapper>
                <LoginCheckbox name={"rememberMe"}
                               type={"checkbox"}
                               {...registerCheckbox}
                />
                <Label htmlFor={"rememberMe"}
                       color={'black'}
                       fontSize={'14px'}
                       transform={'none'}
                >
                    Remember me
                </Label>
            </LoginCheckboxWrapper>
            {
                captcha && <InputField name={"captcha"}
                                    label={"Captcha"}
                                    type={"text"}
                                    register={registerInput}
                                    validationSchema={{
                                        required: "Captcha is required field"
                                    }}
                                    placeholder={"captcha"}
                                    errors={errors}
                                    onClearErrors={onClearErrors}
                            />
            }
            {
                captcha &&
                <div>
                    <img src={captcha} alt={captcha}/>
                </div>
            }
            <Button fontSize='16px'>
                Log In
            </Button>
        </LoginForm>
    )
}

const LoginForm = styled.form`
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-row-gap: 5px;
  align-content: start;
`

const LoginCheckboxWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 20px 120px;
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
`