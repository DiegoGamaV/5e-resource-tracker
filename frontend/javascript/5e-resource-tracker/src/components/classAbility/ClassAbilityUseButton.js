import React from "react";
import Popup from "reactjs-popup";

function ClassAbilityUseButton(props) {
  const [cost, setCost] = React.useState(props.minCost);
  const contentStyle = {
    background: "rgba(255, 255, 255, 0.8)",
    padding: "10px 5px",
  };
  const overlayStyle = { background: "rgba(0,0,0,0.5)" };

  return (
    <Popup
      trigger={<button className="button"> Usar </button>}
      modal
      nested
      contentStyle={contentStyle}
      overlayStyle={overlayStyle}
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> {props.abilityTitle} </div>
          <div className="content">
            {" "}
            <br></br>
            {props.resourceName} gastos: {cost}
          </div>
          <div className="actions">
            <div>
              {props.minCost}
              <input
                type="range"
                id="abilityCostRange"
                name="abilityCostRange"
                min={props.minCost}
                max={props.maxCost}
                value={cost}
                onChange={(e) => setCost(parseInt(e.target.value))}
                step="1"
              />
              {props.maxCost}
            </div>
            <button
              className="button"
              onClick={() => {
                props.useAbility(cost);
                close();
              }}
            >
              Usar
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default ClassAbilityUseButton;
