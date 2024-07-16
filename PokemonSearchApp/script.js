const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonWeight = document.getElementById('weight');
const pokemonHeight = document.getElementById('height');
const pokemonTypes = document.getElementById('types');
const spriteContainer = document.getElementById('sprite-container');


const validator = () => {
  const idSearch = parseFloat(searchInput.value) - 1;
  const nameSearch = (searchInput.value).toLowerCase();
  pokemonTypes.innerHTML = ``; // resets values
  const pokeURL = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${idSearch + 1 || nameSearch}`;

  // retrieve data from api
  fetch(pokeURL)
    .then(response => response.json())
    .then(data => {

      // destructs
      const { height, id, name, sprites, stats, types, weight } = data;

      // assign values
      pokemonName.innerHTML = `${name.toUpperCase()}`;
      pokemonId.innerHTML = `#${id}`;
      pokemonWeight.textContent = `Weight: ${weight}`;
      pokemonHeight.textContent = `Height: ${height}`;
      spriteContainer.innerHTML = `<img id="sprite" src="${sprites.front_default}" alt="${data.name} front default">`;

      // loop and append values
      types.forEach((object) => {
        pokemonTypes.innerHTML += `<span class="type ${object.type.name}">${object.type.name}</span>`;
      });

      stats.forEach((index) => {
        document.getElementById(`${index.stat.name}`).textContent = `${index.base_stat}`;
      });
    })
    .catch(alert("Pokémon not found"));
};


searchBtn.addEventListener('click', validator);
searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    validator;
  }
});