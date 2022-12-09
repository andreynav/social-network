import React from "react";
import {Button, TextAreaField} from "../index";
import styled from "styled-components";
import {useTranslation} from "react-i18next";

export const FormPostMessage = (props) => {
    const {onSubmit, register, validationSchema, errors} = props
    const {t} = useTranslation()

    return (
        <FormProfilePost onSubmit={onSubmit}>
            <ProfilePostAreaWrapper>
                <TextAreaField name={"postMessage"}
                               register={register}
                               validationSchema={validationSchema}
                               errors={errors?.postMessage} />
            </ProfilePostAreaWrapper>
            <Button fontSize='14px' areaName={'profilePostButton'}>
                {t("profile.myPosts.send")}
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
