import React from 'react';
import { shallow } from 'enzyme';
import AddPerson from './AddPerson';

describe('Add Person', () => {

  let mockAddStudent, mockEvent, wrapper;

  beforeEach(() => {
    mockAddStudent = jest.fn();
    mockEvent = { target: { name: 'name', value: 'MockName' } }
    wrapper = shallow(<AddPerson
      addStudent={mockAddStudent} 
      />)
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state information when inputs are changed', () => {
      wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('name')).toEqual('MockName');
  });

  it('should add a student on button click', () => {
    wrapper.find('.AddPerson-button').simulate('click', { preventDefault: () => { } });
    expect(mockAddStudent).toBeCalled();
  });

  it('should clear the inputs after a new student is submitted', () => {
    wrapper.setState({ name: 'MockName', quote: 'MockQuote', superlative: 'MockSuperlative' });
    const expected = { name: '', quote: '', superlative: ''};
    wrapper.instance().clearForm();
    expect(wrapper.state()).toEqual(expected);
  });

});