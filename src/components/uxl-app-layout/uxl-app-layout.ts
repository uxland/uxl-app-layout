import { html, LitElement, property, customElement, css, unsafeCSS } from "lit-element/lit-element";
import * as styles from "./styles.scss";
import { template } from "./template";
/**
 * `uxl-app-layout`
 * A base layout component
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
@customElement("uxl-app-layout")
export class UxlTileView extends LitElement {
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
