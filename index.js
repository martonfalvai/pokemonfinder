const OPTIONS = {
    api: 'https://pokeapi.co/api/v2/pokemon/ditto'
}

const components = {
    button: 'search-button',
    input: 'search-input',
    container: 'pokemon-container'
}

document.getElementById(components.button).addEventListener('click', async ()=>{
    //handlePokemonRequest();
    const data = await getPokemonByName(document.getElementById(components.input).value)
    createPokemonImage(data)
    alert("Keresünk!")
})


async function getPokemonByName(pokemonName){
   const response = await fetch(OPTIONS.api)
   const data = await response.json()
   return data;
   
}

function createPokemonImage(data){
    const pokemonImg = data.sprites.front_default
    const img = document.createElement('img')
    img.src = pokemonImg
    document.getElementById(components.container).append(img)
}

//gitre fel
// refactor, rövidít
//input üres - letiltás
//megjelenítés előtt előző törlése