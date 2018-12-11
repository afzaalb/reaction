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

it("Change State for App", () => {
  expect(wrapper.find('li').length).toEqual(1);
  wrapper.setState({ size: 120, items: ['Usman','Rohaan'] });
  expect(wrapper.find('li').length).toEqual(2);
});

it("Form Submit without empty field", () => {
  const prevListLength = wrapper.find("li").length;
  wrapper.find("input").simulate("change", { target: { value: "New-value" } });
  wrapper.update();
  expect(wrapper.find("input").props().value.length).not.toEqual(0);
  wrapper.find("form").simulate("submit");
  wrapper.update();
  expect(wrapper.find("input").prop("value")).toEqual("");
  expect(wrapper.find("li").length).toEqual(prevListLength + 1);
});