import React from 'react'
import { shallow } from 'enzyme'
import FooterBottomSectionDesktop from '../FooterBottomSectionDesktop'

describe('FooterBottomSectionDesktop component', () => {
    let wrapper
    let props = {
        socialLinksCollection: {},
        footerLinksCollection: {},
        footerLogoCollection: {
            items: [{url:''}],
        },
        copyright: 'test'
    }
    beforeEach(() => {
        wrapper = shallow(<FooterBottomSectionDesktop {...props} />)
    })
    it('should render', () => {
        expect(wrapper).toBeTruthy()
    })
})
