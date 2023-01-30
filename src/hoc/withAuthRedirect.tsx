import { useAppSelector } from 'hook/hooks'
import * as React from 'react'
import { Navigate } from 'react-router-dom'

export const withAuthRedirect = <T,>(Component: React.ComponentType<T>) => {
  const ContainerWithAuthRedirect = (props: T & { isAuth: boolean }) => {
    const isAuth = useAppSelector((state) => state.auth.isAuth)
    return isAuth ? <Component {...props} /> : <Navigate to="/login" />
  }

  ContainerWithAuthRedirect.displayName = `withAuthRedirect(${
    Component.displayName || Component.name
  })`
  return ContainerWithAuthRedirect as React.FunctionComponent
}
