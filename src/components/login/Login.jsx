import React from "react";
import style from "./Login.module.css"
import {useForm} from "react-hook-form";
import {FormLogin} from "../index";


export default function Login() {
    const {wrapper, title, formWrapper} = style;
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({mode: "onBlur"});

    const onFormSubmit = (data) => {
        console.log(data)
        reset();
    }

    return (
        <div className={wrapper}>
            <div className={title}>Login</div>
            <div className={formWrapper}>
                <FormLogin onSubmit={handleSubmit(onFormSubmit)}
                           registerInput={register}
                           errors={errors}
                           registerCheckbox={register("checkbox")} />
            </div>
        </div>
    )
}
