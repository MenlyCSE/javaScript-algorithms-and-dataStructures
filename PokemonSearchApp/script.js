const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonWeight = document.getElementById('weight');
const pokemonHeight = document.getElementById('height');
const pokemonTypes = document.getElementById('types');
const pokemonHp = document.getElementById('hp');
const pokemonAttack = document.getElementById('attack');
const pokemonDefense = document.getElementById('defense');
const pokemonSpAttack = document.getElementById('special-attack');
const pokemonSpDefense = document.getElementById('special-defense');
const pokemonSpeed = document.getElementById('speed');

const validator = () => {
  const pokeURL = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';
  let newPokeUrl = '';
  const idSearch = parseFloat(searchInput.value) - 1;
  const nameSearch = (searchInput.value).toLowerCase();
  
  fetch(pokeURL)
    .then(response => response.json())
    .then(data => {

      // destructs
      const { results } = data;
      const { url, name, id } = results[idSearch];

      // assign values
      pokemonName.textContent = `${name.toUpperCase()} #${id}`;


      fetch(url)
        .then(response => response.json())
        .then(data => {

          // destructs
          const { weight, height, types } = data;

          // assign values
          pokemonWeight.textContent = `Weight: ${weight}`;
          pokemonHeight.textContent = `Height: ${height}`;

          types.forEach((slot) => {
            pokemonTypes.innerHTML += `<span class="type ${slot.type.name}">${slot.type.name}</span>`;
          });
        })
        .catch(error => console.log("Inner:", error));
    })
    .catch(error => console.log(error));
}


searchBtn.addEventListener('click', validator);
searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    validator;
  }
});