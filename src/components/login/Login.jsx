import React, {useEffect} from "react";
import style from "./Login.module.css"
import {useForm} from "react-hook-form";
import {FormLogin} from "../index";
import {getAuthUserData, loginUser} from "../../store/authReducer";
import {connect, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

function Login(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {wrapper, title, formWrapper} = style;

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({mode: "onBlur"});

    const onFormSubmit = (data) => {
        dispatch(loginUser({
            email: data.email,
            password: data.password,
            rememberMe: data.rememberMe
        }))
        reset();
    }

    useEffect(() => {
        if (props.isAuth) {
            dispatch(getAuthUserData());
            navigate('/profile');
        }
    }, [props.isAuth]);

    return (
        <div className={wrapper}>
            <div className={title}>Login</div>
            <div className={formWrapper}>
                <FormLogin onSubmit={handleSubmit(onFormSubmit)}
                           registerInput={register}
                           errors={errors}
                           registerCheckbox={register("rememberMe")}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth,
        status: state.auth.status,
        error: state.auth.error,
    }
}

export default connect(mapStateToProps, {loginUser})(Login);