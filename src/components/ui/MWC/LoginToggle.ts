import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('login-toggle')
export class LoginToggle extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      --md-toggle-width: 200px;
      --md-toggle-height: 56px;
      --md-toggle-padding: 4px;
      --md-knob-size: 48px;
      --md-easing-emphasized: cubic-bezier(0.2, 0, 0, 1);
      --md-easing-accelerate: cubic-bezier(0.3, 0, 1, 1);
      --md-easing-decelerate: cubic-bezier(0, 0, 0, 1);
    }

    .toggle {
      position: relative;
      width: var(--md-toggle-width);
      height: var(--md-toggle-height);
      background-color: var(--md-sys-color-surface-container-high);
      border-radius: 28px;
      padding: var(--md-toggle-padding);
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: background-color 200ms var(--md-easing-decelerate);
    }

    .option {
      flex: 1;
      text-align: center;
      font-weight: 500;
      z-index: 1;
      pointer-events: none;
      opacity: 0.7;
      transition: opacity 200ms var(--md-easing-decelerate);
    }

    .option.active {
      opacity: 1;
    }

    .knob {
      position: absolute;
      width: var(--md-knob-size);
      height: var(--md-knob-size);
      background-color: var(--md-sys-color-primary-container);
      border-radius: 50%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      top: 4px;
      left: 4px;
      transition: left 200ms var(--md-easing-decelerate),
                  background-color 200ms var(--md-easing-decelerate),
                  transform 150ms var(--md-easing-accelerate);
    }

    .knob.animate {
      transform: scale(1.05);
    }

    input[type="hidden"] {
      display: none;
    }
  `;

  @state() private value: 'email' | 'phone' = 'email';

  render() {
    return html`
      <div class="toggle" tabindex="0" @click=${this.toggle} @keydown=${this.handleKey}>
        <span class="option ${this.value === 'email' ? 'active' : ''}">E-mail</span>
        <span class="option ${this.value === 'phone' ? 'active' : ''}">Telefon</span>
        <div class="knob" style=${this.knobPosition()}></div>
        <input type="hidden" name="login_method" .value=${this.value}>
      </div>
    `;
  }

  private knobPosition() {
    const offset = this.value === 'phone' ? 'calc(100% - var(--md-knob-size) - 4px)' : '4px';
    return `left: ${offset};`;
  }

  private toggle() {
    this.value = this.value === 'email' ? 'phone' : 'email';
    const knob = this.shadowRoot?.querySelector('.knob');
    if (knob) {
      knob.classList.add('animate');
      setTimeout(() => knob.classList.remove('animate'), 150);
    }

    const hiddenInput = this.shadowRoot?.querySelector('input[type="hidden"]') as HTMLInputElement;
    if (hiddenInput) {
      hiddenInput.value = this.value;
    }

    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true,
    }));
  }

  private handleKey(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.toggle();
    }
  }
} 