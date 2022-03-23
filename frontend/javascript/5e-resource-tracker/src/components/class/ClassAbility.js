import ClassAbilityUseButton from "./ClassAbilityUseButton";

function ClassAbility(props) {
  return (
    <div className="ClassAbility">
      <div>
        <span id="abilityTitle">{props.name}</span>
        <span id="resourceCost">
          <b>Custo:</b>
          {props.hasCostRange
            ? props.minCost + " - " + props.maxCost
            : props.minCost}
        </span>
        {props.useAbility ? (
          <>
            {props.maxCost ? (
              <ClassAbilityUseButton
                minCost={props.minCost}
                maxCost={props.maxCost}
                resourceName={props.resourceName}
                useAbility={props.useAbility}
                abilityTitle={props.name}
              ></ClassAbilityUseButton>
            ) : (
              <button onClick={() => props.useAbility(props.minCost)}>
                Usar
              </button>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
      <div id="abilityDescription">{props.description}</div>
      <div id="abilityTags">
        {props.tags.map((tag) => (
          <span id="abilityTag" key={tag}>
            <b>{tag}</b>
          </span>
        ))}
      </div>
    </div>
  );
}

export default ClassAbility;
