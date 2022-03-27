import ClassAbility from "../classAbility/ClassAbility";

function ClassLevel(props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{props.level}º Nível</div>
        <ul>
          {props.abilities.map((ability) => (
            <li key={ability.name}>
              <ClassAbility
                name={ability.name}
                minCost={ability.minCost}
                maxCost={ability.maxCost}
                hasCostRange={ability.hasCostRange}
                description={ability.description}
                tags={ability.tags}
                useAbility={props.useAbility}
                resourceName={props.resourceName}
              ></ClassAbility>
            </li>
          ))}
        </ul>
      </div>
      <span className="badge bg-primary rounded-pill">
        {props.abilities.length}
      </span>
    </li>
  );
}

export default ClassLevel;
