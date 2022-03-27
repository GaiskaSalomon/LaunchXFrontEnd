const pokemonHeight = document.getElementById('pokemon-height'); // type screen
const pokemonWeight = document.getElementById('pokemon-weight');
const pokemonType = document.getElementById('pokemon-type');
const pokemonStatistics = document.getElementById('pokemon-statistics');
const pokemonHp = document.getElementById('pokemon-hp');
const pokemonAttack = document.getElementById('pokemon-attack');
const pokemonSpecialAttack = document.getElementById('pokemon-special-attack');
const pokemonDefense = document.getElementById('pokemon-defense');
const pokemonSpecialDefense = document.getElementById('pokemon-special-defense');
const pokemonSpeed = document.getElementById('pokemon-speed');


const fetchPokemon = () => {

  const pokemonNameInput = document.getElementById("pokemon-name");
  let pokemonName = pokemonNameInput.value;
  pokemonName = pokemonName.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  fetch(url).then((res) => {
    if (res.status != "200") {
      console.log(res);
      pokemonImage("./pokemon-charmander.gif");
      pokemonHeight.innerHTML = `Pokemon not found`;
      pokemonWeight.innerHTML = `Pokemon not found`;
      pokemonType.innerHTML = `Pokemon not found`;
      pokemonHp.innerHTML = `Pokemon not found`;
      pokemonAttack.innerHTML = `Pokemon not found`;
      pokemonSpecialAttack.innerHTML = `Pokemon not found`;
      pokemonDefense.innerHTML = `Pokemon not found`;
      pokemonSpecialDefense.innerHTML = `Pokemon not found`;
      pokemonSpeed.innerHTML = `Pokemon not found`;
    } 
    else {
      return res.json();
    }
  }).then((data) => {
    if (data) {
      console.log(data);
      let pokemonImg = data.sprites.front_default;
      pokemonImage(pokemonImg);
      pokemonHeight.innerHTML = `Height: ${data.height * 10}cm`;
      pokemonWeight.innerHTML = `Weight: ${data.weight / 10}kg`;
      pokemonType.innerHTML = data.types[0].type.name;
      pokemonHp.innerHTML = `HP: ${data.stats[0].base_stat}`;
      pokemonAttack.innerHTML = `Attack: ${data.stats[1].base_stat}`;
      pokemonSpecialAttack.innerHTML = `Special attack: ${data.stats[3].base_stat}`;
      pokemonDefense.innerHTML = `Defense: ${data.stats[2].base_stat}`;
      pokemonSpecialDefense.innerHTML = `Special defense: ${data.stats[4].base_stat}`;
      pokemonSpeed.innerHTML = `Speed: ${data.stats[5].base_stat}`;
      const moves = data.moves.map((typ) => typ.move.name)
        document.getElementById("pokemon-moves").innerHTML = ""
        moves.forEach(function (element){
        document.getElementById("pokemon-moves").innerHTML += "<li>" + element + "</li>"
        })
      console.log(pokemonImg);
    }
  });
}

const pokemonImage = (url) => {
  const pokemonPhoto = document.getElementById("pokemon-image");
  pokemonPhoto.src = url;
}
