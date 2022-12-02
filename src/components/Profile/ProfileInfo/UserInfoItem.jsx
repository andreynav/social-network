import React from "react";
import {Label} from "../../index";
import styled from "styled-components";

export const UserInfoItem = ({itemData, itemName, itemType}) => {
    return (
        <ItemWrapper>
            <Label fontSize='10px'>{itemName}</Label>
            {
                itemType === 'checkbox'
                ? <div>{itemData ? 'Yes' : 'No'}</div>
                : <div>{itemData || " - "}</div>
            }

        </ItemWrapper>
    )
}

const ItemWrapper = styled.div`
  display: grid;
  grid-template-rows: 12px auto;
  align-items: center;
  margin-bottom: 8px;
`
