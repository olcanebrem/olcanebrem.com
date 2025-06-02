class RiveAnimation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    const container = document.createElement('div');
    container.style.width = '800px';
    container.style.height = '800px';
    container.style.maxWidth = '100%';
    container.style.margin = '0 auto';
    container.style.position = 'relative';
    
    const canvas = document.createElement('canvas');
    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();
    
    // Set display size
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    
    // Set actual size in memory
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    // Scale context to match device pixel ratio
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    
    container.appendChild(canvas);
    this.shadowRoot.appendChild(container);

    try {
      const { Rive } = await import('@rive-app/canvas');
      new Rive({
        canvas,
        src: '/rive/ohhhhs.riv',
        autoplay: true,
        stateMachines: ['State Machine 1']
      });
    } catch (err) {
      console.error('Rive yüklenemedi:', err);
      container.style.display = 'none';
      const error = document.createElement('div');
      error.textContent = 'Animasyon yüklenemedi';
      this.shadowRoot.appendChild(error);
    }
  }
}

customElements.define('rive-animation', RiveAnimation);