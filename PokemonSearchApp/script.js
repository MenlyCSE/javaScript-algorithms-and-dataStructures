const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonWeight = document.getElementById('weight');
const pokemonHeight = document.getElementById('height');
const pokemonTypes = document.getElementById('types');
const spriteContainer = document.getElementById('sprite-container');

const validator = () => {
  const pokeURL = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';
  const idSearch = parseFloat(searchInput.value) - 1;
  

  // get info from api
  fetch(pokeURL)
    .then(response => response.json())
    .then(data => {

      // destructs
      const { results } = data;
      const { url, name, id } = results[idSearch];

      // assign values
      pokemonName.innerHTML = `${name.toUpperCase()}`;
      pokemonId.innerHTML = `#${id}`;


      // get info from api
      fetch(url)
        .then(response => response.json())
        .then(data => {

          // destructs
          const { weight, height, types, stats, sprites } = data;

          // assign values
          pokemonWeight.textContent = `Weight: ${weight}`;
          pokemonHeight.textContent = `Height: ${height}`;
          spriteContainer.innerHTML = `<img id="sprite" src="${sprites.front_default}" alt="${data.name} front default">`;

          types.forEach((object) => {
            pokemonTypes.innerHTML += `<span class="type ${object.type.name}">${object.type.name}</span>`;
          });

          stats.forEach((index) => {
            document.getElementById(`${index.stat.name}`).textContent = `${index.base_stat}`;
          });
        })
        .catch(error => console.log("Inner:", error));
    })
    .catch(error => console.log(error));
};


searchBtn.addEventListener('click', validator);
searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    validator;
  }
});