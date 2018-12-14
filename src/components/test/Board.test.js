import React from 'react';
import Board from '../Board';
import { shallow } from 'enzyme';

describe('board', () => {
  it('will match the Board Snapshot', () => {
    const wrapper = shallow( <Board url="example_url" boardName="test" />);

    expect(wrapper).toMatchSnapshot();
  })
})
