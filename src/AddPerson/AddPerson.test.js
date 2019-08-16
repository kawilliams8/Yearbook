import React from 'react';
import { shallow } from 'enzyme';
import AddPerson from './AddPerson';

describe('Add Person', () => {
  it('should match the snapshot with all data passed in correctly', () => {

    const wrapper = shallow(<AddPerson 
      addStudent={jest.fn()} />)
    expect(wrapper).toMatchSnapshot();
  });
});