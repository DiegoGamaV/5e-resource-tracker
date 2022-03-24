import ClassAbility from "../classAbility/ClassAbility";

function ClassLevel(props) {
  return (
    <li className="ClassLevel">
      <div>{props.level}º Nível</div>
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
    </li>
  );
}

export default ClassLevel;
