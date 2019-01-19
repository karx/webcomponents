
const htmlTemplate = `<style>
:host {
--red: #F44336;
--yellow: #FDD835;
--blue: #1E88E5;
display: flex;
margin: 0;
padding: 0;
height: 100%;
text-align: center;
align-items: center;
justify-content: center;
background: none;
}

#bart {
width: 450px;
height: 671px;
position: relative;
}

#bart::after {
content: "";
width: 450px;
height: 671px;
position: absolute;
top: 0;
left: 0;
z-index:-1;
background: url(https://upload.wikimedia.org/wikipedia/fi/thumb/0/01/Bart_Simpson_2009.svg/1200px-Bart_Simpson_2009.svg.png) #fff;
background-size:cover;
opacity: 0;
}

#bart > div {
opacity: 1;
}

#bart > div > div,
#bart > div > div > div {
position: absolute;
box-sizing:border-box;
}

#shadow {
z-index: -1;
position: absolute;
width: 280px;
height: 60px;
background: rgba(0,0,0,0.4);
border-radius: 100%;
filter: blur(5px);
bottom: 40px;
right: 15px;
}

/** HEAD **/
.eyelash {
width: 20px;
height: 20px;
background: var(--yellow);
border-radius: 100%;
border: 3px solid transparent;
border-left: 3px solid black;
border-top: 3px solid black;
-webkit-transform: rotate(-33deg);
transform: rotate(-33deg);
top: 166px;
left: 116px;
}

.eye {
top: 175px;
left: 154px;
width: 70px;
height: 70px;
background: #fff;
border: 3px solid #000;
border-radius: 100%;
box-shadow: inset 0 0 5px 4px #fff, inset -10px 0 2px rgba(0,0,0,0.1), inset 7px 0 0 28px #fff, inset 0 0 0 100px #000;
overflow: hidden;
}

.eye.left {
left: 107px;
width: 65px;
height: 65px;
box-shadow: inset 0 0 5px 4px #fff, inset -10px 0 2px rgba(0,0,0,0.1), inset -1px 0 0 26px #fff, inset 0 0 0 100px #000;
}

/* Uncomment this block to make the eys blink

@-webkit-keyframes blink-down {
0%, 2%, 6%, 100% { transform: translate(-25%, -100px); }
4% { transform: translate(-25%, 27px); }
}

@-webkit-keyframes blink-up {
0%, 2%, 6%, 100% { transform: translate(-25%, 100px); }
4% { transform: translate(-25%, 29px); }
}

@keyframes blink-down {
0%, 2%, 6%, 100% { transform: translate(-25%, -100px); }
4% { transform: translate(-25%, 27px); }
}

@keyframes blink-up {
0%, 2%, 6%, 100% { transform: translate(-25%, 100px); }
4% { transform: translate(-25%, 29px); }
}

.eye::before,
.eye::after {
content: "";
position: absolute;
display: block;
width: 200%;
height: 200%;
background: var(--yellow);
border-radius: 100%;
transform: translate(-25%, 20%);
border-top: 3px solid #000;
animation: blink-up 20s linear infinite;
}

.eye::after {
background: none;
box-shadow: 0 -100px var(--yellow);
animation: blink-down 20s linear infinite;
}
*/

#ear {
background: var(--yellow);
width: 27px;
height: 32px;
top: 235px;
left:237px;
border-radius: 100%;
border: 3px solid #000;
border-left: 3px solid transparent;
}

#ear::before,
#ear::after {
content: "";
display: block;
position: absolute;
width: 14px;
height: 10px;
border-radius: 100%;
border: 1px solid var(--yellow);
border-top: 4px solid #000;
top: 6px;
left: 3px;
-webkit-transform: rotate(-10deg);
transform: rotate(-10deg);
}

#ear::after {
top: 8px;
width: 7px;
height: 7px;
border-right: 3px solid #000;
}

#forehead {
height: 145px;
width: 130px;
background: var(--yellow);
top: 93px;
left: 125px;
border-left: 3px solid #000;
-webkit-transform: rotate(2.5deg);
transform: rotate(2.5deg);
border-radius: 0 32px;
}


.lip {
width: 120px;
height: 35px;
border: 3px solid var(--yellow);
border-bottom: 3px solid #000;
border-left: 3px solid #000;
border-radius: 100%;
background: var(--yellow);
top: 260px;
left: 110px;
}

.lip::after {
content: "";
display: block;
position: absolute;
bottom: 3px;
right: 2px;
box-shadow: inset 0 3px #000;
width:14px;
border-radius: 100%;
height: 6px;
-webkit-transform: rotate(20deg);
transform: rotate(20deg);
}

.cheecks {
width: 138px;
height: 33px;
border: 3px solid transparent; /* var(--yellow);*/
border-bottom: 0px solid var(--yellow);
border-left: 3px solid #000;
border-right: 3px solid #000;
background: var(--yellow);
top: 240px;
left: 115px;
-webkit-transform: skew(-10deg);
transform: skew(-10deg);
}

.cheecks::after {
content: "";
position: absolute;
display: block;
width: 118px;
height: 20px;
background: var(--yellow);
-webkit-transform: rotate(4deg);
transform: rotate(4deg);
top:-15px;
left: 10px;
}

#nose {
width: 26px;
height: 26px;
background: var(--yellow);
border-radius: 100%;
border:3px solid transparent;
border-left:3px solid #000;
border-top:3px solid #000;
top: 232px;
left: 112px;
-webkit-transform: rotate(-30deg);
-webkit-transform-origin: 0 0;
transform: rotate(-30deg);
transform-origin: 0 0;
}

#nose::after {
content: "";
position: absolute;
display: block;
border-bottom: 3px solid #000;
box-shadow: 0 40px 0 var(--yellow);
-webkit-transform: rotate(33deg);
-webkit-transform-origin: 0 0;
transform: rotate(33deg);
transform-origin: 0 0;
width: 40px;
top: -1px;
left: 17px;
}

#nose::before {
content: "";
position: absolute;
display: block;
width: 25px;
border: 3px solid transparent;
border-bottom: 3px solid #000;
border-right: 0;
-webkit-transform: rotate(33deg);
-webkit-transform-origin: 0 0;
transform: rotate(33deg);
transform-origin: 0 0;
border-radius:100% 100% 0 100%;
height:10px;
top: 4px;
left: 4px;
left: 3.5px;
}

#mouth {
width: 40px;
height: 20px;
border-radius: 100%;
border: 3px solid #000;
top: 285px;
left: 169px;
background: var(--yellow);
}

#neck {
width: 64px;
height: 80px;
background: var(--yellow);
box-shadow: inset 3px 0 0 #000;
border-right: 3px solid #000;
top: 236px;
left:187px;
-webkit-transform: rotate(-7deg) skewY(-7deg);
transform: rotate(-7deg) skewY(-7deg);
}

#neck::after {
content:"";
display: block;
position: absolute;
top: 33px;
left: -6px;
height: 30px;
width: 40px;
background: var(--yellow);
border-radius: 100%;
}

#neck::before {
content:"";
display: block;
position: absolute;
width: 64px;
height: 20px;
border-radius: 100%;
left: 0;
bottom: -10px;
box-shadow:  inset -3px -3px black, inset 3px -3px black, inset 0 -20px 0 -6px var(--yellow);
z-index: -1;
}

.hair {
background: var(--yellow);
-webkit-transform: skewY(45deg);
transform: skewY(45deg);
box-shadow:inset 3px 0 #000, inset 0 3px #000;
}

#hair-1 {
width: 16px;
height: 30px;
top: 80px;
left: 128px;
}

#hair-2 {
width: 20px;
height: 18px;
top: 79px;
left: 141px;
-webkit-transform: rotate(30deg) skewY(25deg);
transform: rotate(30deg) skewY(25deg);
}

#hair-3 {
width: 17px;
height: 19px;
top: 79px;
left: 160px;
-webkit-transform: rotate(24deg) skewY(33deg);
transform: rotate(24deg) skewY(33deg);
}

#hair-4 {
width: 20px;
height: 23px;
top: 76px;
left: 176px;
-webkit-transform: rotate(34deg) skewY(25deg);
transform: rotate(34deg) skewY(25deg);
}

#hair-5 {
width: 20px;
height: 19px;
top: 78px;
left: 196px;
-webkit-transform: rotate(30deg) skewY(37deg);
transform: rotate(30deg) skewY(37deg);
box-shadow:inset 3px 0 #000, inset 0 3px #000, 3px 10px var(--yellow);
}

#hair-6 {
width: 20px;
height: 19px;
top: 82px;
left: 213px;
-webkit-transform: rotate(30deg) skewY(37deg);
transform: rotate(30deg) skewY(37deg);
box-shadow:inset 3px 0 #000, inset 0 3px #000, 3px 10px var(--yellow);
}

#hair-7 {
width: 17px;
height: 20px;
top: 86px;
left: 230px;
-webkit-transform: rotate(40deg) skewY(37deg);
transform: rotate(40deg) skewY(37deg);
}

#hair-8 {
width: 18px;
height: 21px;
top: 90px;
left: 245px;
-webkit-transform: rotate(45deg) skewY(37deg);
transform: rotate(45deg) skewY(37deg);
}

#hair-9 {
width: 18px;
height: 21px;
top: 98px;
left: 259px;
-webkit-transform: rotate(50deg) skewY(50deg);
transform: rotate(50deg) skewY(50deg);
box-shadow:inset 3px 0 #000, inset 0 5px #000, 3px 14px var(--yellow);
}

.back {
width: 30px;
height: 100px;
border-right: 3px solid #000;
background: var(--yellow);
top: 140px;
left: 230px;
-webkit-transform: rotate(8deg);
transform: rotate(8deg);
}

.back::after {
content:"";
display: block;
position: absolute;
right: -3px;
border-right: 3px solid #000;
width: 20px;
height: 35px;
top: -34px;
background: var(--yellow);
-webkit-transform-origin: bottom right;
-webkit-transform: rotate(5deg);
transform-origin: bottom right;
transform: rotate(5deg);
}

/** BODY **/

#shirt,
.shirt-manga {
width: 600px;
height: 400px;
border-radius: 100%;
top: 58px;
left: -100px;
-webkit-transform: rotate(13deg);
transform: rotate(13deg);
overflow: hidden;
}

#shirt > div,
.shirt-manga > div {
width: 164px;
height: 250px;
border-radius: 100%;
bottom: -137px;
left: 296px;
box-shadow: inset 0 0 0 3px #000, inset 0 0 0 100px var(--red);
-webkit-transform: rotate(-13deg);
transform: rotate(-13deg);
overflow: hidden;
}

#shirt > div::before,
.shirt-manga > div::before {
content: "";
display: block;
position: absolute;
width: 600px;
height: 400px;
border-radius: 100%;
top: -293px;
left: -196px;
-webkit-transform: rotate(1deg);
transform: rotate(1deg);
box-shadow: inset 0 -3px #000;
}

.shirt-manga {
top: -20px;
left: -50px;
-webkit-transform: rotate(5deg);
transform: rotate(5deg);
}

.shirt-manga > div {
width: 70px;
height: 150px;
bottom: -88px;
left: 290px;
-webkit-transform: rotate(-5deg);
transform: rotate(-5deg);
box-shadow: inset 0 0 0 3px #000, inset 0 0 0 100px var(--red), -15px -10px var(--red);
}

.shirt-manga > div::before {
top: -344px;
-webkit-transform: rotate(-13deg);
transform: rotate(-13deg);
}

.shirt-manga.left {
top: -17px;
left: -57px;
-webkit-transform: rotate(20deg);
transform: rotate(20deg);
}

.shirt-manga.left > div {
box-shadow: inset 0 0 0 2px #000, inset 0 0 0 100px var(--red);
}

.shirt-open {
width: 55px;
height: 10px;
box-shadow: 0 -3px #000;
border-radius: 100%;
top: 372px;
left: 230px;
-webkit-transform: rotate(1deg);
transform: rotate(1deg)
}

.pants-pocket {
width: 55px;
height: 10px;
box-shadow: 0 3px #000;
border-radius: 100%;
top: 459px;
left: 220px;
-webkit-transform: rotate(-1deg);
transform: rotate(-1deg);
}

.arm.left {
width: 10px;
height: 40px;
background: var(--yellow);
border:3px solid transparent;
border-left: 2px solid #000;
top: 365px;
left: 168px;
-webkit-transform: rotate(10deg);
transform: rotate(10deg);
}

.arm.right {
border-left: 3px solid #000;
background: var(--yellow);
width: 44px;
height: 98px;
top: 372px;
left: 236px;
-webkit-transform-origin: top left;
-webkit-transform: rotate(6deg) skewY(-6deg);
transform-origin: top left;
transform: rotate(6deg) skewY(-6deg);
box-shadow: inset -3px 0 #000;
}

.shirt-neck {
width: 30px;
height: 30px;
background: var(--red);
border-radius: 100%;
border-top: 3px solid #000;
border-right: 3px solid #000;
top: 306px;
left: 234px;
}

.shirt-body {
width: 40px;
height: 200px;
background: var(--red);
border-radius: 100%;
border:3px solid transparent;
border-left: 3px solid #000;
top: 218px;
left: 193px;
-webkit-transform: rotate(22deg);
transform: rotate(22deg);
}

.shirt-back {
width: 30px;
height: 80px;
background: var(--red);
border-radius: 100%;
border:3px solid transparent;
border-right: 3px solid #000;
top: 321px;
left: 250px;
-webkit-transform: rotate(-15deg);
transform: rotate(-15deg);
}


/** LEGS **/

.leg {
width: 38px;
height: 70px;
background: var(--yellow);
border-right: 3px solid #000;
border-left: 3px solid #000;
top: 500px;
left: 226px;
}

.leg::after {
content: "";
display: block;
position: absolute;
box-shadow: inset 0 -3px #000, 0 5px 0 5px #fff; /*, 2px 8px 0 8px #000;*/
width: 36px;
left: -2px;
height: 8px;
border-radius:100%;
bottom: -3px;
}

.leg.left {
left: 180px;
width: 37px;
height: 63px;
-webkit-transform: skewY(2deg);
transform: skewY(2deg);
}

.shoe {
opacity: 1;
top: 580px;
left: 192px;
width: 90px;
height: 50px;
z-index: -1;
}

.shoe .shoe-line-1 {
width: 100%;
height: 25px;
bottom: 0;
border-radius: 100%;
box-shadow: inset 3px -2px #000, inset -3px -2px #000, inset 0 -3px #000, inset 0 -9px #fff, inset 0 -12px #000;
-webkit-transform: rotate(-2deg);
transform: rotate(-2deg);
}

.shoe .shoe-line-2 {
height: 105%;
width: 20px;
bottom: 11px;
left: -5px;
border-radius: 100%;
box-shadow: inset 3px 0 #000, inset 100px 0 var(--blue);
-webkit-transform-origin: bottom left;
-webkit-transform: rotate(33deg);
transform-origin: bottom left;
transform: rotate(33deg);
}

.shoe .shoe-line-3 {
height: 100%;
width: 15px;
top: -12px;
right: -3px;
border-radius: 100%;
box-shadow: inset -3px 0 #000, inset 100px 0 var(--blue);
-webkit-transform-origin: bottom right;
-webkit-transform: rotate(-20deg);
transform-origin: bottom right;
transform: rotate(-20deg);
}

.shoe .filling {
width: 60px;
height: 33px;
background: var(--blue);
box-shadow: -3px 8px var(--blue);
top: 4px;
left: 20px;
}

.shoe.left {
opacity: 1;
left: 138px;
top: 570px;
height: 46px;
z-index: -1;
}

.shoe.left .filling {
left: 22px;
width: 100px;
}

.shoe.left .shoe-line-2 {
-webkit-transform: rotate(44deg);
transform: rotate(44deg);
left: -5px;
height: 110%;
bottom: 15px;
}

.shoe.left .logo {
border-radius: 100%;
width: 21px;
height:21px;
background: #fff;
border: 3px solid #000;
right: 12px;
top: 9px;
}

.sock {
width: 50px;
height: 23px;
border-radius: 100%;
box-shadow: inset 0 -3px #000;
top: 564px;
left: 220px;
}

.sock.left {
left:173px;
top: 556px;
}

.sock::before {
content:"";
display: block;
position: absolute;
width: 10px;
height: 10px;
top: 2px;
background: none;
border-radius: 100%;
border-left: 3px solid #000;
border-top: 3px solid #000;
}

.sock::after {
content:"";
display: block;
position: absolute;
width: 10px;
height: 10px;
top: 2px;
right: -1px;
background: none;
border-radius: 100%;
border-right: 3px solid #000;
border-top: 3px solid #000;
}

#shorts {
width: 150px;
height: 110px;
background: var(--blue);
border-radius: 100%;
top: 395px;
left: 155px;
border: 3px solid #000;
}

.shorts-leg {
width: 78px;
height: 31px;
border-left: 3px solid #000;
border-right: 3px solid #000;
top: 483px;
left: 212px;
background: var(--blue);
-webkit-transform: skewY(-3deg);
transform: skewY(-3deg);
}

.shorts-leg.right {
left: 160px;
top: 470px;
height: 35px;
-webkit-transform: skewY(5deg);
transform: skewY(5deg);
}

.shorts-leg::before {
content: "";
display: block;
position: absolute;
width: 78px;
height: 14px;
top: 23px;
left: -3px;
background: var(--blue);
border-radius: 100%;
-webkit-transform: skewY(-0deg);
transform: skewY(-0deg);
box-shadow: inset 0 -3px #000;
}

.shorts-leg.right::before {
top: auto;
bottom: -6px;
}

.shorts-leg::after {
content: "";
position: absolute;
top: 0;
left: -3px;
width: 3px;
background: var(--blue);
height: 16px;
box-shadow: 0 15px black, 75px 15px black;
}

.shorts-leg.right::after {
background: #000;
height: 20px;
}
</style>
<div id="bart">
  <div id="shadow"></div>
  <div id="legs">
    <div class="sock"></div>
    <div class="sock left"></div>
    <div class="leg left"></div>
    <div class="leg right"></div>
    <div class="shorts-leg right"></div>
    <div id="shorts"></div>
    <div class="shorts-leg left"></div>
    <div class="shoe left">
      <div class="filling"></div>
      <div class="shoe-line-2"></div>
      <div class="shoe-line-1"></div>
      <div class="logo"></div>
    </div>
    <div class="shoe">
      <div class="filling"></div>
      <div class="shoe-line-2"></div>
      <div class="shoe-line-3"></div>
      <div class="shoe-line-1"></div>
      
    </div>
    
  </div>
  <div id="body">
    <div class="arm left"></div>
    <div class="shirt-manga left"><div></div></div>
    <div id="shirt"><div></div></div>
    <div class="shirt-back"></div>
    <div class="shirt-neck"></div>
    <div class="shirt-body"></div>
    <div class="shirt-manga"><div></div></div>
    <div class="arm right"></div>
    <div class="shirt-open"></div>
    <div class="pants-pocket"></div>
  </div>
  <div id="head">
    <div id="hair">
      <div class="hair" id="hair-1"></div>
      <div class="hair" id="hair-2"></div>
      <div class="hair" id="hair-3"></div>
      <div class="hair" id="hair-4"></div>
      <div class="hair" id="hair-5"></div>
      <div class="hair" id="hair-6"></div>
      <div class="hair" id="hair-7"></div>
      <div class="hair" id="hair-8"></div>
      <div class="hair" id="hair-9"></div>
    </div>
    <div id="mouth"></div>
    <div id="neck"></div>
    <div id="forehead"></div>
    <div class="eyelash"></div>
    <div class="lip"></div>
    <div class="eye left"></div>
    <div class="cheecks"></div>
    <div id="nose"></div>
    <div class="eye right"></div>
    <div class="back"></div>
    <div id="ear"></div>
  </div>
  </div>`;

const style = `
      
            `;
class BartSimpsonComponent extends HTMLElement {
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


customElements.define('baart-webc', BartSimpsonComponent);