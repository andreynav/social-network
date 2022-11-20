import React, {memo} from "react";
import {Label, PhotoSection} from "../index";
import styled from "styled-components";

export const User = memo((props) => {
    const {photos, id, name, status, followInProgress, toggleFollow, followed, city} = props

    const userDataArray = [
        {itemName: "Full name", value: name},
        {itemName: "Status", value: status},
        {itemName: "Id", value: id},
        {itemName: "City", value: city},
    ]

    const userItems = userDataArray.map((item, index) =>
        <div key={index}>
            <Label fontSize='10px'>{item.itemName}</Label>
            <div>
                {item.value || " - "}
            </div>
        </div>
    )

    return (
        <UserWrapper>
            <PhotoSection photos={photos}
                          name={name}
                          id={id}
                          followed={followed}
                          toggleFollow={toggleFollow}
                          followInProgress={followInProgress} />
            <UserData>
                {userItems}
            </UserData>
        </UserWrapper>
    );
})

const UserWrapper = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  margin: 20px 0 10px 0;
`

const UserData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: transparent;
  border: 1px solid ${props => props.theme.borderPrimary};
  border-radius: 8px;
  padding: 8px;
  font-weight: normal;
  align-items: center;
`
