import React from "react";
import {InputField} from "../index";
import styled from "styled-components";

export const Captcha = ({name, label, register, errors, onClearErrors, captcha, height }) => {
    return (
        <CaptchaWrapper>
            <InputField name={name}
                        label={label}
                        type="text"
                        register={register}
                        validationSchema={{
                            required: "Captcha is required field"
                        }}
                        placeholder="captcha"
                        errors={errors}
                        onClearErrors={onClearErrors}
            />
            <ImageWrapper height={height}>
                <img src={captcha} alt={captcha}/>
            </ImageWrapper>
        </CaptchaWrapper>
    )
}

const CaptchaWrapper = styled.div`
  display: grid;
  grid-gap: 5px;
  margin-bottom: 15px;
`

const ImageWrapper = styled.div`
  display: grid;
  justify-content: center;
  
  & img {
    height: ${({height = 'auto'}) => height}px;
    border: 1px solid ${props => props.theme.borderPrimary};
  }
`