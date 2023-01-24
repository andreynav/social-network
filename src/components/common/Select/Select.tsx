import { ChangeEventHandler } from 'react'
import styled from 'styled-components'

type SelectT = {
	options: any
	value: string
	onChange: ChangeEventHandler<HTMLSelectElement>
}

type OptionT = {
	value: string
	name: string
}

export const Select = ({ options, value, onChange }: SelectT): JSX.Element => {
	const optionItems = options.map((option: OptionT, index: number) => (
		<option value={option.value} key={index}>
			{option.name}
		</option>
	))

	return (
		<StyledSelect value={value} onChange={onChange}>
			{optionItems}
		</StyledSelect>
	)
}

const StyledSelect = styled.select`
	display: grid;
	cursor: pointer;
	appearance: none;
	background-color: transparent;
	color: ${(props) => props.theme.colorPrimary};
	border: 1px solid ${(props) => props.theme.colorPrimary};
	border-radius: 5px;
	outline: 0;
	padding: 0.5em 8px;
	z-index: 1;
`
