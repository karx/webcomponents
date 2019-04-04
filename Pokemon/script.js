import * as pokelib from'./poke-lib/pokemons.js';

class BasicWebComponent extends HTMLElement {

    
    constructor() {
      super(); // this is mandatory

        this.initRandomPokemon();
    }

    connectedCallback() {
      const rootElem = document.createElement('div');
      rootElem.innerHTML = this.render();
  
      let shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(rootElem);
      this.addEventListener( 'click', this._onClick);
    }

    disconnectedCallback() {

    }
    
    attributeChangedCallback(attr, oldVal, newVal) {   
      
    }

    initRandomPokemon() {
        this.SEED = Math.floor(Math.random() * 100000);
        if (this.hasAttribute('id')) {
            this.id = this.getAttribute('id');
            console.log('User defined pokemon');
        } else {
            this.id =  Math.floor((this.SEED%500) + 1);    //= 1 in 100
            this.setAttribute('id', this.id);
        }
        this.NAME_OF_POKEMON = pokelib.nameOfPokemonFromId(this.id);
        this.IMAGE_OF_POKEMON = pokelib.pokemonImageSourceFromId(this.id);
        this.POKEMON_INFO = pokelib.pokemonFromId(this.id);
    }
  

    _onClick(event) {
        console.log(event);
        console.log(this.shadowRoot.querySelectorAll(".stats"));
        this.shadowRoot.querySelectorAll(".stats").forEach( (element) => {
            let x = element.style.display = 'flex';
            console.log(x);
        })
    }

    /* in/
        render will return the html Template to be added to the HTML for this component
    */
    render() {
        return `
        <style>
            .card {
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
                width: fit;
                border-radius: 5px;
                display: flex;
                flex-direction: row;
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
                flex-direction: column;
            }
            .types {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
            }
            .base {
                display: flex;
                flex-direction: column;

            }
            .eachStat {
                display: flex;
                flex-direction: row;
                justify-content: right;
            }
            .eachStatValue {
                padding-left: 5px;
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
                <div class="types">
                ${this.POKEMON_INFO.type.reduce( (valueTillNow, currentValue) => {
                        return valueTillNow + '<div class="type"> ' + currentValue + '</div>';
                }, '')}
                </div>
                <div class="base">
                ${Object.keys(this.POKEMON_INFO.base).reduce( (valueTillNow, currentValue) => {
                    return valueTillNow + 
                        '<div class="eachStat"> ' +
                            '<div class="eachStatType"> ' + currentValue + '</div>' +
                            '<div class="eachStatValue"> ' + this.POKEMON_INFO.base[currentValue] + '</div>' +  
                        '</div>';
            }, '')}
                </div>
            </div>
        </div>

        
        `;
    }
  }
  
  BasicWebComponent.observedAttributes = ['id'];
  
  customElements.define('kaaro-pokemon', BasicWebComponent);