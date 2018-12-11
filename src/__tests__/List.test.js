import React from 'react';
import { mount } from "enzyme";
import List from '../List';

let wrapper;
const array = ['Developer'];

beforeEach(() => {
  wrapper = mount(<List items={array} />);
});

it("List has item in it", () => {
  expect(wrapper.find('li').length).toEqual(1);
});

it("Change props for list", () => {
  expect(wrapper.find('li').length).toEqual(1);
  wrapper.setProps({ items: ['Awn','Tabish','Afzaal'] });
  expect(wrapper.find('li').length).toEqual(3);
  expect(wrapper.find('li').first().text()).toEqual('Awn');
});
