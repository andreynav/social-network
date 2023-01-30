import { Avatar, Like } from 'components/index'
import styled from 'styled-components'

type PostPropsT = {
  message: string
  likeCount: number
}

export const Post = ({ message, likeCount }: PostPropsT) => {
  return (
    <PostWrapper>
      <Avatar />
      <PostSection>{message}</PostSection>
      <Like likeCount={likeCount} />
    </PostWrapper>
  )
}

const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 70px;
  grid-template-rows: minmax(100px, auto) auto;
  margin: 20px 0;

  & div:nth-child(3) {
    grid-column: 3/4;
    grid-row: 2/3;
  }
`

const PostSection = styled.div`
  display: grid;
  grid-column: 2/4;
  grid-row: 1/2;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.borderPrimary};
  border-radius: 8px;
  padding: 5px;
`
