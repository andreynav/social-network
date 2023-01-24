import * as React from 'react'
import { Navigate } from 'react-router-dom'

import { useAppSelector } from '../hook/hooks'

export const withAuthRedirect = <T,>(Component: React.ComponentType<T>) => {
	const ContainerWithAuthRedirect = (props: T & { isAuth: boolean }) => {
		const isAuth = useAppSelector((state) => state.auth.isAuth)
		if (!isAuth) return <Navigate to="/login" />
		return <Component {...props} />
	}

	ContainerWithAuthRedirect.displayName = `withAuthRedirect(${
		Component.displayName || Component.name
	})`
	return ContainerWithAuthRedirect as React.FunctionComponent
}
