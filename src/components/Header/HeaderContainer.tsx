import { ConnectedProps, connect } from 'react-redux'

import {
	UserNameOrNullT,
	logoutUser,
	selectIsAuth,
	selectLogin
} from '../../store/authReducer'
import { RootState } from '../../store/store'
import { Header } from '../index'

type MapStateToPropsT = {
	userName: UserNameOrNullT
	isAuth: boolean
}

type MapDispatchToPropsT = {
	logoutUser: () => void
}

const HeaderContainer = ({
	isAuth,
	userName,
	logoutUser: logout
}: PropsFromRedux) => {
	return <Header logoutUser={logout} isAuth={isAuth} userName={userName} />
}

const mapStateToProps = (state: RootState): MapStateToPropsT => ({
	userName: selectLogin(state),
	isAuth: selectIsAuth(state)
})

const mapDispatchToProps: MapDispatchToPropsT = {
	logoutUser
}

const connector = connect(mapStateToProps, mapDispatchToProps)
export type PropsFromRedux = ConnectedProps<typeof connector>

export const HeaderContainerWithMapProps = connector(HeaderContainer)
