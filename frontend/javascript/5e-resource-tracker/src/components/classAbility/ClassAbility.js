import ClassAbilityUseButton from "./ClassAbilityUseButton";

function ClassAbility(props) {
  return (
    <div className="ClassAbility" class="card w-75">
      <h6 class="card-header">
        <span id="abilityTitle">{props.name}</span>
      </h6>
      <div class="card-body">
        <h6 id="resourceCost" class="card-title">
          Custo:{" "}
          {props.hasCostRange
            ? props.minCost + " - " + props.maxCost
            : props.minCost}
        </h6>
        <p id="abilityDescription" class="card-text">
          {props.description}
        </p>
        <>
          {props.useAbility ? (
            <div>
              {props.maxCost ? (
                <ClassAbilityUseButton
                  minCost={props.minCost}
                  maxCost={props.maxCost}
                  resourceName={props.resourceName}
                  useAbility={props.useAbility}
                  abilityTitle={props.name}
                ></ClassAbilityUseButton>
              ) : (
                <button
                  class="btn btn-primary"
                  onClick={() => props.useAbility(props.minCost)}
                >
                  Usar
                </button>
              )}
            </div>
          ) : (
            <></>
          )}
        </>
      </div>
      <div id="abilityTags" class="card-footer text-muted">
        {props.tags.map((tag) => (
          <span id="abilityTag" key={tag} class="badge rounded-pill bg-primary">
            <b>{tag}</b>
          </span>
        ))}
      </div>
    </div>
  );
}

export default ClassAbility;
