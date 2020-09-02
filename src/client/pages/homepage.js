import { LitElement, html } from 'lit-element';

// Page Components
import '../components/Header/Header.js';

class Homepage extends LitElement {

  render() {
    return html `
        <header-component></header-component>
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