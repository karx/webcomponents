import { PahoMQTT } from './libs/paho-mqtt.js';
class BasicWebComponent extends HTMLElement {


    constructor() {
        super(); // this is mandatory

        // this.initRandomTicket();
    }

    connectedCallback() {
        // const rootElem = document.createElement('div');
        // rootElem.innerHTML = this.render();

        // let shadowRoot = this.attachShadow({ mode: 'open' });
        // shadowRoot.appendChild(rootElem);
        // this.addEventListener('dblclick', this._onClick, false);

        this.init_mq_connection();
        
    }

    init_mq_connection() {
        console.log(PahoMQTT);
        if (this.hasAttribute('host')) {
            this.host = this.getAttribute('host');
            console.log('User defined host');
        } else {
            this.host =  `wss://api.akriya.co.in:8084/mqtt`;
            this.setAttribute('host', this.host);
        }
        
        if (this.hasAttribute('client_name')) {
            this.client_name = this.getAttribute('client_name');
            console.log('User defined client_name');
        } else {
            this.SEED = Math.floor(Math.random() * 100000);
            this.client_name = `mq_spec_` +  Math.floor((this.SEED%50000) + 1);    //= 1 in 50000
            this.setAttribute('client_name', this.client_name);
        }

        this.client = new PahoMQTT.Client(this.host, this.client_name);
        this.client.onConnectionLost = this.onConnectionLost.bind(this);
        this.client.onMessageArrived = this.onMessageArrived.bind(this);
        this.client.connect({onSuccess:this.onConnect.bind(this)});
    }

    disconnectedCallback() {

    }

    attributeChangedCallback(attr, oldVal, newVal) {

    }

    onConnectionLost(responseObject) {
        console.warn(responseObject);
    }

    onMessageArrived(message) {
        console.log('Got message');
        console.log(message);

                
        this.dispatchEvent(new CustomEvent('mqttmessage', {
            bubbles: true,
            composed: false,
            detail: message
        }));

    }

    onConnect() {
        let client = this.client;
          // Once a connection has been made, make a subscription and send a message.
        client.subscribe(`mq_spectate/product/${this.client_name}/all`);
        client.subscribe(`mq_spectate/product/all`);
        let message = new PahoMQTT.Message("Here");
        message.destinationName = `hoenn/presence/${this.client_name}`;
        client.send(message);
        console.log(`message sent to hoenn/presence/${this.client_name}`);
    }


    /* in/
        render will return the html Template to be added to the HTML for this component
    */
    render() {
        
    }
}

BasicWebComponent.observedAttributes = ['host'];
BasicWebComponent.observedAttributes = ['topic'];

customElements.define('mq-spectate', BasicWebComponent);