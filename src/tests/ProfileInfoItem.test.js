import {create} from 'react-test-renderer'
import {ProfileInfoItem} from "../components/index";

describe('ProfileInfoItem tests', () => {
    test('Status from props should be in the state', () => {
        const rootComponent = create(<ProfileInfoItem status={'test status'} />)
        const instance = rootComponent.root
        expect(instance.props.status).toBe('test status')
    })

    test('After creation <input> shouldn\'t be displayed', () => {
        const rootComponent = create(<ProfileInfoItem status={'test status'} />)
        const instance = rootComponent.root
        expect(() => {
            instance.findByType("input")
        }).toThrow()
    })
})
