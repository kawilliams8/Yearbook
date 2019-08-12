import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = (props) => {
  let staffCards = props.people.map(staffmember => {
    let {id, name, quote, superlative, photo} = staffmember;
    return <Person key={id} name={name} quote={quote} superlative={superlative} photo={photo}/>
  })

  return (
    <div className="Cohort">
      {staffCards}
    </div>
  )
}

export default Cohort;
