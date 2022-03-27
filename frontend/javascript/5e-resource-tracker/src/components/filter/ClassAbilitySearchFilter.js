import React from "react";

function ClassAbilitySearchFilter(props) {
  const [query, setQuery] = React.useState("");

  function onChangeText(newQuery) {
    setQuery(newQuery);
    props.filterByTitle(query);
  }

  return (
    <div>
      <input
        type="search"
        id="textSearch"
        value={query}
        onChange={(e) => onChangeText(e.target.value)}
        class="form-control me-2"
        placeholder="Buscar por texto"
      ></input>
    </div>
  );
}

export default ClassAbilitySearchFilter;
