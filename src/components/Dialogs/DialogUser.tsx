import { NavLink } from 'react-router-dom'
import { DialogUserT } from 'store/dialogReducer'
import styled from 'styled-components'

export const DialogUser = ({ name, id }: DialogUserT) => {
	return (
		<DialogUserWrapper>
			<NavLink to={`/massages/${id}`}>{name}</NavLink>
		</DialogUserWrapper>
	)
}

const DialogUserWrapper = styled.div`
	margin: 5px 0;

	& a {
		color: ${(props) => props.theme.colorPrimary};
		text-decoration: none;
	}

	& a.active {
		color: ${(props) => props.theme.colorSecondary};
	}
`
