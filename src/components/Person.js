import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div className="Person">
      <h3 className="name">{props.name.toUpperCase()}</h3>
      <img src={props.photo} className="photo" alt={props.name}></img>
      <h4 className="quote">"{props.quote}"</h4>
      <h5 className="superlative">{props.superlative}</h5>
    </div>
  )
}

export default Person;
