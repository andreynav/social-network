import React from "react"
import style from "./ProfileStatus.module.css"

export class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
    }

    onEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    render() {
        return (
            <div className={style.statusWrapper}>
                <div className={style.statusTitle}>About me:</div>
                { this.state.editMode
                    ? <div className={style.statusInput}>
                        <input type="text"
                               defaultValue={this.props.aboutMe || "Yo-yo-yo"}
                               onBlur={this.onEditMode}
                               autoFocus />
                    </div>
                    : <div className={style.statusText}
                           onClick={this.onEditMode}>
                        {this.props.aboutMe}
                    </div>
                }
            </div>
        );
    }
}
