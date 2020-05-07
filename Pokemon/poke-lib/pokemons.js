import * as pokedex from './pokedex.js';

export var totalPokemonCount = 151;

export function nameOfPokemonFromId(id) {
    return pokedex.en_pokedex[id-1].name.english;
}

export function numberOfPokemonFromId(id) {
    return ("00" + id).slice(-3);
}

export function pokemonImageSourceFromId(id) {
    var base_str = '00000' + id;
    var imageName = numberOfPokemonFromId(id);
    return `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/${imageName}.png`;
}

export function pokemonFromId(id) {
    return pokedex.en_pokedex[id-1];
}