import React from "react";
import style from "./FormLogin.module.css";
import {InputField} from "../../index";

export default function FormLogin(props) {
    const {form, loginCheckbox, checkbox, labelTitle, loginButton} = style;
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
                <label className={labelTitle} htmlFor="rememberMe">
                    <span>remember me</span>
                </label>
            </div>
            <button className={loginButton}>Log In</button>
        </form>
    )
}
