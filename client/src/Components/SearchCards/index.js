import React from 'react';
import './style.css';


function SearchCards(props) {
  console.log(props);
  return (
    <div className="col-12 col-md-6 col-sm-6">
      <div className="card">
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Name: {props.name}</li>
            <li className="list-group-item">Steam ID: {props.steamID}</li>
            <li className="list-group-item">PSN ID: {props.psnID}</li>
            <li className="list-group-item">Xbox ID: {props.xboxID}</li>
            <li type="link" className="list-group-item text-center" data-toggle="modal" data-target={`#modal-${props.id}`}>
              More Data
            </li>
          </ul>
        </div>
      </div>
    </div >
  )
}

export default SearchCards;