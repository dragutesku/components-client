import { LitElement, html, customElement } from 'lit-element';
import '../components/header/header.js';

class Homepage extends LitElement {

  render() {
    return html `
        <my-header></my-header>
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