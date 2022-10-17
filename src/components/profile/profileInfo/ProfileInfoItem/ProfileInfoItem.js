import React from "react"
import style from "./ProfileInfoItem.module.css"

export class ProfileInfoItem extends React.Component {
    state = {
        editMode: false,
        status: this.props.itemData,
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.itemData !== this.props.itemData) {
            this.setState({status: this.props.itemData});
        }
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
                               defaultValue={this.state.status}
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
