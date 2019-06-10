import React from 'react';
import './style.css';


function SearchCards(props)  {
  return (
    <div className="col-12 col-md-3 col-sm-6">
    <div className="card">
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name: {props.name}</li>
          <li className="list-group-item">Location: {props.location}</li>
          <li className="list-group-item">Steam ID: {props.steamID}</li>
          <li className="list-group-item">PSN ID: {props.psnID}</li>
          <li className="list-group-item">Xbox ID: {props.xboxID}</li>
          <li className="list-group-item">Nintendo ID: {props.nintendoID}</li>
          <li className="list-group-item">Blizzard ID: {props.blizzardID}</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default SearchCards;