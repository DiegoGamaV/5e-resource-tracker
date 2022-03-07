function CharacterPage() {
  const levelOptions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      <div>Work in Progress!</div>
      <br></br>
      <div>
        <form>
          <label for="name">Nome</label>
          <br></br>
          <input type="text" id="name" name="name"></input>
          <br></br>
          <label for="classes">Classe</label>
          <br></br>
          <select name="classes" id="classes">
            <option value="monk">Monge</option>
          </select>
          <label for="level">Nível</label>
          <select name="level" id="level">
            {levelOptions.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </form>
      </div>
    </>
  );
}

export default CharacterPage;
