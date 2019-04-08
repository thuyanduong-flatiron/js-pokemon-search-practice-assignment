document.addEventListener("DOMContentLoaded", function() {
  console.log(pokemons)
  pokemons.forEach(pokemon => {
    let pokemonObj = new Pokemon(pokemon)
    pokemonObj.render()
  })
  document.querySelector('#pokemon-search-input').addEventListener('keyup', keyPressHandler)
})

function keyPressHandler(event){
  let pokemonContainerEl = document.querySelector('#pokemon-container')
  pokemonContainerEl.innerHTML = ''
  let searchTerm = event.currentTarget.value
  if(searchTerm !== ''){
    let filteredPokemon = Pokemon.all.filter(pokemon => pokemon.name.includes(searchTerm))
    //render each pokemon to the page
    filteredPokemon.forEach(pokemon => {
      pokemonContainerEl.innerHTML += pokemon.render()
    })
  }
}
