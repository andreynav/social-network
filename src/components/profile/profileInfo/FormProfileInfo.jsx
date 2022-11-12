import React from "react";
import {Button} from "../../common/button/Button";
import {InputField, Label} from "../../index";
import styled from "styled-components";

export const FormProfileInfo = ({onSubmit, register, registerCheckbox, errors, profileData, onClearErrors}) => {
    const profileItems = profileData.map((item) => {

        const isPutError = errors.server?.message.split('>')[1].split(')')[0] === item.itemName ? true : false // refactor
        return (
            <ItemWrapper key={item.inputName}>
                {
                    item.itemType === 'text' &&
                    <InputField name={item.inputName}
                                label={item.itemName}
                                type={item.itemType}
                                register={register}
                                errors={errors}
                                isPutError={isPutError}
                                onClearErrors={onClearErrors}
                                height='22'
                    />
                }
                {
                    item.itemType === 'checkbox' &&
                    <LoginCheckboxWrapper>
                        <Label htmlFor={item.inputName} fontSize='10px'>
                            {item.itemName}
                        </Label>
                        <LoginCheckbox name={item.inputName}
                                       type={item.itemType}
                                       {...registerCheckbox}
                        />
                    </LoginCheckboxWrapper>
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

const LoginCheckboxWrapper = styled.div`
  display: grid;
  grid-template-rows: 16px auto 16px;
`

const LoginCheckbox = styled.input`
  align-content: center;
  height: 35px;
  width: 20px;
  justify-self: center;
`