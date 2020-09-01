import { LitElement, html, customElement } from 'lit-element';

// Page Components
import { Header } from '../components/header/header.js';

class Homepage extends LitElement {

  render() {
    return html `
        ${Header()}
    `;
  };


  createRenderRoot() {
  /**
   * Render template without shadow DOM. Note that shadow DOM features like
   * encapsulated CSS and slots are unavailable.
   */
    return this;
  }
  
};
console.log('This is the homepage !');

customElements.define('page-homepage', Homepage);