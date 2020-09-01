import { LitElement, html } from 'lit-element';
import './header.scss';

class Header extends LitElement {

  render() {
    return html `
      <header> 
        Hello i am a header
      </header>
    `;
  }
}

console.log("The header is loaded !");

customElements.define('my-header', Header);