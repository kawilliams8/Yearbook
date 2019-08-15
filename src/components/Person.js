import React from 'react';
import './Person.css';

const Person = ({position, name, photo, quote, superlative, id, removeStudent}) => {
  if (position === 'staff') {
    return (
      <div className="Person">
        <h3 className="name">{name.toUpperCase()}</h3>
        <img src={photo} className="photo" alt={name}></img>
        <h4 className="quote">"{quote}"</h4>
        <h5 className="superlative">{superlative}</h5>
      </div>
    )
  } else {
    return (
      <div className="Person">
        <h3 className="name" contentEditable={true} >{name.toUpperCase()}</h3>
        <img src={photo} className="photo" alt={name}></img>
        <h4 className="quote" contentEditable={true} >"{quote}"</h4>
        <h5 className="superlative" contentEditable={true} >{superlative}</h5>
        <button className="deleteButton" onClick={() => removeStudent(id)}>DELETE</button>
      </div>
    )
  }
}

export default Person;