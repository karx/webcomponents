
const htmlTemplate = `
<style>

<h1>Yao</h1>
`;

class WeatherV1Component extends HTMLElement {
  constructor() {
    super(); // this is mandatory

  }
  connectedCallback() {

    const rootElem = document.createElement('div');
    rootElem.innerHTML = htmlTemplate;

    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(rootElem);
  }

  

  attributeChangedCallback(attr, oldVal, newVal) {
  }
}




customElements.define('kaaro-gitcommits', WeatherV1Component);