const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

const validator = () => {
  const pokeURL = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';
  let newPokeUrl = '';
  const idSearch = parseFloat(searchInput.value) - 1;
  const nameSearch = (searchInput.value).toLowerCase();
  
  fetch(pokeURL)
    .then(response => response.json())
    .then(data => {
      const { results } = data;
      const { name, url, id } = results[idSearch];
      console.log("Name:", name);
      console.log("ID:", id);
      console.log("URL:", url);
    })
    .catch(error => console.log(error));
}


searchBtn.addEventListener('click', validator);
searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    validator();
  }
});