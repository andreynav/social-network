import { ReactComponent as LogoSVG } from 'assets/img/logo.svg'
import styled from 'styled-components'

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoSVG />
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  & svg {
    height: auto;
    width: auto;
  }

  & g {
    fill: ${(props) => props.theme.colorSecondary};
  }
`
