import { compose } from '@reduxjs/toolkit'
import React, { Suspense, lazy, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import { withRouter } from '../../hoc/withRouter'
import { initializeApp, selectIsInitialized } from '../../store/appReducer'
import { AppDispatch, RootState } from '../../store/store'
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
	currentUserId: number | null
	isInitialized: MapStateToPropsT
	userId: number | null
	initializeApp: () => void
}

const App = (props: AppPropsT) => {
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(initializeApp())
	}, [dispatch])

	if (!props.isInitialized) {
		return <Loader />
	}

	return (
		<AppWrapper>
			<HeaderContainerWithMapProps />
			<Navbar />
			<ContentWrapper>
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path="/" element={<ProfileContainer />} />
						<Route path="/profile" element={<ProfileContainer />} />
						<Route path="/profile/:id" element={<ProfileContainer />} />
						<Route path="/massages" element={<DialogsContainer />} />
						<Route path="/massages/:id" element={<DialogsContainer />} />
						<Route path="/users" element={<UsersContainer />} />
						<Route path="/users/:id" element={<UsersContainer />} />
						<Route path="/news" element={<NewsContainer />} />
						<Route path="/music" element={<MusicContainer />} />
						<Route path="/settings" element={<SettingsContainer />} />
						<Route path="/login" element={<LoginWithMapProps />} />
						<Route path="/*" element={<NotFound />} />
					</Routes>
				</Suspense>
			</ContentWrapper>
			<Footer />
		</AppWrapper>
	)
}

const mapStateToProps = (state: RootState): MapStateToPropsT => ({
	isInitialized: selectIsInitialized(state)
})

export const AppContainer = compose<React.FunctionComponent>(
	connect(mapStateToProps, { initializeApp }),
	withRouter
)(App)

const AppWrapper = styled.div`
	display: grid;
	grid-template-columns: 220px 3fr;
	grid-template-rows: 60px calc(100vh - 120px) 60px;
	grid-template-areas:
		'header header header header'
		'nav main main main'
		'footer footer footer footer';
	font-size: 16px;
	background-color: ${(props) => props.theme.bgColorPrimary};
`

const ContentWrapper = styled.div`
	display: grid;
	margin: 20px 20px 20px 10px;
	padding: 20px;
	border-style: solid;
	border-width: 1px;
	border-radius: 8px;
	border-color: ${(props) => props.theme.borderPrimary};
	background-color: ${(props) => props.theme.bgColorSecondary};
	color: ${(props) => props.theme.colorPrimary};
`