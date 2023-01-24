import styled from 'styled-components'

import { like } from '../../../assets'

export const Like = ({ likeCount }: { likeCount: number }): JSX.Element => {
	return (
		<PostLike>
			<img src={like} alt="like" />
			<div>{likeCount}</div>
		</PostLike>
	)
}

const PostLike = styled.div`
	display: grid;
	grid-template-columns: 2fr;
	justify-self: end;
	margin: 5px 0;
	color: ${(props) => props.theme.colorLike};
	font-size: 14px;

	& img {
		grid-column: 1/2;
		height: 14px;
		width: 14px;
		align-self: center;
	}

	& div {
		grid-column: 2/3;
		padding: 0 0 0 3px;
		color: ${(props) => props.theme.colorPrimary};
	}
`
