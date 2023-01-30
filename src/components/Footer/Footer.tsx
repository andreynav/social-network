import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

export const Footer = () => {
  const { t } = useTranslation()
  const email = 'nav.testsw@gmail.com'
  const phone = '+375 29 6066602'

  return (
    <FooterWrapper>
      <FooterAddress>
        <a href={`mailto:${email}`}>
          {t('footer.email')}: {email}
        </a>
      </FooterAddress>
      <FooterAddress>
        <a href={`tel:${phone}`}>
          {t('footer.phone')}: {phone}
        </a>
      </FooterAddress>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  display: grid;
  grid-area: footer;
  grid-column: 1/5;
  padding: 5px 20px;
  background-color: ${(props) => props.theme.bgColorSecondary};
  border-top: 1px solid ${(props) => props.theme.borderPrimary};

  & a:link {
    text-decoration: none;
  }
`

const FooterAddress = styled.div`
  justify-self: end;
  align-self: center;

  & a {
    color: ${(props) => props.theme.colorPrimary};
  }
`
