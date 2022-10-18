import React from "react";
import style from "./Login.module.css"
import {useForm} from "react-hook-form";
import {InputField} from "../index";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({mode: "onBlur"});

    const onFormSubmit = (data) => {
        console.log(data)
        console.log(errors)
        reset();
    }

    return (
        <div className={style.wrapper}>
            <div className={style.title}>
                Login
            </div>
            <div className={style.formWrapper}>
                <form className={style.form} onSubmit={handleSubmit(onFormSubmit)}>
                    <div>
                        <InputField name={"email"}
                                    label={"Email"}
                                    type={"text"}
                                    register={register}
                                    validationSchema={{required: "Email is required field",
                                        minLength: {value: 5, message: "min length 5 characters"}}}
                                    placeholder={"example@gmail.com"}
                                    errors={errors?.email} />
                    </div>
                    <div>
                        <InputField name={"password"}
                                    label={"Password"}
                                    type={"text"}
                                    register={register}
                                    validationSchema={{required: "Password is required field",
                                        minLength: {value: 5, message: "min length 5 characters"}}}
                                    placeholder={"password"}
                                    errors={errors?.password} />
                    </div>
                    <div className={style.loginItem}>
                        <label htmlFor="rememberMe">
                            <span>remember me</span>
                            <input className={style.loginInput}
                                   name={"rememberMe"}
                                   type={"checkbox"}
                                   {...register("checkbox")}
                            />
                        </label>
                    </div>
                    <input className={style.loginInput}
                           type={"submit"}
                    />
                </form>
            </div>
        </div>
    )
}

