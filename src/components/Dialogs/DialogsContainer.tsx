import { compose } from '@reduxjs/toolkit'
import { withAuthRedirect } from 'hoc/withAuthRedirect'
import { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import {
	dialogActions,
	selectDialogUsers,
	selectMessages
} from 'store/dialogReducer'
import { RootState } from 'store/store'

import { Dialogs } from './Dialogs'

const mapStateToProps = (state: RootState) => ({
	dialogUsers: selectDialogUsers(state),
	messages: selectMessages(state)
})

const addMessage = dialogActions.addMessageAC

const DialogContainer = compose(
	connect(mapStateToProps, { addMessage }),
	withAuthRedirect
)(Dialogs)

export default DialogContainer as FunctionComponent
