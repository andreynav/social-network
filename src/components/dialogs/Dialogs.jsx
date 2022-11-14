import React from "react";
import {DialogMessage, DialogUser, FormPostMessage} from "../index"
import {useForm} from "react-hook-form";
import styled from "styled-components";

export default function Dialogs(props) {
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
        <DialogWrapper>
            <DialogMessagesWrapper>
                <DialogUsersContainer>
                    {dialogsUsers}
                </DialogUsersContainer>
                <DialogMessages>
                    {userMessages}
                </DialogMessages>
            </DialogMessagesWrapper>
            <DialogTextArea>
                <FormPostMessage onSubmit={handleSubmit(onFormSubmit)}
                            register={register}
                            validationSchema={{
                                required: "Required field",
                                maxLength: {value: 100, message: "max length is 100 characters"}
                            }}
                            errors={errors} />
            </DialogTextArea>
        </DialogWrapper>
    );
}

const DialogWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 170px;
  grid-template-columns: 200px 1fr;
  overflow: auto;
`

const DialogMessagesWrapper = styled.div`
  display: grid;
  grid-column: 1/3;
  grid-template-columns: 200px 1fr;
  overflow: auto;
`

const DialogUsersContainer = styled.div`
  display: grid;
  align-self: start;
  background-color: transparent;
  border: 1px solid ${props => props.theme.borderPrimary};
  border-radius: 8px;
  padding: 10px;
`

const DialogMessages = styled.div`
  display: grid;
  margin-left: 20px;
  align-self: start;
  overflow: visible ;
`

const DialogTextArea = styled.div`
  display: grid;
  grid-column: 2/3;
  padding-top: 5px;
`