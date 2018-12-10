import React from 'react';
import { mount } from "enzyme";
import Circle from '../Circle';

it("Shape is a Circle", () => {
  let wrapper = mount(<Circle width={80} height={80} />);
  const width = wrapper.props().width;
  const height = wrapper.props().height;
  expect(width).toEqual(height);
});
