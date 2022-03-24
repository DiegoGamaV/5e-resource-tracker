import React from "react";

function ClassAbilitySearchFilter(props) {
  const [query, setQuery] = React.useState("");

  function onChangeText(newQuery) {
    setQuery(newQuery);
    props.filterByTitle(query);
  }

  return (
    <div>
      <label htmlFor="textSearch">Pesquisar Por Nome</label>
      <input
        type="text"
        id="textSearch"
        value={query}
        onChange={(e) => onChangeText(e.target.value)}
      ></input>
    </div>
  );
}

export default ClassAbilitySearchFilter;
