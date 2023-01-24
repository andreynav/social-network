import { compose } from '@reduxjs/toolkit'
import { FunctionComponent } from 'react'
import { connect } from 'react-redux'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {
	addMessageAC,
	selectDialogUsers,
	selectMessages
} from '../../store/dialogReducer'
import { RootState } from '../../store/store'
import { Dialogs } from '../index'

const mapStateToProps = (state: RootState) => ({
	dialogUsers: selectDialogUsers(state),
	messages: selectMessages(state)
})

const DialogContainer = compose(
	connect(mapStateToProps, { addMessageAC }),
	withAuthRedirect
)(Dialogs)

export default DialogContainer as FunctionComponent
