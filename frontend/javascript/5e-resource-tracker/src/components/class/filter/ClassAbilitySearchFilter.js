import React from "react";

function ClassAbilitySearchFilter(props) {
  const [query, setQuery] = React.useState("");

  return (
    <span>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <button onClick={(e) => props.filterByTitle(query)}>Buscar</button>
    </span>
  );
}

export default ClassAbilitySearchFilter;
