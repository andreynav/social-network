import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const withRouter = (Component) => {
	const ComponentWithRouterProp = (props) => {
		let params = useParams()
		let id = useSelector((state) => state.auth.id)
		return <Component {...props} currentUserId={params.id || id} userId={id} />
	}

	ComponentWithRouterProp.displayName = `withRouter(${
		Component.displayName || Component.name
	})`
	return ComponentWithRouterProp
}