
import React from 'react'
import { shallow } from 'enzyme'
import FooterMenuSlotsMobile from '../FooterMenuSlotsMobile'

describe('FooterMenuSlotsMobile component', () => {
    let wrapper
    let props = {
        setIndex:jest.fn(),
        menuSlots : [
            {
                menuItemsCollection : {
                    items : [
                        {
                            sys : {
                                id : ''
                            },
                            link : {
                                url : ''
                            },
                            title : '',
                        }
                    ]
                },
                title : '',
                isMobileOnly: true,
            },
            {
                title: 'ABCD',
                link: { url: '/abcd' },
                menuItemsCollection: { items: [] }
            }

        ]
    }
    beforeEach(() => {
        wrapper = shallow(<FooterMenuSlotsMobile {...props}/>)
    })
    it('should render', () => {
        expect(wrapper).toBeTruthy()
    })
})
