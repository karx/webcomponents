import * as pokedex from './pokedex.js';

export var totalPokemonCount = 151;

export function nameOfPokemonFromId(id) {
    return pokedex.en_pokedex[id-1].name.english;
}

export function pokemonImageSourceFromId(id) {
    var base_str = '00000' + id;
    var imageName = base_str.substr(base_str.length - 3, base_str) + nameOfPokemonFromId(id);
    return `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/${imageName}.png`;
}
