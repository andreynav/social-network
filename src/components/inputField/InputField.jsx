import React from "react";
import styled from 'styled-components'
import {Label} from "../index";

export default function InputField(props) {
    const {
        name,
        label,
        type,
        register,
        validationSchema,
        placeholder,
        errors,
        onClearErrors,
        ...inputProps
    } = props;

    return (
        <InputWrapper>
            <Label htmlFor={name}>
                {label}
            </Label>
            <Input name={name}
                   type={type}
                   {...register(name, validationSchema)}
                   placeholder={placeholder}
                   onClick={onClearErrors}
                   {...inputProps}
            />
            {
                errors &&
                <Label error>
                    {errors[name] && errors[name]?.message || errors.server?.message}
                </Label>
            }
        </InputWrapper>
    )
}

const InputWrapper = styled.div`
  display: grid;
  grid-template-rows: 16px auto 16px;
  align-items: center;
`
const Input = styled.input`
  display: grid;
  min-width: 100%;
  height: 35px;
  border: 1px solid darkgrey;
  border-radius: 4px;
  padding: 0 5px;
  font-size: 16px;
`
