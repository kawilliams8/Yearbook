import React from 'react';
import { shallow } from 'enzyme';
import Person from './Person';

describe('Person', () => {
  it('should match the snapshot with all staff data passed in correctly', () => {
    const person = { 
      id: 1, 
      name: 'Eric', 
      quote: 'You miss all the shots you don\'t take.', 
      superlative: 'Most Likely to Win the PGA', 
      photo: './eric.jpg' 
    }

    const photo = person.photo;
    const position = "staff"

    const wrapper = shallow(<Person
      key={person.id}
      id={person.id}
      name={person.name}
      quote={person.quote}
      superlative={person.superlative}
      photo={photo}
      removeStudent={jest.fn()}
      position={position} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with all student data passed in correctly', () => {
    const person = { 
      id: 218, 
      name: 'Rosa', 
      quote: 'Accept advice.', 
      superlative: 'Most Likely to Write JavaScript', 
      photo: 'https://placekitten.com/200/300' 
    }

    person.photo = `https://picsum.photos/id/${person.id}/200/300`;
    const position = "students";

    const wrapper = shallow(<Person
      key={person.id}
      id={person.id}
      name={person.name}
      quote={person.quote}
      superlative={person.superlative}
      photo={person.photo}
      removeStudent={jest.fn()}
      position={position} />);

    expect(wrapper).toMatchSnapshot();
  });
});