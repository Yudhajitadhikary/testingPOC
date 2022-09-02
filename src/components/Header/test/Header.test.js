import React from 'react';
import { shallow } from "enzyme";
import Header from "../Header";

describe('Test App Entry point',()=> {
  let wrapper
  beforeEach(()=>{
    wrapper=shallow(<Header/>);
  })
  it('should have a div tag with Header', ()=> {
    expect(wrapper.find("div").text()).toEqual("Header");
  });
});