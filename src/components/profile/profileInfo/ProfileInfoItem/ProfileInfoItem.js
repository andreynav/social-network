import React from "react"
import style from "./ProfileInfoItem.module.css"

export class ProfileInfoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.profileStatus,
        }
    }

    onEditMode = () => {
        if (this.props.currentUserId === this.props.userId) {
            this.setState({
                editMode: !this.state.editMode
            });
            if (this.state.editMode) this.props.updateProfileStatus(this.state.status);
        }
    }

    updateStatusValue = (event) => {
        this.setState({status: event.target.value });
    }

    render() {
        const {itemWrapper, itemTitle, itemInput, itemText} = style;
        const {itemData, itemName} = this.props;

        return (
            <div className={itemWrapper}>
                <div className={itemTitle}>{itemName}</div>
                { this.state.editMode
                    ? <div className={itemInput}>
                        <input type="text"
                               defaultValue={itemData}
                               onBlur={this.onEditMode}
                               onChange={this.updateStatusValue}
                               autoFocus />
                    </div>
                    : <div className={itemText}
                           onClick={this.onEditMode} >
                        {itemData}
                    </div>
                }
            </div>
        );
    }
}
