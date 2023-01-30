import { PropsWithChildren } from 'react'
import styled from 'styled-components'

type RadioT = {
  name: string
  isChecked: boolean
  value: string
  label: string
  id?: string
}

export const Radio = (props: PropsWithChildren<RadioT>) => {
  return (
    <RadioButton>
      <input
        type="radio"
        name={props.name}
        id={props?.id || props.value}
        defaultChecked={props.isChecked}
        value={props.value}
      />
      <label htmlFor={props?.id || props.value}>{props.label}</label>
    </RadioButton>
  )
}

const RadioButton = styled.div`
  display: grid;
  align-content: center;

  & input[type='radio']:checked,
  & input[type='radio']:not(:checked) {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  & input[type='radio']:checked + label,
  & input[type='radio']:not(:checked) + label {
    display: inline-block;
    position: relative;
    padding-left: 36px;
    line-height: 24px;
    font-size: 14px;
    cursor: pointer;
  }

  & input[type='radio']:checked + label:before,
  & input[type='radio']:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    border: 1px solid ${(props) => props.theme.colorPrimary};
    background-color: transparent;
  }

  & input[type='radio']:checked + label:before,
  & input[type='radio']:not(:checked) + label:before {
    border-radius: 100%;
  }

  & input[type='radio']:checked + label:after,
  & input[type='radio']:not(:checked) + label:after {
    content: '';
    position: absolute;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  & input[type='radio']:checked + label:after,
  & input[type='radio']:not(:checked) + label:after {
    left: 4px;
    top: 4px;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: ${(props) => props.theme.colorSecondary};
  }

  input[type='radio']:not(:checked) + label:after {
    opacity: 0;
  }

  input[type='radio']:checked + label:after {
    opacity: 1;
  }
`
