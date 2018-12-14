import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';

describe('board', () => {
  it('will match the Board Snapshot', () => {
    const wrapper = shallow( <Card text="hello" emoji="heart_eyes" />);

    expect(wrapper).toMatchSnapshot();
  })
})
