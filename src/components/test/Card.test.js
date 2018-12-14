import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';

describe('card', () => {
  it('will match the Card Snapshot', () => {
    const wrapper = shallow( <Card text="hello" emoji="heart_eyes" />);

    expect(wrapper).toMatchSnapshot();
  });
});
