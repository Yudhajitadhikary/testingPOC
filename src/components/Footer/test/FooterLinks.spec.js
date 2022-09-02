
import React from 'react'
import { shallow } from 'enzyme'
import FooterLinks from '../FooterLinks'

describe('FooterLinks component', () => {
    let wrapper
    let props = {
        footerLinksCollection : {
            items : [
                {
                    link : { url: '/' },
                    linkText: 'ABCD',
                    gaEventClass : '',
                    gaEventLabel : '',
                    target : '',

                },
                {
                    link : { url: '/' },
                    linkText: 'ABCDDEFGHIJKLMN',
                    gaEventClass : '',
                    gaEventLabel : '',
                    target : '',
                }
            ]
        }
    }
    beforeEach(() => {
        wrapper = shallow(<FooterLinks {...props}/>)
    })
    it('should render', () => {
        expect(wrapper).toBeTruthy()
    })
})
