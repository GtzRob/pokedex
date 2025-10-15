function renderPokemon(pokemon) {
  const tbody = document.querySelector("#resultTable tbody");
  tbody.innerHTML = ""; 

  const row = document.createElement("tr");

  //nombre
  const nameCell = document.createElement("td");
  nameCell.textContent = pokemon.name;
  row.appendChild(nameCell);

  //imagen
  const imgCell = document.createElement("td");
  const img = document.createElement("img");
  img.src = pokemon.sprites.front_default;
  img.alt = pokemon.name;
  imgCell.appendChild(img);
  row.appendChild(imgCell);

  //tipos
  const typeCell = document.createElement("td");
  typeCell.textContent = pokemon.types.map(t => t.type.name).join(", ");
  row.appendChild(typeCell);

  tbody.appendChild(row);
}

module.exports = { renderPokemon};
