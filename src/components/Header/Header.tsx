import { Button, Logo } from 'components/index'
import { useTranslation } from 'react-i18next'
import { UserNameOrNullT } from 'store/authReducer'
import styled from 'styled-components'

type OwnPropsT = {
  isAuth: boolean
  userName: UserNameOrNullT
  logoutUser: () => void
}

export const Header = ({ isAuth, userName, logoutUser }: OwnPropsT) => {
  const loginButtonProps = {
    fontSize: '1rem',
    transform: 'none',
    bgColor: 'transparent',
    brWidth: '0'
  }
  const { t } = useTranslation()

  return (
    <HeaderWrapper>
      <Logo />
      <HeaderTitle>4GEEKS</HeaderTitle>
      <HeaderLoginWrapper>
        {isAuth ? (
          <div>
            <p>{userName}</p>
            <Button onClick={logoutUser} {...loginButtonProps}>
              {t('header.logout')}
            </Button>
          </div>
        ) : (
          <Button {...loginButtonProps}>{t('header.login')}</Button>
        )}
      </HeaderLoginWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: grid;
  grid-area: header;
  grid-template-columns: 40px 3fr 2fr;
  grid-template-rows: 1fr;
  align-items: center;
  background-color: ${(props) => props.theme.bgColorSecondary};
  color: ${(props) => props.theme.colorPrimary};
  padding: 0 20px;
  border-bottom: 1px solid ${(props) => props.theme.borderPrimary};
`

const HeaderTitle = styled.div`
  display: grid;
  font-size: 26px;
  font-weight: bold;
  color: ${(props) => props.theme.colorSecondary};
`

const HeaderLoginWrapper = styled.div`
  display: grid;
  justify-items: end;

  & div {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto auto;
  }

  & div p {
    display: grid;
    width: auto;
    align-content: center;
    color: ${(props) => props.theme.colorSecondary};
  }

  & div button {
    display: grid;
    width: auto;
    justify-content: end;
  }

  & button {
    display: grid;
    justify-content: end;
  }
`
