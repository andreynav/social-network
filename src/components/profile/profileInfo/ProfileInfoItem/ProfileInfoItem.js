import React, {memo, useEffect, useState} from "react"
import style from "./ProfileInfoItem.module.css"
import {Label} from "../../../index";

export const ProfileInfoItem = memo((props) => {
    const {itemWrapper, itemInput, itemText} = style;
    const {itemData, itemName, currentUserId, userId, updateProfileStatus} = props;

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(itemData);

    const onEditMode = () => {
        if (currentUserId === userId) {
            setEditMode(prevEditMode => !prevEditMode);
            if (editMode) updateProfileStatus(status);
        }
    }

    const updateStatusValue = (event) => {
        setStatus(event.target.value);
    }

    useEffect(() => {
        setStatus(itemData)
    }, [itemData]);

    return (
        <div className={itemWrapper}>
            <Label fontSize='10px'>{itemName}</Label>
            {editMode ?
                <div className={itemInput}>
                    <input type="text"
                           defaultValue={status}
                           onBlur={onEditMode}
                           onChange={updateStatusValue}
                           autoFocus/>
                </div> :
                <div className={itemText}
                       onClick={onEditMode}>
                    {itemData}
                </div>}
        </div>
    )
})
