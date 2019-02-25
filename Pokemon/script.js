import * as pokelib from'./poke-lib/pokemons.js';

class BasicWebComponent extends HTMLElement {

    
    constructor() {
      super(); // this is mandatory

        this.initRandomPokemon();
    }

    initRandomPokemon() {
        this.SEED = Math.random() * 100000;
        this.id =  Math.floor((this.SEED%1000) + 1);    //= 1 in 100
        this.NAME_OF_POKEMON = pokelib.nameOfPokemonFromId(this.id);
        this.IMAGE_OF_POKEMON = pokelib.pokemonImageSourceFromId(this.id);
    }
  
    connectedCallback() {
    //   const pElem = document.createElement('p');
    //   pElem.textContent = this.getAttribute('text');

      const rootElem = document.createElement('div');
      rootElem.innerHTML = this.render();
  
      let shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(rootElem);
    }
  
    attributeChangedCallback(attr, oldVal, newVal) {   
    }

    /* 
        render will return the html Template to be added to the HTML for this component
    */
    render() {
        return `
        <style>
            .container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            #imgPokemon {
                display: block;
                margin: auto;
            }
            .name-of-pokemon {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }
        </style>
        
        <div class="container>

            <div class="image-of-pokemon">
                <img id="imgPokemon" src=${this.IMAGE_OF_POKEMON}>
            </div>
            <div class="name-of-pokemon">
                <div class="pokemon-id"> ${this.id} </div>
                <div class="pokemon-name"> ${this.NAME_OF_POKEMON} </div>
            </div>
        </div>

        
        `;
    }
  }
  
  BasicWebComponent.observedAttributes = ['icon'];
  
  customElements.define('kaaro-pokemon', BasicWebComponent);