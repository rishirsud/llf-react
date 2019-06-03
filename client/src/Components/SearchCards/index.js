import React from 'react';
import './style.css';


function SearchCards(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">    </h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Name: {props.name}</li>
        <li className="list-group-item">Location: {props.location}</li>
      </ul>
      </div>
  )
}

export default SearchCards;