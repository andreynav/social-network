import React, {memo} from "react";
import {PhotoSection, ProfileInfoItem} from "../index";
import styled from "styled-components";
import {useUserData} from "../hook/useUserData";

export const User = memo((props) => {
    const {photos, id, name, status, followInProgress, toggleFollow, followed, city} = props
    const userData = useUserData({name, status, id, city})

    const userItems = userData.map((item, index) => <ProfileInfoItem key={index}
                                                                     itemData={item.itemData}
                                                                     itemName={item.itemName} />)

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
