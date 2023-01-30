import { useAppSelector } from 'hook/hooks'
import * as React from 'react'
import { useParams } from 'react-router-dom'

export const withRouter = <T,>(Component: React.ComponentType<T>) => {
  const ComponentWithRouterProp = (props: T & { id: number }) => {
    const params = useParams()
    const id = useAppSelector((state) => state.auth.id)
    return <Component {...props} currentUserId={params.id || id} userId={id} />
  }

  ComponentWithRouterProp.displayName = `withRouter(${
    Component.displayName || Component.name
  })`
  return ComponentWithRouterProp
}
