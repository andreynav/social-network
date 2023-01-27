import { compose } from '@reduxjs/toolkit'
import { FunctionComponent, Suspense, lazy, useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import { withRouter } from '../../hoc/withRouter'
import { useAppDispatch } from '../../hook/hooks'
import { initializeApp, selectIsInitialized } from '../../store/appReducer'
import { IdOrNullT } from '../../store/authReducer'
import { RootState } from '../../store/store'
import {
	Footer,
	HeaderContainerWithMapProps,
	Loader,
	LoginWithMapProps,
	MusicContainer,
	Navbar,
	NewsContainer,
	NotFound,
	SettingsContainer
} from '../index'

const DialogsContainer = lazy(() => import('../Dialogs/DialogsContainer'))
const ProfileContainer = lazy(() => import('../Profile/ProfileContainer'))
const UsersContainer = lazy(() => import('../Users/UsersContainer'))

type MapStateToPropsT = {
	isInitialized: boolean
}

type AppPropsT = {
	currentUserId: IdOrNullT
	isInitialized: MapStateToPropsT
	userId: IdOrNullT
	initializeApp: () => void
}

const App = (props: AppPropsT) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(initializeApp())
	}, [dispatch])

	if (!props.isInitialized) {
		return <Loader />
	}

	return (
		<AppWrapper>
			<HeaderContainerWithMapProps />
			<MainWrapper>
				<Navbar />
				<ContentWrapper>
					<Suspense fallback={<Loader />}>
						<Routes>
							<Route path="/" element={<ProfileContainer />} />
							<Route
								path="/profile"
								element={<ProfileContainer />}
							/>
							<Route
								path="/profile/:id"
								element={<ProfileContainer />}
							/>
							<Route
								path="/massages"
								element={<DialogsContainer />}
							/>
							<Route
								path="/massages/:id"
								element={<DialogsContainer />}
							/>
							<Route path="/users" element={<UsersContainer />} />
							<Route
								path="/users/:id"
								element={<UsersContainer />}
							/>
							<Route path="/news" element={<NewsContainer />} />
							<Route path="/music" element={<MusicContainer />} />
							<Route
								path="/settings"
								element={<SettingsContainer />}
							/>
							<Route
								path="/login"
								element={<LoginWithMapProps />}
							/>
							<Route path="/*" element={<NotFound />} />
						</Routes>
					</Suspense>
				</ContentWrapper>
			</MainWrapper>
			<Footer />
		</AppWrapper>
	)
}

const mapStateToProps = (state: RootState): MapStateToPropsT => ({
	isInitialized: selectIsInitialized(state)
})

export const AppContainer = compose<FunctionComponent>(
	connect(mapStateToProps, { initializeApp }),
	withRouter
)(App)

const AppWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 60px calc(100vh - 120px) 60px;
	grid-template-areas:
		'header header header header'
		'nav main main main'
		'footer footer footer footer';
	font-size: 16px;
	background-color: ${(props) => props.theme.bgColorPrimary};
`
const MainWrapper = styled.div`
	display: grid;
	min-width: 1000px;
	grid-template-rows: calc(100vh - 120px);
	grid-template-columns: 220px auto;
	grid-template-areas: 'nav content';
	margin: 0 auto;
`

const ContentWrapper = styled.div`
	display: grid;
	grid-area: content;
	margin: 20px 20px 20px 10px;
	padding: 20px;
	border-style: solid;
	border-width: 1px;
	border-radius: 8px;
	border-color: ${(props) => props.theme.borderPrimary};
	background-color: ${(props) => props.theme.bgColorSecondary};
	color: ${(props) => props.theme.colorPrimary};
`
