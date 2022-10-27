import React, {useEffect, useState} from "react"
import style from "./ProfileInfoItem.module.css"

export const ProfileInfoItem = (props) => {
    const {itemWrapper, itemTitle, itemInput, itemText} = style;
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
            <div className={itemTitle}>{itemName}</div>
            {editMode
                ? <div className={itemInput}>
                    <input type="text"
                           defaultValue={status}
                           onBlur={onEditMode}
                           onChange={updateStatusValue}
                           autoFocus/>
                </div>
                : <div className={itemText}
                       onClick={onEditMode}>
                    {itemData}
                </div>}
        </div>
    )
}
