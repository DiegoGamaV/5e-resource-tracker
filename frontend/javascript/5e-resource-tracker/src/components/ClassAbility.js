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
        <button>Usar</button>
      </div>
      <div id="abilityDescription">{props.description}</div>
      <div id="abilityTags">
        {props.tags.map((tag) => (
          <span id="abilityTag">
            <b>{tag}</b>
          </span>
        ))}
      </div>
    </div>
  );
}

export default ClassAbility;
