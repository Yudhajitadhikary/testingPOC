
import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../Footer'


describe('Footer component', () => {
    let wrapper
    let props = {
        footer: {
            socialLinksCollection:{}, footerLinksCollection:{}, menuSlotsCollection:{}, footerLogoCollection:{}, copyright:{}
        },
        breadcrumbData: {}
    }

    beforeEach(() => {
        wrapper = shallow(<Footer {...props}/>)
    })
    it('should render', () => {
        expect(wrapper).toBeTruthy()
    })
})
