import React from "react";
import style from "./FormLogin.module.css";
import {Button, InputField, Label} from "../../index";

export default function FormLogin(props) {
    const {form, loginCheckbox, checkbox} = style;
    const {onSubmit, registerInput, errors, registerCheckbox, onClearErrors} = props;

    return (
        <form className={form} onSubmit={onSubmit}>
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
            <div className={loginCheckbox}>
                <input className={checkbox}
                       name={"rememberMe"}
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
            </div>
            <Button fontSize='16px'>
                Log In
            </Button>
        </form>
    )
}
