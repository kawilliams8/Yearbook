import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = (props) => {
  let cohortCards = props.people.map(person => {
    let {id, name, quote, superlative, photo} = person;
    return <Person key={id} name={name} quote={quote} superlative={superlative} photo={photo}/>
  })

  return (
    <div className="Cohort">
      {cohortCards};
    </div>
  )
}

export default Cohort;
