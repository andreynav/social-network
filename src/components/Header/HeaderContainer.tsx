import {Header} from "../index"
import {connect, ConnectedProps} from "react-redux"
import {logoutUser, selectIsAuth, selectLogin} from "../../store/authReducer"
import {RootState} from "../../store/store"

type MapStateToPropsT = {
    userName: string | null
    isAuth: boolean
}

type MapDispatchToPropsT = {
    logoutUser: () => void
}

const HeaderContainer = ({isAuth, userName, logoutUser}: PropsFromRedux) => {
    const logout = () => logoutUser()

    return (
        <Header logoutUser={logout} isAuth={isAuth} userName={userName}/>
    )
}

const mapStateToProps = (state: RootState): MapStateToPropsT => ({
    userName: selectLogin(state),
    isAuth: selectIsAuth(state),
})

const mapDispatchToProps: MapDispatchToPropsT = {
    logoutUser
}

const connector = connect(mapStateToProps, mapDispatchToProps)
export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(HeaderContainer)