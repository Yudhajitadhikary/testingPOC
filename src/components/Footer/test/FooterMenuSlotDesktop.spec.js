import React from "react"
import { shallow } from "enzyme"
import FooterMenuSlotDesktop from "../FooterMenuSlotDesktop"

const props = {
    menuSlots: [
        {
            isDesktop: true,
            menuItemsCollection: {
                items: [
                    {
                        sys: {
                            id: ''
                        },
                        link: {
                            url: ''
                        },
                        title: '',
                    }
                ]
            },
            title: 'ABCD'
        }

    ]
}

describe('FooterMenuSlotDesktop Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<FooterMenuSlotDesktop {...props} />)
    })

    it('should render', () => {
        expect(wrapper).toBeTruthy()
    })
})
