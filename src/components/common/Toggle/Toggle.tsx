import styled from 'styled-components'

type OwnPropsT = {
  isChecked: boolean
  onChange: () => void
  labelLeft?: string
  labelRight?: string
}

export const Toggle = ({
  labelLeft,
  labelRight,
  onChange,
  isChecked
}: OwnPropsT) => {
  return (
    <ToggleWrapper>
      <ToggleLabel>
        <ToggleStrongLeft>{labelLeft}</ToggleStrongLeft>
        <ToggleInput
          type="checkbox"
          defaultChecked={isChecked}
          onClick={onChange}
        />
        <ToggleSpan />
        <ToggleStrongRight>{labelRight}</ToggleStrongRight>
      </ToggleLabel>
    </ToggleWrapper>
  )
}

const ToggleWrapper = styled.div`
  display: grid;
`

const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
`

const ToggleInput = styled.input`
  display: none;

  &:checked + span {
    // background-color: ${(props) => props.theme.colorSecondary};
    background-color: transparent;
  }

  &:checked + span:before {
    transform: translateX(29px);
  }
`

const ToggleSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colorPrimary};
  transition: 0.3s;
  border-radius: 30px;

  &:before {
    position: absolute;
    content: '';
    height: 22px;
    width: 22px;
    left: 3px;
    bottom: 3px;
    background-color: ${(props) => props.theme.colorSecondary};
    border-radius: 50%;
    transition: 0.3s;
  }
`

const ToggleStrongRight = styled.strong`
  position: absolute;
  left: 100%;
  width: max-content;
  line-height: 30px;
  margin-left: 10px;
  cursor: pointer;
`

const ToggleStrongLeft = styled.strong`
  position: absolute;
  right: 100%;
  width: max-content;
  line-height: 30px;
  margin-right: 10px;
  cursor: pointer;
`
