import React from 'react';
import ReactDOM from 'react-dom';
import {Board,Square} from './TicTacToe';
import 'jest-enzyme';
import { configure,shallow,mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter.default() });

;

describe('<Board />', () => {
  it('renders a <Board /> with 9 Square components', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find(Square).length).toEqual(9);
  });
  it('fill X in respond to a click', () => {
    const wrapper = shallow(<Board />);
    const board = wrapper.instance();
    board.handleClick(0);
    expect(board.state.squares).toEqual(['X', null, null,
                                        null, null, null,
                                        null, null, null]);
  });
  it('Square should display a value from prop', () => {
    const wrapper = shallow(<Board />);
    const board = wrapper.instance();
    expect(board.renderSquare(0).props).toHaveProperty('value');
  });
  it('Board should contain a line showing Next Player', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find('.status').length).toEqual(1);
  });
  it('Board should divide the Square into 3 rows', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find('.board-row').length).toEqual(3);
  });
  it('clicking a square should fill an X in that index', () => {
    const wrapper = mount(<Board />);
    wrapper.find(Square).first().find('button').simulate('click');
    const board = wrapper.instance();
    expect(board.state.squares).toEqual(['X', null, null,
                                        null, null, null,
                                        null, null, null]);
  });
});

describe('<Square />', () => {
    it('propagates the click to parent component', () => {
      const onClick = jest.fn();
      const wrapper = shallow(<Square value={null} onClick={onClick} />);
      wrapper.simulate('click');
      expect(onClick.mock.calls.length).toEqual(1);
    });
  });