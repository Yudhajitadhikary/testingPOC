
import React from 'react'
import { shallow } from 'enzyme'
import SocialLinksFooter from '../SocialLinksFooter'

describe('SocialLinksFooter component', () => {
    let wrapper
    let props = {
        socialLinksCollection : {
            items : [
                {
                    link : {
                        url : ''
                    },
                    gaEventClass : '',
                    gaEventLabel : '',
                    title : '',
                    image : {
                        url : ''
                    }
                    
                }
            ]
        }
    }
    beforeEach(() => {
        wrapper = shallow(<SocialLinksFooter {...props}/>)
    })
    it('should render', () => {
        expect(wrapper).toBeTruthy()
    })
})
