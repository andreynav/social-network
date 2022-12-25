import { compose } from '@reduxjs/toolkit'
import React from 'react'
import { connect } from 'react-redux'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {
	addMessageAC,
	selectDialogUsers,
	selectMessages
} from '../../store/dialogReducer'
import { Dialogs } from '../index'

let mapStateToProps = (state) => ({
	dialogUsers: selectDialogUsers(state),
	messages: selectMessages(state)
})

export default compose(
	connect(mapStateToProps, { addMessageAC }),
	withAuthRedirect
)(Dialogs)
