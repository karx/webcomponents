
const htmlTemplate = `

<style>
@import url("https://fonts.googleapis.com/css?family=Griffy");
:host {
  background-image: url("http://jessicamichele.com/wp-content/uploads/2019/03/anotherdiamond.svg");
  background-color: #aaeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  font-family: "Griffy", cursive;
  font-size: 4em;
}

text {
  fill: #cc9999;
  animation: changeColor 20s infinite;
}

.thespiral {
  width: 500px;
  height: auto;
  animation: spin 20s;
}

@keyframes changeColor {
  25% {
    fill: #996699;
  }
  50% {
    fill: #993333;
  }
  75% {
    fill: #339999;
  }
  100% {
    fill: #cc9999;
  }
}
@keyframes spin {
  from {
    transform: rotate(360deg) scale(0.5);
  }
  to {
    transform: rotate(-360deg) scale(1);
  }
}

</style>
<div class="thespiral">
  <svg id="spiral" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 1000 1000">
  <defs>
    <style>
      .cls-1 {
        fill: transparent;
        stroke: transparent;
        stroke-miterlimit: 10;
        stroke-width: 6.64px;
      }
    </style>
  </defs>
  <title>spiralpath</title>
  <path id="curve" class="cls-1" d="M919.3,734.91c0-258.33,209.41-467.74,467.73-467.74,232.5,0,421,188.47,421,421,0,209.25-169.63,378.87-378.87,378.87-188.32,0-341-152.66-341-341,0-169.49,137.4-306.88,306.88-306.88,152.54,0,276.2,123.65,276.2,276.19,0,137.28-111.29,248.58-248.58,248.58-123.55,0-223.72-100.17-223.72-223.72,0-111.2,90.15-201.35,201.35-201.35a181.21,181.21,0,0,1,181.21,181.21A163.09,163.09,0,0,1,1418.4,863.14a146.78,146.78,0,0,1-146.78-146.78,132.1,132.1,0,0,1,132.1-132.1,118.89,118.89,0,0,1,118.9,118.89,107,107,0,0,1-107,107,96.31,96.31,0,0,1-96.3-96.31A86.67,86.67,0,0,1,1406,627.18a78,78,0,0,1,78,78,70.2,70.2,0,0,1-70.21,70.21,63.18,63.18,0,0,1-63.18-63.18,56.87,56.87,0,0,1,56.87-56.87,51.17,51.17,0,0,1,51.17,51.18,46.06,46.06,0,0,1-46.06,46.06,41.45,41.45,0,0,1-41.45-41.46" transform="translate(-918.8 -266.67)"/>
  <text>
    <textPath xlink:href="#curve">
      The time has come &#9679;
The walrus said &#9679;
To talk of many things: &#9679;
Of shoes- and ships- &#9679;
And sealing wax- &#9679;
Of cabbages and kings- &#9679;
And why the sea is boiling hot- &#9679;
And whether pigs have wings ~
      Lewis Carol
    </textPath>
  </text>
</svg>
</div>


`;

class AliceSwigglyComponent extends HTMLElement {
  constructor() {
    super(); // this is mandatory

  }
  connectedCallback() {

    const rootElem = document.createElement('div');
    rootElem.innerHTML = htmlTemplate;

    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(rootElem);
    this.initJs(shadowRoot)
  }


  attributeChangedCallback(attr, oldVal, newVal) {
  }
}




customElements.define('alice-swiggly', AliceSwigglyComponent);