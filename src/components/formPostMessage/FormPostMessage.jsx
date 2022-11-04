import React from "react";
import {Button, TextAreaField} from "../index";
import styled from "styled-components";

export default function FormPostMessage(props) {
    const {onSubmit, register, validationSchema, errors} = props;

    return (
        <FormProfilePost onSubmit={onSubmit}>
            <ProfilePostAreaWrapper>
                <TextAreaField name={"postMessage"}
                               register={register}
                               validationSchema={validationSchema}
                               errors={errors?.postMessage} />
            </ProfilePostAreaWrapper>
            <Button fontSize='16px'
                    areaName={'profilePostButton'}
            >
                Send
            </Button>
        </FormProfilePost>
    );
}

const FormProfilePost = styled.form`
  display: grid;
  grid-template-columns: 1fr 100px;
  grid-template-rows: auto 35px;
  grid-template-areas: "profilePostArea profilePostArea"
                       ". profilePostButton";
`

const ProfilePostAreaWrapper = styled.div`
  display: grid;
  grid-area: profilePostArea;
  margin: 5px 0;
  border-radius: 8px;
`
