import ClassAbility from "./ClassAbility";

function ClassLevel(props) {
  return (
    <li className="ClassLevel">
      <div>{props.level}º Nível</div>
      <ul>
        {props.abilities.map((ability) => (
          <li>
            <ClassAbility
              name={ability.name}
              minCost={ability.minCost}
              maxCost={ability.maxCost}
              hasCostRange={ability.hasCostRange}
              description={ability.description}
              tags={ability.tags}
            ></ClassAbility>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default ClassLevel;
