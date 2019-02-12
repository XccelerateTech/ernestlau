import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'jest-enzyme';
import { configure,shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter.default() });

;

describe('<App />', () => {
  it('renders a <App /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header.App-header').length).toEqual(1);
  });
  it('renders a <App /> components with logo', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('img.App-logo').length).toEqual(1);
  });
  it('renders a <App /> components with title', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-link').length).toEqual(1);
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
