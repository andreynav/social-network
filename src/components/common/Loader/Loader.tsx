import { PropsWithChildren } from 'react'
import styled from 'styled-components'

type StyledLoaderT = {
	alignSelf: string
	justifySelf: string
}

export const Loader = (props: PropsWithChildren<Partial<StyledLoaderT>>) => {
	return <StyledLoader {...props} />
}

const StyledLoader = styled.div<Partial<StyledLoaderT>>`
	display: grid;
	align-self: ${({ alignSelf = 'center' }) => alignSelf};
	justify-self: ${({ justifySelf = 'center' }) => justifySelf};
	width: 30px;
	padding: 8px;
	aspect-ratio: 1;
	border-radius: 50%;
	background: ${(props) => props.theme.colorLoader};
	--_m: conic-gradient(#0000 10%, #000),
		linear-gradient(#000, #000, #000) content-box;
	-webkit-mask: var(--_m);
	mask: var(--_m);
	-webkit-mask-composite: source-out;
	mask-composite: subtract;
	animation: s3 1s infinite linear;

	@keyframes s3 {
		to {
			transform: rotate(1turn);
		}
	}
`
