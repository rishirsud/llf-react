import React from "react";

function SuperModal(props) {
  return (
    <div className="modal fade" id={`modal-${props.id}`} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{props.name}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {props.location ? (
              <li className="list-group-item">Location: {props.location}</li>
            ) : (<React.Fragment></React.Fragment>)}

            {props.steamID ? (
              <li className="list-group-item">Steam ID: {props.steamID}</li>
            ) : (<React.Fragment></React.Fragment>)}

            {props.psnID ? (
              <li className="list-group-item">PSN ID: {props.psnID}</li>
            ) : (<React.Fragment></React.Fragment>)}

            {props.xboxID ? (
              <li className="list-group-item">Xbox ID: {props.xboxID}</li>
            ) : (<React.Fragment></React.Fragment>)}

            {props.nintendoID ? (
              <li className="list-group-item">Nintendo ID: {props.nintendoID}</li>
            ) : (<React.Fragment></React.Fragment>)}

            {props.blizzardID ? (
              <li className="list-group-item">Blizzard ID: {props.blizzardID}</li>
            ) : (<React.Fragment></React.Fragment>)}


            {(props.gameOne || props.gameTwo || props.gameThree) ? (
              <li className="list-group-item">Favourite Games:
              {props.gameOne ? (
                  <p className="list-group-item">{props.gameOne}</p>
                ) : (<React.Fragment></React.Fragment>)}
                {props.gameTwo ? (
                  <p className="list-group-item">{props.gameTwo}</p>
                ) : (<React.Fragment></React.Fragment>)}
                {props.gameThree ? (
                  <p className="list-group-item">{props.gameThree}</p>
                ) : (<React.Fragment></React.Fragment>)}
              </li>
            ) : (
                <React.Fragment></React.Fragment>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuperModal;