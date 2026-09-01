// src/tooltip.ts
// Componente visual do balão de ajuda.
// O Shadow DOM isola o CSS e evita conflitos com os estilos do GitHub.

export type TooltipPosition = {
  top: number;
  left: number;
};

export class GitTutorTooltip {
  private host: HTMLDivElement;
  private shadow: ShadowRoot;
  private container: HTMLDivElement;

  constructor() {
    this.host = document.createElement('div');
    this.host.style.position = 'fixed';
    this.host.style.pointerEvents = 'none';
    this.host.style.zIndex = '2147483647';
    this.host.style.opacity = '0';
    this.host.style.transition = 'opacity 0.12s ease';
    this.host.style.filter = 'drop-shadow(0 12px 32px rgba(0, 0, 0, 0.38))';

    this.shadow = this.host.attachShadow({ mode: 'open' });
    this.container = document.createElement('div');
    this.container.className = 'git-tutor-tooltip';

    this.shadow.appendChild(this.container);
    this.injectStyles();
    document.body.appendChild(this.host);
  }

  private injectStyles(): void {
    const style = document.createElement('style');
    style.textContent = `
      :host {
        --bg-top: #1a1626;
        --bg-bottom: #0e0d16;
        --line: rgba(147, 111, 255, 0.8);
        --gold: #f4d37a;
        --text: #f5f3ff;
        --muted: #d2c8f7;
        --accent: #8b5cf6;
        --badge: rgba(139, 92, 246, 0.18);
      }

      * { box-sizing: border-box; }

      .git-tutor-tooltip {
        position: relative;
        width: max-content;
        max-width: 340px;
        min-width: 220px;
        padding: 12px 14px 10px;
        border-radius: 16px;
        border: 1px solid var(--line);
        background: linear-gradient(180deg, var(--bg-top), var(--bg-bottom));
        box-shadow: 0 18px 30px rgba(0, 0, 0, 0.32), inset 0 1px 0 rgba(255,255,255,0.06);
        color: var(--text);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }

      .git-tutor-tooltip::before {
        content: '';
        position: absolute;
        left: 20px;
        top: calc(100% - 1px);
        width: 12px;
        height: 12px;
        background: linear-gradient(135deg, #1a1626, #0e0d16);
        border-right: 1px solid var(--line);
        border-bottom: 1px solid var(--line);
        transform: rotate(45deg);
      }

      .git-tutor-tooltip__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        margin-bottom: 8px;
      }

      .git-tutor-tooltip__title {
        margin: 0;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--gold);
      }

      .git-tutor-tooltip__badge {
        display: inline-flex;
        align-items: center;
        padding: 3px 7px;
        border-radius: 999px;
        background: var(--badge);
        border: 1px solid rgba(147, 111, 255, 0.7);
        color: var(--muted);
        font-size: 9px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .git-tutor-tooltip__text {
        margin: 0;
        font-size: 12px;
        line-height: 1.5;
        color: var(--text);
      }

      .git-tutor-tooltip__tip {
        margin-top: 10px;
        padding-top: 8px;
        border-top: 1px solid rgba(147, 111, 255, 0.35);
        font-size: 11px;
        line-height: 1.45;
        color: var(--muted);
      }
    `;

    this.shadow.appendChild(style);
  }

  public show(title: string, category: string, description: string, position: TooltipPosition, tip?: string): void {
    this.container.innerHTML = `
      <div class="git-tutor-tooltip__header">
        <div class="git-tutor-tooltip__title">${title}</div>
        <span class="git-tutor-tooltip__badge">${category}</span>
      </div>
      <p class="git-tutor-tooltip__text">${description}</p>
      ${tip ? `<div class="git-tutor-tooltip__tip">💡 ${tip}</div>` : ''}
    `;

    this.host.style.left = `${position.left}px`;
    this.host.style.top = `${position.top}px`;
    this.host.style.opacity = '1';
  }

  public hide(): void {
    this.host.style.opacity = '0';
  }

  public destroy(): void {
    this.host.remove();
  }
}
