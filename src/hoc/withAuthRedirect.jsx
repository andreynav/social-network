import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const withAuthRedirect = (Component) => {
	const ContainerWithAuthRedirect = (props) => {
		const isAuth = useSelector((state) => state.auth.isAuth)
		if (!isAuth) return <Navigate to="/login" />
		return <Component {...props} />
	}

	ContainerWithAuthRedirect.displayName = `withAuthRedirect(${
		Component.displayName || Component.name
	})`
	return ContainerWithAuthRedirect
}
