import { html, LitElement, property, customElement, css, unsafeCSS } from "lit-element/lit-element";
import * as styles from "./styles.scss";
import { template } from "./template";
/**
 * `uxl-tile-view`
 * A tile view component
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
@customElement("demo-component")
export class DemoComponent extends LitElement {
  render() {
    return html`
      ${template()}
    `;
  }
  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }
}
