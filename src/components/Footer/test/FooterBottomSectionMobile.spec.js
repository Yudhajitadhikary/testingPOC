import React from 'react'
import { shallow } from 'enzyme'
import FooterBottomSectionMobile from '../FooterBottomSectionMobile'

describe('FooterBottomSectionMobile component', () => {
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
        wrapper = shallow(<FooterBottomSectionMobile {...props} />)
    })
    it('should render', () => {
        expect(wrapper).toBeTruthy()
    })
})
