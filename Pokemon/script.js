import * as pokelib from'./poke-lib/pokemons.js';

class BasicWebComponent extends HTMLElement {

    
    constructor() {
      super(); // this is mandatory

        this.initRandomPokemon();
    }

    initRandomPokemon() {
        this.SEED = Math.floor(Math.random() * 100000);
        if (this.getAttribute('id')) {
            this.id = this.getAttribute('id');
            console.log('User defined pokemon');
        } else {
            this.id =  Math.floor((this.SEED%500) + 1);    //= 1 in 100
        }
        this.NAME_OF_POKEMON = pokelib.nameOfPokemonFromId(this.id);
        this.IMAGE_OF_POKEMON = pokelib.pokemonImageSourceFromId(this.id);
    }
  
    connectedCallback() {
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
            .card {
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
                width: 10%;
                border-radius: 5px;
            }
            .card:hover {
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
              }

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
                justify-content: space-around;
                align-items: center;
                width: 100%;
            }
            .stats {
                display:none;
            }
        </style>
        <div class="card">
            <div class="container">

                <div class="image-of-pokemon">
                    <img id="imgPokemon" src=${this.IMAGE_OF_POKEMON}>
                </div>
                <div class="name-of-pokemon">
                    <div class="pokemon-id"> ${this.id} </div>
                    <div class="pokemon-name"> ${this.NAME_OF_POKEMON} </div>
                </div>

            </div>
            <div class="stats" >
                Some stats
            </div>
        </div>

        
        `;
    }
  }
  
  BasicWebComponent.observedAttributes = ['id'];
  
  customElements.define('kaaro-pokemon', BasicWebComponent);