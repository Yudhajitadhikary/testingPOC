import React from 'react'
import { shallow } from 'enzyme'
import CountrySelectorPopUp from '../FooterCountrySelector'
process.env.CF_LOCALE='es-MX'
describe('CountrySelector component', () => {
    let wrapper
    let props = {
        dialogtitle : 'test'
    }
    beforeEach(() => {
        wrapper = shallow(<CountrySelectorPopUp {...props}/>)
    })
    it('should render', () => {
        expect(wrapper).toBeTruthy()
    })
   
})
