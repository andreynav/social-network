import { compose } from '@reduxjs/toolkit'
import React, { Suspense, lazy, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import { withRouter } from '../../hoc/withRouter'
import { initializeApp, selectIsInitialized } from '../../store/appReducer'
import {
	Footer,
	HeaderContainerWithMapProps,
	Loader,
	Login,
	Music,
	Navbar,
	News,
	NotFound,
	Settings
} from '../index'

const DialogsContainer = lazy(() => import('../Dialogs/DialogsContainer'))
const ProfileContainer = lazy(() => import('../Profile/ProfileContainer'))
const UsersContainer = lazy(() => import('../Users/UsersContainer'))

const App = (props) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(initializeApp())
	}, [])

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
						<Route path="/news" element={<News />} />
						<Route path="/music" element={<Music />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/login" element={<Login />} />
						<Route path="/*" element={<NotFound />} />
					</Routes>
				</Suspense>
			</ContentWrapper>
			<Footer />
		</AppWrapper>
	)
}

const mapStateToProps = (state) => ({
	isInitialized: selectIsInitialized(state)
})

export default compose(
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
