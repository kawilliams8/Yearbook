import React from 'react';
import { shallow } from 'enzyme';
import Cohort from './Cohort';

describe('Cohort', () => {

  let mockRemoveStudent, students, wrapper;

  beforeEach(() => {
    mockRemoveStudent = jest.fn();
    students = [
      { id: 21, name: 'Abigail', quote: 'Howdy.', superlative: 'Most Likely to', photo: 'https://placekitten.com/200/300' },
      { id: 22, name: 'Brian', quote: 'Hello.', superlative: 'Most Likely to', photo: 'https://placekitten.com/200/300' },
      { id: 23, name: 'Charlotte', quote: 'Hey.', superlative: 'Most Likely to', photo: 'https://placekitten.com/200/300' },
    ]
    wrapper = shallow(<Cohort
      position="students"
      people={students}
      removeStudent={mockRemoveStudent}
    />)
  });
  
  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});