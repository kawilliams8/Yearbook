import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = (props) => {

  let cohortCards = props.people.map(person => {
    let photo;
    props.position === 'staff' ? 
      photo = person.photo :
      photo = `https://picsum.photos/id/${person.id}/200/300`;
    return <Person 
      key={person.id} 
      id={person.id} 
      name={person.name} 
      quote={person.quote} 
      superlative={person.superlative} 
      photo={photo} 
      removeStudent={props.removeStudent}
      position={props.position}/>
  })
    return (
      <div className="Cohort">
        {cohortCards}
      </div>
    )
}

export default Cohort;
