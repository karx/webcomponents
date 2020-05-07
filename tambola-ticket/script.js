import * as ticketlib from'./tambola-lib/tickets.js';

class BasicWebComponent extends HTMLElement {

    
    constructor() {
      super(); // this is mandatory

        this.initRandomTicket();
    }

    connectedCallback() {
      const rootElem = document.createElement('div');
      rootElem.innerHTML = this.render();
  
      let shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(rootElem);
    //   this.addEventListener( 'click', this._onClick);
      this.addEventListener('dblclick', this.process_touchstart, false);
    }

    disconnectedCallback() {

    }
    
    attributeChangedCallback(attr, oldVal, newVal) {   
      
    }

    initRandomTicket() {
        this.SEED = Math.floor(Math.random() * 100000);
        if (this.hasAttribute('id')) {
            this.id = this.getAttribute('id');
            console.log('User defined ticket');
        } else {
            this.id =  Math.floor((this.SEED%500) + 1);    //= TBD more on how to use seed
            this.setAttribute('id', this.id);
        }

        if(this.hasAttribute('name')) {
            this.name = this.getAttribute('name');   
        } else {
            this.name = 'anonymous';
            this.setAttribute('name', this.name);
        }
        this.TICKET_ID = this.id;
        this.TICKET_VALUES = ticketlib.ticketFromId(this.id);
        this.NAME_ON_TICKET = this.name;
    }
    convertToHTML(ticket_values) {
        console.log(ticket_values);
        let html_patch = `<table>`;
        ticket_values.forEach( (row,i) => {
            html_patch += `<tr id="row-${i}">`;
            row.forEach( (val,j) => {
                html_patch+= `<td id="value-${i}${j}" class="${val != 0 ? 'is_num': 'is_blank'} num_${val}"> ${val != 0 ? val : ''} </td>`;
            });
            html_patch += `</tr>`;
        });
        html_patch += `</table>`;
        return html_patch;
    }   
  
    process_touchstart(event) {
        console.log(event);
        console.log(event.target);
        console.log(event.originalTarget);
        if(event.originalTarget.tagName == 'TD') {
            let classListOfTag = event.originalTarget.classList;
            if(classListOfTag.contains("is_num")) {
                if(classListOfTag.contains("crossed")) {
                    classListOfTag.remove("crossed");
                } else {
                    classListOfTag.add("crossed");
                }
            }
        }
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
                width:80%;                
            }
           .ticket-values table td {
               border: 1px solid black;
               padding: 5px;
            }
            .crossed {
                background-color: red;
            }
            .ticket-info {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                width: 100%;
            }

        </style>

        <div class="card">
            <div class="container">

                <div class="ticket-values">
                    ${this.convertToHTML(this.TICKET_VALUES)}
                </div>
                <div class="ticket-info">
                    <div class="ticket-id"> ${this.id} </div>
                    <div class="ticket-name"> ${this.NAME_ON_TICKET} </div>
                </div>

            </div>
        </div>

        
        `;
    }
  }
  
  BasicWebComponent.observedAttributes = ['id'];
  BasicWebComponent.observedAttributes = ['name'];
  
  customElements.define('tambola-ticket', BasicWebComponent);