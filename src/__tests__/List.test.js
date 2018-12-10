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
