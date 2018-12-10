import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from "enzyme";
import App from '../App';
import Circle from '../Circle';
import List from '../List';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

let wrapper;
beforeEach(() => {
  wrapper = mount(<App />);
});

it("App has Circle in it", () => {
  expect(wrapper.find(Circle).length).toEqual(1);
});

it("App has list in it", () => {
  expect(wrapper.find(List).length).toEqual(1);
});
