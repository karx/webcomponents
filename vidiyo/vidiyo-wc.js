// Import the LitElement base class and html helper function
import {
  LitElement,
  css,
  html
} from "./node_modules/lit-element/lit-element.js"; // Extend the LitElement base class

class VidiyoCarousal extends LitElement {
  constructor() {
    super();
    // You can change global variables here:
    this.radius = 240; // how big of the radius
    this.autoRotate = true; // auto rotate or not
    this.rotateSpeed = -60; // unit: seconds/360 degrees
    this.imgWidth = 120; // width of images (unit: px)
    this.imgHeight = 170; // height of images (unit: px)

    // Link of background music - set 'null' if you dont want to play background music
    this.bgMusicURL =
      "https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a";
    this.bgMusicControls = true; // Show UI music control
  }

  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
      }

      html,
      :host {
        height: 100%;
        /* for touch screen */
        touch-action: none;
        min-height: 350px;
      }

      :host {
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        background: #111;
        -webkit-perspective: 1000px;
        perspective: 1000px;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
      }

      #drag-container,
      #spin-container {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin: auto;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform: rotateX(-10deg);
        transform: rotateX(-10deg);
      }

      #drag-container img,
      #drag-container video {
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        line-height: 200px;
        font-size: 50px;
        text-align: center;
        -webkit-box-shadow: 0 0 8px #fff;
        box-shadow: 0 0 8px #fff;
        -webkit-box-reflect: below 10px
          linear-gradient(transparent, transparent, #0005);
      }

      #drag-container img:hover,
      #drag-container video:hover {
        -webkit-box-shadow: 0 0 15px #fffd;
        box-shadow: 0 0 15px #fffd;
        -webkit-box-reflect: below 10px
          linear-gradient(transparent, transparent, #0007);
      }

      #drag-container p {
        font-family: Serif;
        position: absolute;
        top: 100%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%) rotateX(90deg);
        transform: translate(-50%, -50%) rotateX(90deg);
        color: #fff;
      }

      #ground {
        width: 900px;
        height: 900px;
        position: absolute;
        top: 100%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%) rotateX(90deg);
        transform: translate(-50%, -50%) rotateX(90deg);
        background: -webkit-radial-gradient(
          center center,
          farthest-side,
          #9993,
          transparent
        );
      }

      #music-container {
        position: absolute;
        top: 0;
        left: 0;
      }

      @-webkit-keyframes spin {
        from {
          -webkit-transform: rotateY(0deg);
          transform: rotateY(0deg);
        }
        to {
          -webkit-transform: rotateY(360deg);
          transform: rotateY(360deg);
        }
      }

      @keyframes spin {
        from {
          -webkit-transform: rotateY(0deg);
          transform: rotateY(0deg);
        }
        to {
          -webkit-transform: rotateY(360deg);
          transform: rotateY(360deg);
        }
      }
      @-webkit-keyframes spinRevert {
        from {
          -webkit-transform: rotateY(360deg);
          transform: rotateY(360deg);
        }
        to {
          -webkit-transform: rotateY(0deg);
          transform: rotateY(0deg);
        }
      }
      @keyframes spinRevert {
        from {
          -webkit-transform: rotateY(360deg);
          transform: rotateY(360deg);
        }
        to {
          -webkit-transform: rotateY(0deg);
          transform: rotateY(0deg);
        }
      }
    `;
  }

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render() {
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
      <div id="drag-container">
        <div id="spin-container">
          <!-- Add your images (or video) here -->
          <img
            src="https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />

          <!-- Example image with link -->
          <a
            target="_blank"
            href="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg"
          >
            <img
              src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </a>

          <!-- Example add video  -->
          <video controls autoplay="autoplay" loop>
            <source
              src="https://player.vimeo.com/external/322244668.sd.mp4?s=338c48ac2dfcb1d4c0689968b5baf94eee6ca0c1&profile_id=165&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>

          <!-- Text at center of ground -->
          <p>Vidiyo</p>
        </div>
        <div id="ground"></div>
      </div>

      <div id="music-container"></div>
    `;
  }

  firstUpdated() {
    console.log("Connected");
    this.odrag = this.shadowRoot.getElementById("drag-container");
    this.ospin = this.shadowRoot.getElementById("spin-container");
    console.log(this.shadowRoot);
    console.log(this.ospin);
    this.aImg = this.ospin.getElementsByTagName("img");
    this.aVid = this.ospin.getElementsByTagName("video");
    this.aEle = [...this.aImg, ...this.aVid]; // combine 2 arrays

    // Size of images
    this.ospin.style.width = this.imgWidth + "px";
    this.ospin.style.height = this.imgHeight + "px";

    // Size of ground - depend on radius
    this.ground = this.shadowRoot.getElementById("ground");
    this.ground.style.width = this.radius * 3 + "px";
    this.ground.style.height = this.radius * 3 + "px";
    this.initCarousal();

    this.sX = 0;
    this.sY = 0;
    this.nX = 0;
    this.nY = 0;
    this.desX = 0;
    (this.desY = 0), (this.tX = 0), (this.tY = 10);

    // auto spin
    if (this.autoRotate) {
      var animationName = this.rotateSpeed > 0 ? "spin" : "spinRevert";
      this.ospin.style.animation = `${animationName} ${Math.abs(
        this.rotateSpeed
      )}s infinite linear`;
    }

    this.onpointerdown = e => {
      clearInterval(this.odrag.timer);
      e = e || window.event;
      this.sX = e.clientX;
      this.sY = e.clientY;

      this.onpointermove = e => {
        e = e || window.event;
        this.nX = e.clientX;
        this.nY = e.clientY;
        this.desX = this.nX - this.sX;
        this.desY = this.nY - this.sY;
        this.tX += this.desX * 0.1;
        this.tY += this.desY * 0.1;
        this.applyTranform(this.odrag);
        this.sX = this.nX;
        this.sY = this.nY;
      };

      this.onpointerup = e => {
        this.odrag.timer = setInterval(() => {
          this.desX *= 0.95;
          this.desY *= 0.95;
          this.tX += this.desX * 0.1;
          this.tY += this.desY * 0.1;
          this.applyTranform(this.odrag);
          this.playSpin(false);
          if (Math.abs(this.desX) < 0.5 && Math.abs(this.desY) < 0.5) {
            clearInterval(this.odrag.timer);
            this.playSpin(true);
          }
        }, 17);
        this.onpointermove = this.onpointerup = null;
      };

      return false;
    };

    this.shadowRoot.onmousewheel = function(e) {
      e = e || window.event;
      var d = e.wheelDelta / 20 || -e.detail;
      this.radius += d;
    };
  }

  initCarousal(delayTime) {
    for (var i = 0; i < this.aEle.length; i++) {
      this.aEle[i].style.transform =
        "rotateY(" +
        i * (360 / this.aEle.length) +
        "deg) translateZ(" +
        this.radius +
        "px)";
      this.aEle[i].style.transition = "transform 1s";
      this.aEle[i].style.transitionDelay =
        delayTime || (this.aEle.length - i) / 4 + "s";
    }
  }

  applyTranform(obj) {
    // Constrain the angle of camera (between 0 and 180)
    if (this.tY > 180) this.tY = 180;
    if (this.tY < 0) this.tY = 0;

    // Apply the angle
    obj.style.transform =
      "rotateX(" + -this.tY + "deg) rotateY(" + this.tX + "deg)";
  }

  playSpin(yes) {
    this.ospin.style.animationPlayState = yes ? "running" : "paused";
  }

  // setup events
} // Register the new element with the browser.

customElements.define("vidiyo-carousal", VidiyoCarousal);
