import React, {useEffect} from "react";
import style from "./Login.module.css"
import {useForm} from "react-hook-form";
import {FormLogin} from "../index";
import {loginUser, selectError, selectIsAuth} from "../../store/authReducer";
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
        setError,
        clearErrors
    } = useForm({mode: "onBlur"});

    const onFormSubmit = (data) => {
        dispatch(loginUser({
            email: data.email,
            password: data.password,
            rememberMe: data.rememberMe
        }));
        !!errors.server && reset();
    }

    const onClearErrors = () => {
        errors.server && clearErrors();
    }

    useEffect(() => {
        props.isAuth && navigate('/profile');
        props.error && setError('server', {message: props.error});
    }, [props.isAuth, props.error]);

    return (
        <div className={wrapper}>
            <div className={title}>Login</div>
            <div className={formWrapper}>
                <FormLogin onSubmit={handleSubmit(onFormSubmit)}
                           registerInput={register}
                           errors={errors}
                           onClearErrors={onClearErrors}
                           registerCheckbox={register("rememberMe")}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: selectIsAuth(state),
    error: selectError(state),
});

export default connect(mapStateToProps, {loginUser})(Login);