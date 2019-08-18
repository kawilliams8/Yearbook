import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  let wrapper, person;
  beforeEach(() => {
    wrapper = shallow(<App />);
    person = [Date.now(), 'Katie', 'Let\'s go running!',
      'Most likely to write a test'
    ]
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to add a student', () => {
    expect(wrapper.state('students').length).toEqual(26);
    wrapper.instance().addStudent(...person);
    expect(wrapper.state('students').length).toEqual(27);
  });

  it('should be able to remove a student', () => {
    expect(wrapper.state('students').length).toEqual(26);
    wrapper.instance().removeStudent(21);
    expect(wrapper.state('students').length).toEqual(25);
  });
});
