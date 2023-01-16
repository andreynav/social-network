import { AnyAction } from '@reduxjs/toolkit'

export const isActionError = (action: AnyAction) => {
	return action.type.endsWith('/rejected')
}
