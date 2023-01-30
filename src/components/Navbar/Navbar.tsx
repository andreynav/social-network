import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Navbar = () => {
  const { t } = useTranslation()

  return (
    <NavbarWrapper>
      <NavbarItem>
        <NavLink to="/profile">{t('navbar.profile')}</NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink to="/massages">{t('navbar.dialogs')}</NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink to="/users">{t('navbar.users')}</NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink to="/news">{t('navbar.news')}</NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink to="/music">{t('navbar.music')}</NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink to="/settings">{t('navbar.settings')}</NavLink>
      </NavbarItem>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  display: grid;
  grid-area: nav;
  grid-column: 1;
  margin: 20px 10px 0 20px;
  padding: 20px;
  border-radius: 8px;
  align-self: start;
  background-color: ${(props) => props.theme.bgColorSecondary};
`

const NavbarItem = styled.div`
  margin: 5px 0;

  & a {
    font-size: 20px;
    color: ${(props) => props.theme.colorPrimary};
    text-decoration: none;
  }

  & a.active {
    color: ${(props) => props.theme.colorSecondary};
  }
`
