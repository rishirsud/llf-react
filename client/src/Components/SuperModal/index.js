import React from "react";

function SuperModal(props) {
  return (
    <div class="modal fade" id={`modal-${props.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{props.name}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
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