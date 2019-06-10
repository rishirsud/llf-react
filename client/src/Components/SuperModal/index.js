import React from "react";

function SuperModal(props) {
  return (
    <div className="modal fade" id={`modal-${props.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{props.name}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <li className="list-group-item">Location: {props.location}</li>
            <li className="list-group-item">Steam ID: {props.steamID}</li>
            <li className="list-group-item">PSN ID: {props.psnID}</li>
            <li className="list-group-item">Xbox ID: {props.xboxID}</li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuperModal;