
import React from 'react'
import { mount } from 'enzyme'
import FooterMenuItemMobile from '../FooterMenuItemMobile'

const setIndexMock = jest.fn()

const props = {
    menuSlot: {
        menuItemsCollection:{
            items:[
                {
                    sys: { id: 'abc' },
                    componentType: 'MenuItem',
                    title: 'ABC',
                    link: { url: '/abc' },
                    gaEventClass: 'abc'
                },
                {
                    sys: { id: 'def' },
                    componentType: 'MenuItemContainer',
                    title: 'DEF',
                    menuItemsCollection: {
                        items: [
                            {
                                sys: { id: 'abc' },
                                componentType: 'MenuItem',
                                title: 'ABC',
                                link: { url: '/abc' },
                                gaEventClass: 'abc'
                            },
                        ]
                    }
                },
                {
                    sys: { id: 'ghi' },
                    componentType: 'Nothing',
                    title: 'GHI',
                    link: { url: '/ghi' },
                    gaEventClass: 'ghi'
                },
            ]
        }
    },
    isSelected: true,
    setIndex: setIndexMock,
    index: 1,
    selectedIndex: 1,
    parentBodyId: '',
    isParentOpen: true,
}

describe('FooterMenuItemMobile component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(<FooterMenuItemMobile {...props}/>)
    })
    it('should call setIndex on click of button', () => {
        wrapper.setProps({
            isSelected: false
        })
        wrapper.find('button').first().simulate('click')
        expect(setIndexMock).toHaveBeenCalled()
    })
})
