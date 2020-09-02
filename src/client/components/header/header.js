import { LitElement, html } from 'lit-element';
import './Header.scss';

class Header extends LitElement {

  render() {
    return html `
      <header> 
        Hello i am a new header 4
      </header>
    `;
  }
}


console.log("The header is loaded or not !");

customElements.define('header-component', Header);
