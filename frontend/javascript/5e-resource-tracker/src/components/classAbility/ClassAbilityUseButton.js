import React from "react";

function ClassAbilityUseButton(props) {
  const [cost, setCost] = React.useState(props.minCost);

  function handleNumberChange(newValue) {
    if (newValue > props.maxCost) newValue = props.maxCost;

    setCost(newValue);
  }

  return (
    <div className="row gx-2 gy-1 align-items-center">
      <div className="col-auto">
        <button
          className="btn btn-primary"
          onClick={() => props.useAbility(cost)}
        >
          Usar
        </button>
      </div>
      <div className="col-auto ">
        <input
          id="resourceCost"
          type="range"
          className="form-range"
          min={props.minCost}
          max={props.maxCost}
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        ></input>
      </div>
      <div className="col-auto">
        <div className="input-group flex-nowrap w-50">
          <input
            type="number"
            className="form-control"
            value={cost}
            onChange={(e) => handleNumberChange(parseInt(e.target.value))}
          />
          <span className="input-group-text" id="addon-wrapping">
            {props.resourceName}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ClassAbilityUseButton;
