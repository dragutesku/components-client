import { LitElement, html } from 'lit-element';

// Pages
import './client/Pages/Homepage.js';

// Default UI
import "./css/minimal-ui.css";
import "./scss/ui.scss";

class App extends LitElement {

  render() {
    return html `
        <div class="wrapper">
          <page-homepage></page-homepage>
        </div>
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

customElements.define('app-component', App);