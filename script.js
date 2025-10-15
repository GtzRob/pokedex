const { renderPokemon } = require('./utils.js'); 



document.querySelector("#searchForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const searchValue = document.querySelector("#searchInput").value.toLowerCase();

  if (!searchValue) {
    alert("Escribe un nombre de Pokémon");
    return;
  }


  fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Pokémon no encontrado");
      }
      return response.json();
    })
    .then(data => {
      renderPokemon(data);
    })
    .catch(error => {
      const tbody = document.querySelector("#resultTable tbody");
      tbody.innerHTML = `<tr><td colspan="3">${error.message}</td></tr>`;
    });
});
