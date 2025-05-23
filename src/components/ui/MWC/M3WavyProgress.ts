export class M3WavyProgress extends HTMLElement {
  private svg: SVGElement | null = null;
  private progressCircle: SVGCircleElement | null = null;
  private thumb: SVGCircleElement | null = null;
  private animationFrame: number | null = null;
  private waveOffset = 0;
  private lastX = 0;
  private lastY = 0;

  static get observedAttributes() {
    return ['show-thumb', 'thumb-color', 'thumb-size', 'is-indeterminate'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.svg = this.querySelector('.progress-svg');
    this.progressCircle = this.querySelector('.progress-circle');
    this.thumb = this.querySelector('.thumb');
    
    if (this.progressCircle && !this.progressCircle.hasAttribute('style')) {
      this.startWaveAnimation();
    }

    // Handle visibility changes
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.startWaveAnimation();
          } else {
            this.stopWaveAnimation();
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(this);
  }

  disconnectedCallback() {
    this.stopWaveAnimation();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'show-thumb' && this.thumb) {
      this.thumb.style.display = newValue === 'true' ? 'block' : 'none';
      if (this.progressCircle) {
        this.progressCircle.style.strokeLinecap = newValue === 'true' ? 'butt' : 'round';
      }
    } else if (name === 'thumb-color' && this.thumb) {
      this.thumb.style.fill = newValue;
    } else if (name === 'thumb-size' && this.thumb) {
      const size = parseFloat(newValue);
      this.thumb.setAttribute('r', (size / 2).toString());
    }
  }

  private generateWavyPathData(progress: number, phase: number): { path: string; lastX: number; lastY: number } {
    if (!this.progressCircle) return { path: '', lastX: 0, lastY: 0 };

    const radius = this.progressCircle.r.baseVal.value;
    const centerX = this.progressCircle.cx.baseVal.value;
    const centerY = this.progressCircle.cy.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    
    // Calculate number of segments based on circumference for smooth waves
    const numSegments = Math.max(180, Math.ceil(circumference / 2));
    const points: string[] = [];
    let lastX = centerX;
    let lastY = centerY - radius;

    const endAngle = progress * 2 * Math.PI;
    const isIndeterminate = this.hasAttribute('is-indeterminate');

    for (let i = 0; i <= numSegments; i++) {
      const angle = (i * 2 * Math.PI / numSegments) - Math.PI / 2;
      
      if (!isIndeterminate && angle > endAngle) break;

      // Dynamic wave amplitude based on progress
      const waveAmplitude = isIndeterminate ? 3 : 3 * Math.sin(Math.PI * progress);
      const wave = waveAmplitude * Math.sin(angle * 10 + phase);
      
      // Add some randomness for organic feel
      const randomOffset = isIndeterminate ? Math.sin(phase * 2) * 0.5 : 0;
      const r = radius + wave + randomOffset;

      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);

      points.push(i === 0 ? `M ${x.toFixed(2)} ${y.toFixed(2)}` : `L ${x.toFixed(2)} ${y.toFixed(2)}`);
      lastX = x;
      lastY = y;
    }

    return { path: points.join(' '), lastX, lastY };
  }

  private startWaveAnimation() {
    if (this.animationFrame) return;
    
    const animate = (timestamp: number) => {
      if (!this.progressCircle || !this.thumb) return;

      const isIndeterminate = this.hasAttribute('is-indeterminate');
      this.waveOffset += 0.05;
      
      if (isIndeterminate) {
        // Indeterminate animation
        const phase = (timestamp / 1000) % (2 * Math.PI);
        const { path, lastX, lastY } = this.generateWavyPathData(1, phase);
        
        // Update progress circle
        const circumference = 2 * Math.PI * this.progressCircle.r.baseVal.value;
        const visiblePortion = 0.25;
        const offset = circumference * (1 - visiblePortion - (phase / (2 * Math.PI)) * visiblePortion);
        
        this.progressCircle.style.strokeDasharray = `${circumference}`;
        this.progressCircle.style.strokeDashoffset = `${offset}`;
        
        // Update thumb position
        this.thumb.style.transform = `translate(${lastX}px, ${lastY}px)`;
      } else {
        // Determinate animation
        const progress = parseFloat(this.getAttribute('progress') || '0') / 100;
        const { path, lastX, lastY } = this.generateWavyPathData(progress, this.waveOffset);
        
        // Update progress circle
        const circumference = 2 * Math.PI * this.progressCircle.r.baseVal.value;
        this.progressCircle.style.strokeDasharray = `${circumference}`;
        this.progressCircle.style.strokeDashoffset = `${circumference * (1 - progress)}`;
        
        // Update thumb position with smooth transition
        this.thumb.style.transform = `translate(${lastX}px, ${lastY}px)`;
      }
      
      this.animationFrame = requestAnimationFrame(animate);
    };
    
    this.animationFrame = requestAnimationFrame(animate);
  }

  private stopWaveAnimation() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }
}

customElements.define('m3-wavy-progress', M3WavyProgress); 