
import React from 'react'
import { shallow } from 'enzyme'
import FooterNavigation from '../FooterNavigation'

describe('Footer component', () => {
    let wrapper
    let props = {
        menuSlotsCollection : {
            items : [
                {
                    sys : {
                        id: ''
                    }
                }
            ]
        }
    }
    beforeEach(() => {
        wrapper = shallow(<FooterNavigation {...props}/>)
    })

    afterEach(() => {
        wrapper.unmount()
    })

    it('should render', () => {
        expect(wrapper).toBeTruthy()
    })

    it('should set window width on window resize', () => {
        window.innerWidth = 566
        wrapper.instance().handleWindowSizeChange()
        expect(wrapper.state('screenWidth')).toEqual(566)
    })
})
