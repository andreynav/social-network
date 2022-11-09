import React from "react";
import {Button} from "../../../common/button/Button";
import {Label} from "../../../common/Label/Label";
import {InputField} from "../../../index";
import styled from "styled-components";

export const FormProfileInfo = ({onSubmit, register, errors, profileData}) => {

    const profileItems = profileData.map((item, index) => {
        return (
            <ItemWrapper key={index}>
                <InputField name={item.inputName}
                            label={item.itemName}
                            type={"text"}
                            register={register}
                            defaultValue={item.itemData}
                            // validationSchema={{
                            //     required: "Email is required field",
                            //     minLength: {value: 5, message: "min length is 5 characters"}
                            // }}
                            errors={errors}
                            // onClearErrors={onClearErrors}
                />
                {
                    errors &&
                    <Label color={'error'} >
                        {errors[item.itemName] && errors[item.itemName]?.message || errors.server?.message}
                    </Label>
                }
            </ItemWrapper>
        )
    })

    return (
        <form onSubmit={onSubmit}>
            {profileItems}
            <Button fontSize='16px'>
                Save
            </Button>
        </form>
    );
}

const ItemWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  align-items: center;
`