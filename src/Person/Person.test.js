import React from 'react';
import { shallow } from 'enzyme';
import Person from './Person';

describe('Person', () => {

  let person1, person2, mockRemoveStudent, wrapper1, wrapper2;

  beforeEach(() => {
    person1 = {
      id: 1,
      name: 'Eric',
      quote: 'You miss all the shots you don\'t take.',
      superlative: 'Most Likely to Win the PGA',
      photo: './eric.jpg'
    }
    person2 = {
      id: 218,
      name: 'Rosa',
      quote: 'Accept advice.',
      superlative: 'Most Likely to Write JavaScript',
      photo: 'https://placekitten.com/200/300',
      position: 'students'
    }
    mockRemoveStudent = jest.fn();
    wrapper1 = shallow(<Person
      id = { person1.id }
      name = { person1.name }
      quote = { person1.quote }
      superlative = { person1.superlative }
      photo = { person1.photo }
      removeStudent = { mockRemoveStudent }
      position = { "staff" } 
      />);
    wrapper2 = shallow(<Person
      key={person2.id}
      id={person2.id}
      name={person2.name}
      quote={person2.quote}
      superlative={person2.superlative}
      photo={person2.photo}
      removeStudent={jest.fn()}
      position={ "students" } />);
  });

  it('should match the snapshot with all staff data passed in correctly', () => {
    expect(wrapper1).toMatchSnapshot();
  });

  it('should match the snapshot with all student data passed in correctly', () => {
    person2.photo = `https://picsum.photos/id/${person2.id}/200/300`;
    expect(wrapper2).toMatchSnapshot();
  });

  it('should remove a student on button click', () => {
    wrapper2.find('.RemovePerson-button').simulate('click', { preventDefault: () => { } });
    expect(mockRemoveStudent).toBeCalled();
  });
});