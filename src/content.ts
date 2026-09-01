// src/content.ts
// Script principal da extensão: injeta dicas contextuais em elementos do GitHub e reativa os eventos em SPAs.

import { getSettings, storageApi } from './settings';
import { getTutorEntry } from './data/tutor-content';
import { GitTutorTooltip } from './tooltip';

const tooltip = new GitTutorTooltip();
const INTERACTIVE_SELECTOR = 'a, button, summary, [role="tab"], [role="button"], [role="link"], [data-testid], [aria-label], [title]';

async function getCurrentSettings() {
  const settings = await getSettings();
  return settings;
}

function getTooltipPosition(target: Element): { top: number; left: number } {
  const rect = target.getBoundingClientRect();
  const tooltipWidth = 340;
  const tooltipHeight = 160; // estimado
  const padding = 16;

  // Tentar posicionar abaixo do elemento
  let top = rect.bottom + 12;
  let left = rect.left + rect.width / 2 - tooltipWidth / 2;

  // Se passar do lado direito, ajusta
  if (left + tooltipWidth > window.innerWidth - padding) {
    left = window.innerWidth - tooltipWidth - padding;
  }

  // Se passar do lado esquerdo, ajusta
  if (left < padding) {
    left = padding;
  }

  // Se passar do topo, coloca abaixo com mais espaço
  if (top < padding) {
    top = rect.bottom + 20;
  }

  // Se passar do rodapé, tenta colocar acima
  if (top + tooltipHeight > window.innerHeight - padding) {
    top = rect.top - tooltipHeight - 12;
  }

  return { top, left };
}

function getKeyFromTarget(element: Element): string | undefined {
  const label = (element.getAttribute('aria-label') ?? '').toLowerCase();
  const title = (element.getAttribute('title') ?? '').toLowerCase();
  const text = (element.textContent ?? '').trim().toLowerCase();
  const href = (element.getAttribute('href') ?? '').toLowerCase();
  const dataTestId = (element.getAttribute('data-testid') ?? '').toLowerCase();
  const className = (element.className ?? '').toString().toLowerCase();

  const signal = [label, title, text, href, dataTestId, className].join(' ');

  if (signal.includes('fork') || href.includes('/fork')) return 'fork';
  if (signal.includes('watch') || href.includes('/watch')) return 'watch';
  if (signal.includes('star') || href.includes('/stargazers')) return 'star';
  if (signal.includes('issues') || href.includes('/issues')) return 'issuesTab';
  if (signal.includes('pull request') || signal.includes('pull requests') || href.includes('/pulls') || href.includes('/compare')) return 'pullRequestsTab';
  if (signal.includes('actions') || href.includes('/actions')) return 'actionsTab';
  if (signal.includes('projects') || href.includes('/projects')) return 'projectsTab';
  if (signal.includes('discussions') || href.includes('/discussions')) return 'discussionsTab';
  if (signal.includes('insights') || href.includes('/graphs') || href.includes('/pulse') || href.includes('/network/dependencies')) return 'insightsTab';
  if (signal.includes('settings') || href.includes('/settings')) return 'settingsTab';
  if (signal.includes('releases') || href.includes('/releases') || href.includes('/tags')) return 'releasesTab';
  if (signal.includes('branches') || href.includes('/branches')) return 'branchesTab';
  if (signal.includes('tags') || href.includes('/tags')) return 'tagsTab';
  if (signal.includes('commits') || href.includes('/commits') || href.includes('/commit/')) return 'commitsTab';
  if (signal.includes('readme') || href.includes('readme')) return 'readmeTab';
  if (signal.includes('packages') || href.includes('/packages')) return 'packageTab';
  if (signal.includes('about') || element.closest('aside')) return 'aboutPanel';
  if (signal.includes('topics') || element.classList.contains('topic-tag')) return 'topicsPanel';
  if (signal.includes('security') || href.includes('/security') || href.includes('/network/alerts')) return 'securityPanel';
  if (signal.includes('license') || href.includes('/blob') && href.includes('license')) return 'licensePanel';
  if (signal.includes('wiki') || href.includes('/wiki')) return 'wikiTab';
  if (signal.includes('deployment') || href.includes('/deployments')) return 'deploymentsTab';
  if (signal.includes('overview') || href === '') return 'overviewTab';
  if (signal.includes('repositories') || (signal.includes('repo') && text.length < 20)) return 'repositoriesPanel';

  if (element.matches('table, [data-testid="tree-view"], .react-directory-row, [role="tree"], .Box-row--drag-hide, .react-directory-truncate')
    || element.closest('table')
    || element.closest('[role="tree"]')) {
    return 'fileTable';
  }

  if (signal.includes('code') && (element.matches('a[href*="/tree/" i], a[href*="/blob/" i], [data-testid="code-tab"]') || href.includes('/tree/') || href.includes('/blob/'))) {
    return 'codeTab';
  }

  return undefined;
}

function findGitTutorTarget(target: EventTarget | null): Element | null {
  const node = target as Element | null;
  if (!node) return null;

  return node.closest?.(INTERACTIVE_SELECTOR) ?? null;
}

function handleMouseEnter(event: MouseEvent): void {
  const target = findGitTutorTarget(event.target);
  if (!target) return;

  const key = target.getAttribute('data-git-tutor-key') ?? getKeyFromTarget(target);
  if (!key) return;

  void getCurrentSettings().then((settings) => {
    if (!settings.enabled) {
      tooltip.hide();
      return;
    }

    const entry = getTutorEntry(key, settings.language);
    if (!entry) {
      console.debug('[Git Tutor] No entry found for key:', key);
      return;
    }

    const position = getTooltipPosition(target);
    tooltip.show(entry.title, entry.category, entry.description, position, entry.tip);
    console.debug('[Git Tutor] Tooltip shown for:', key);
  });
}

function handleMouseLeave(event: MouseEvent): void {
  const nextTarget = findGitTutorTarget(event.relatedTarget);
  const currentTarget = findGitTutorTarget(event.target);

  if (nextTarget && currentTarget && nextTarget === currentTarget) {
    return;
  }

  tooltip.hide();
}

function attachTooltipHandlers(root: ParentNode): void {
  const elements = root.querySelectorAll(INTERACTIVE_SELECTOR);
  let count = 0;

  elements.forEach((element) => {
    const htmlElement = element as HTMLElement;
    if (htmlElement.dataset.gitTutorKey) return;

    const key = getKeyFromTarget(element);
    if (!key) return;

    htmlElement.dataset.gitTutorKey = key;
    count++;
  });

  if (count > 0) {
    console.debug(`[Git Tutor] Attached handlers to ${count} elements`);
  }
}

function observeDomChanges(): void {
  const observer = new MutationObserver(() => {
    attachTooltipHandlers(document);
  });

  if (document.body) {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['href', 'aria-label', 'title', 'data-testid', 'class']
    });
  }
}

function init(): void {
  console.debug('[Git Tutor] Initializing extension...');

  void getCurrentSettings().then((settings) => {
    console.debug('[Git Tutor] Settings:', { enabled: settings.enabled, language: settings.language });
    attachTooltipHandlers(document);
  });

  document.addEventListener('mouseover', handleMouseEnter, { passive: true });
  document.addEventListener('mouseout', handleMouseLeave, { passive: true });
  observeDomChanges();
  window.addEventListener('scroll', () => tooltip.hide(), { passive: true });

  storageApi().onChanged.addListener((changes: Record<string, { newValue?: { enabled?: boolean; language?: string } }>) => {
    if (changes.gitTutorSettings) {
      console.debug('[Git Tutor] Storage changed:', changes.gitTutorSettings.newValue);
      tooltip.hide();
      const newSettings = changes.gitTutorSettings.newValue;
      if (newSettings?.enabled) {
        attachTooltipHandlers(document);
      }
    }
  });
}

if (document.readyState === 'loading') {
  console.debug('[Git Tutor] Document loading, waiting for DOMContentLoaded...');
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  console.debug('[Git Tutor] Document ready, initializing immediately...');
  init();
}

// Safety: ensure init runs even if DOMContentLoaded doesn't fire
setTimeout(() => {
  if (tooltip) {
    console.debug('[Git Tutor] Safety check: extension is loaded');
  }
}, 2000);
