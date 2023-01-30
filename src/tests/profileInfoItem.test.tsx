import { ProfileInfoStatus } from 'components'
import { create } from 'react-test-renderer'

describe('ProfileInfoStatus tests', () => {
	test('Status from props should be in the state', () => {
		const rootComponent = create(
			<ProfileInfoStatus
				itemData={'test status'}
				itemName={'My status'}
				isPointer={false}
			/>
		)
		const instance = rootComponent.root
		expect(instance.props.itemData).toBe('test status')
	})

	test("After creation <input> shouldn't be displayed", () => {
		const rootComponent = create(
			<ProfileInfoStatus
				itemData={'test status'}
				itemName={'My status'}
				isPointer={false}
			/>
		)
		const instance = rootComponent.root
		expect(() => {
			instance.findByType('input')
		}).toThrow()
	})
})
