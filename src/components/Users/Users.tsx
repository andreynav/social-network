import { PhotosT } from 'api/api'
import { Loader, Paginator, User } from 'components/index'
import { useTranslation } from 'react-i18next'
import { UserT } from 'store/usersReducer'
import styled from 'styled-components'

type UsersPropsT = {
  totalCount: number
  usersOnPage: number
  isFetching: boolean
  followInProgress?: Array<number>
  users: Array<UserT & { photos: Partial<PhotosT> }>
  selectPage: (page: number) => void
  onChangeToggle: (id: number) => void
}

export const Users = (props: UsersPropsT) => {
  const {
    totalCount,
    usersOnPage,
    users,
    selectPage,
    isFetching,
    onChangeToggle,
    followInProgress
  } = props
  const { t } = useTranslation()
  const dynamicTitle = t('users.title', { count: totalCount })
  const usersItems = users.map((user) => (
    <User
      key={user.id}
      id={user.id}
      name={user.name}
      status={user.status}
      city={user.city}
      followed={user.followed}
      photos={user.photos}
      toggleFollow={onChangeToggle}
      followInProgress={followInProgress}
      isNavLink
    />
  ))

  return (
    <UsersWrapper>
      <h3>{dynamicTitle}</h3>
      <Paginator
        selectPage={selectPage}
        totalCount={totalCount}
        usersOnPage={usersOnPage}
      />
      {isFetching ? <Loader /> : <div>{usersItems}</div>}
    </UsersWrapper>
  )
}

const UsersWrapper = styled.div`
  overflow: auto;
  display: grid;
  grid-template-rows: 30px 30px auto;
`
