
class BasicWebComponent extends HTMLElement {
  constructor() {
    super(); // this is mandatory
  }

  connectedCallback() {
    const pElem = document.createElement('p');
    pElem.textContent = this.getAttribute('text');

    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(pElem);
  }

  attributeChangedCallback(attr, oldVal, newVal) {   
  }
}

BasicWebComponent.observedAttributes = ['icon'];

customElements.define('basic-webc', BasicWebComponent);