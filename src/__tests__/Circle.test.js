import React from 'react';
import { mount } from "enzyme";
import Circle from '../Circle';

let wrapper;

beforeEach(() => {
  wrapper = mount(<Circle width={80} height={80} />);
});

it("Shape is a Circle", () => {
  const width = wrapper.props().width;
  const height = wrapper.props().height;
  expect(width).toEqual(height);
});

it("Change props for Circle", () => {
  wrapper.setProps({ width: 90, height: 90 });
  const width = wrapper.props().width;
  const height = wrapper.props().height;
  expect(width).toEqual(height);
});
