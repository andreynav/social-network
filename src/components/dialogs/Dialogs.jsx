import React from "react";
import style from "./Dialogs.module.css";
import {DialogMessage, DialogUser, FormPostMessage} from "../index"
import {useForm} from "react-hook-form";

export default function Dialogs(props) {
    const {dialogWrapper, dialogMessagesWrapper, dialogUsersContainer, dialogMessages, dialogTextArea} = style;
    const {dialogUsers, messages, addMessageAC} = props;

    let dialogsUsers = dialogUsers.map(user => <DialogUser key={user.id} userName={user.name} userId={user.id}/>);
    let userMessages = messages.map((message, item) => <DialogMessage key={item} message={message.message}/>);

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({mode: "onBlur"});

    const onFormSubmit = (data) => {
        addMessageAC({message: data.postMessage})
        reset();
    }

    return (
        <div className={dialogWrapper}>
            <div className={dialogMessagesWrapper}>
                <div className={dialogUsersContainer}>
                    {dialogsUsers}
                </div>
                <div className={dialogMessages}>
                    {userMessages}
                </div>
            </div>
            <div className={dialogTextArea}>
                <FormPostMessage onSubmit={handleSubmit(onFormSubmit)}
                            register={register}
                            validationSchema={{
                                required: "Required field",
                                maxLength: {value: 100, message: "max length is 100 characters"}
                            }}
                            errors={errors} />
            </div>
        </div>
    );
}