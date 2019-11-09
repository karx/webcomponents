// Import the LitElement base class and html helper function
import { LitElement, css, html } from "./node_modules/lit-element/lit-element.js"; // Extend the LitElement base class

class VidiyoCarousal extends LitElement {
  static get styles() {
    return css`
    * {
      margin: 0;
      padding: 0;
    }
    
    html,
    body {
      height: 100%;
      /* for touch screen */
      touch-action: none; 
    }
    
    body {
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
    
    #drag-container, #spin-container {
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
    
    #drag-container img, #drag-container video {
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
      -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0005);
    }
    
    #drag-container img:hover, #drag-container video:hover {
      -webkit-box-shadow: 0 0 15px #fffd;
              box-shadow: 0 0 15px #fffd;
      -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0007);
    }
    
    #drag-container p {
      font-family: Serif;
      position: absolute;
      top: 100%;
      left: 50%;
      -webkit-transform: translate(-50%,-50%) rotateX(90deg);
              transform: translate(-50%,-50%) rotateX(90deg);
      color: #fff;
    }
    
    #ground {
      width: 900px;
      height: 900px;
      position: absolute;
      top: 100%;
      left: 50%;
      -webkit-transform: translate(-50%,-50%) rotateX(90deg);
              transform: translate(-50%,-50%) rotateX(90deg);
      background: -webkit-radial-gradient(center center, farthest-side , #9993, transparent);
    }
    
    #music-container {
      position: absolute;
      top: 0;
      left: 0;
    }
    
    @-webkit-keyframes spin {
      from{
        -webkit-transform: rotateY(0deg);
                transform: rotateY(0deg);
      } to{
        -webkit-transform: rotateY(360deg);
                transform: rotateY(360deg);
      }
    }
    
    @keyframes spin {
      from{
        -webkit-transform: rotateY(0deg);
                transform: rotateY(0deg);
      } to{
        -webkit-transform: rotateY(360deg);
                transform: rotateY(360deg);
      }
    }
    @-webkit-keyframes spinRevert {
      from{
        -webkit-transform: rotateY(360deg);
                transform: rotateY(360deg);
      } to{
        -webkit-transform: rotateY(0deg);
                transform: rotateY(0deg);
      }
    }
    @keyframes spinRevert {
      from{
        -webkit-transform: rotateY(360deg);
                transform: rotateY(360deg);
      } to{
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
      <img src="https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
      <img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
      <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
      <img src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
      <img src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
      <img src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
      
      <!-- Example image with link -->
      <a target="_blank" href="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg">
        <img src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
      </a>
  
      <!-- Example add video  -->
      <video controls autoplay="autoplay" loop>
        <source src="https://player.vimeo.com/external/322244668.sd.mp4?s=338c48ac2dfcb1d4c0689968b5baf94eee6ca0c1&profile_id=165&oauth2_token_id=57447761" type="video/mp4">
      </video>
  
      <!-- Text at center of ground -->
      <p>3D Tiktok Carousel</p>
    </div>
    <div id="ground"></div>
  </div>
  
  <div id="music-container"></div>
    `;
  }

  // Author: Hoang Tran (https://www.facebook.com/profile.php?id=100004848287494)
// Github verson (1 file .html): https://github.com/HoangTran0410/3DCarousel/blob/master/index.html



} // Register the new element with the browser.


customElements.define('vidiyo-carousal', VidiyoCarousal);