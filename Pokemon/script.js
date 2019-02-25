
const htmlTemplate = `

`;
class BasicWebComponent extends HTMLElement {

    
    constructor() {
      super(); // this is mandatory
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
        <h1> Bulbasaur </h1>
        `;
    }
  }
  
  BasicWebComponent.observedAttributes = ['icon'];
  
  customElements.define('kaaro-pokemon', BasicWebComponent);