import React from 'react';
import Board from '../Board';
import { shallow } from 'enzyme';

describe('board', () => {
  it('will match the Board Snapshot', () => {
    const wrapper = shallow( <Board boardUrl="board_url" cardUrl="card_url" boardName="test" />);

    expect(wrapper).toMatchSnapshot();
  });
});
