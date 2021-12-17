function ClassToolbar(props) {
  return (
    <div className="ClassToolbar">
      <span>
        {props.specializationName}
        <span>
          {props.subclasses.map((subclass) => (
            <button>{subclass}</button>
          ))}
        </span>
      </span>
      <span>
        Nível
        <select>
          {props.levels.map((level) => (
            <option>{level}</option>
          ))}
        </select>
      </span>
      <div>Pontos de Ki</div>
    </div>
  );
}

export default ClassToolbar;
