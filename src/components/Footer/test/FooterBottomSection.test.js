import React from 'react'
import { shallow } from 'enzyme'
import FooterBottomSection from '../FooterBottomSection'

describe('FooterBottomSection component', () => {
    let wrapper
    let props = {
        socialLinksCollection : {},
        footerLinksCollection : {},
        footerLogoCollection : {},
        copyright : 'test'
    }
    beforeEach(() => {
        wrapper = shallow(<FooterBottomSection {...props}/>)
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
