
function nameOfPokemonFromId(id) {
    return "Golduck";
}

function pokemonImageSourceFromId(id) {
    return "https://seeklogo.com/images/G/golduck-logo-F92667F51F-seeklogo.com.png"
}

class BasicWebComponent extends HTMLElement {

    
    constructor() {
      super(); // this is mandatory

        this.initRandomPokemon();
    }

    initRandomPokemon() {
        this.id =  Math.floor((Math.random() * 100) + 1);
        this.NAME_OF_POKEMON = nameOfPokemonFromId(this.id);
        this.IMAGE_OF_POKEMON = pokemonImageSourceFromId(this.id);
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
            }
        </style>
        
        <div class="container>

            <div class="image-of-pokemon">
                <img src=${this.IMAGE_OF_POKEMON}>
            </div>
            <div class="name-of-pokemon">
                ${this.NAME_OF_POKEMON}
            </div>
        </div>

        
        `;
    }
  }
  
  BasicWebComponent.observedAttributes = ['icon'];
  
  customElements.define('kaaro-pokemon', BasicWebComponent);