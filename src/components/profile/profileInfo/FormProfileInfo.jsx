import React from "react";
import {Button} from "../../common/button/Button";
import {InputField} from "../../index";
import styled from "styled-components";

export const FormProfileInfo = ({onSubmit, register, errors, profileData, onClearErrors}) => {
    const profileItems = profileData.map((item) => {

        const isPutError = errors.server?.message.split('>')[1].split(')')[0] === item.itemName ? true : false // refactor
        return (
            <ItemWrapper key={item.inputName}>
                <InputField name={item.inputName}
                            label={item.itemName}
                            type={item.itemType}
                            register={register}
                            defaultValue={item.itemData}
                            errors={errors}
                            isPutError={isPutError}
                            onClearErrors={onClearErrors}
                            height='22'
                />
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