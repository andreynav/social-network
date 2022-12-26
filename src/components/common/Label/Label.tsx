import React from 'react'
import styled from 'styled-components'

type StyledLabelT = {
	fontSize: string
	transform: string
}

export const Label = (props: React.PropsWithChildren<StyledLabelT>) => {
	return <StyledLabel {...props}>{props.children}</StyledLabel>
}

const StyledLabel = styled.div<StyledLabelT>`
	font-size: ${({ fontSize = '12px' }) => fontSize};
	text-transform: ${({ transform = 'uppercase' }) => transform};
	color: ${(props) =>
		props.color === 'error'
			? props.theme.colorError
			: props.theme.colorPrimary};
`
