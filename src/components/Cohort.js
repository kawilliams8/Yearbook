import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = (props) => {
  let cohortCards = props.people.map(person => {
    let photo;
    if (props.position === 'staff') {
      photo = person.photo;
    } else {
      photo = `https://picsum.photos/id/${person.id}/200/300`;
    }
  
    let {id, name, quote, superlative} = person;
    return <Person key={id} name={name} quote={quote} superlative={superlative} photo={photo}/>
  })

  return (
    <div className="Cohort">
      {cohortCards}
    </div>
  )
}

export default Cohort;
