import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = (props) => {

    let cohortCards = props.people.map(person => {
      let photo;
      if (props.position === 'staff') {
        photo = person.photo;
      } else {
        photo = `https://picsum.photos/id/${1}/200/300`;
      }
      return <Person key={person.id} id={person.id} name={person.name} quote={person.quote} superlative={person.superlative} photo={photo} removeStudent={props.removeStudent}/>
    })

      return (
        <div className="Cohort">
          {cohortCards}
        </div>
      )
}

export default Cohort;
