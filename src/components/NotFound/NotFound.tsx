import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NotFound = () => {
	const { t } = useTranslation()

	return (
		<NotFoundWrapper>
			<div>{t('notFound.description')}</div>
			<div>
				{t('notFound.goTo')}
				<NavLink to="/profile">{t('notFound.profile')}</NavLink>
			</div>
		</NotFoundWrapper>
	)
}

const NotFoundWrapper = styled.div`
	display: grid;
	grid-template-rows: 24px 24px;
	justify-content: center;
	background-color: ${(props) => props.theme.bgColorSecondary};
	color: ${(props) => props.theme.colorPrimary};

	& div:first-child {
		font-weight: bold;
	}

	& a {
		color: ${(props) => props.theme.colorSecondary};
		text-decoration: none;
	}

	& a.active {
		color: ${(props) => props.theme.colorSecondary};
	}
`
