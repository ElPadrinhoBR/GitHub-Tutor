// src/selectors.ts
// Mapeia seletores estáveis da interface do GitHub para apoiar uma extensão de tutorial mais robusta.
// Prioriza atributos como aria-label, href, data-testid e textos que tendem a permanecer consistentes.

export type GitHubSelectorGroup = {
  fork?: string;
  watch?: string;
  star?: string;
  codeTab?: string;
  issuesTab?: string;
  pullRequestsTab?: string;
  actionsTab?: string;
  projectsTab?: string;
  discussionsTab?: string;
  insightsTab?: string;
  settingsTab?: string;
  releasesTab?: string;
  branchesTab?: string;
  tagsTab?: string;
  commitsTab?: string;
  readmeTab?: string;
  packageTab?: string;
  fileTable?: string;
  aboutPanel?: string;
  topicsPanel?: string;
  securityPanel?: string;
};

export const GITHUB_SELECTORS: GitHubSelectorGroup = {
  fork: '[aria-label*="Fork" i], [data-testid="fork-button"], a[href*="/fork" i], button[aria-label*="Fork" i], summary[aria-label*="Fork" i]',
  watch: '[aria-label*="Watch" i], [data-testid="watch-button"], button[aria-label*="Watch" i], a[href*="/watch" i]',
  star: '[aria-label*="Star" i], [data-testid="star-button"], button[aria-label*="Star" i], a[href*="/stargazers" i]',
  codeTab: 'a[href*="/tree/" i], a[data-testid="code-tab"], a[aria-label*="Code" i], a[href*="/blob/" i]',
  issuesTab: 'a[href*="/issues" i], a[data-testid="issues-tab"], a[aria-label*="Issues" i], a[href*="/issues/new" i]',
  pullRequestsTab: 'a[href*="/pulls" i], a[data-testid="pull-requests-tab"], a[aria-label*="Pull requests" i], a[href*="/compare" i]',
  actionsTab: 'a[href*="/actions" i], a[aria-label*="Actions" i], a[href*="/actions/workflows" i]',
  projectsTab: 'a[href*="/projects" i], a[aria-label*="Projects" i]',
  discussionsTab: 'a[href*="/discussions" i], a[aria-label*="Discussions" i], a[href*="/community" i]',
  insightsTab: 'a[href*="/graphs/contributors" i], a[href*="/pulse" i], a[aria-label*="Insights" i], a[href*="/network/dependencies" i]',
  settingsTab: 'a[href*="/settings" i], a[aria-label*="Settings" i], a[href*="/access" i]',
  releasesTab: 'a[href*="/releases" i], a[aria-label*="Releases" i], a[href*="/tags" i]',
  branchesTab: 'a[href*="/branches" i], a[aria-label*="Branches" i], button[aria-label*="Branches" i]',
  tagsTab: 'a[href*="/tags" i], a[aria-label*="Tags" i], button[aria-label*="Tags" i]',
  commitsTab: 'a[href*="/commits" i], a[aria-label*="Commits" i], a[href*="/commit/" i]',
  readmeTab: 'a[href*="/blob/" i][href*="README" i], a[href*="/readme" i], [aria-label*="README" i]',
  packageTab: 'a[href*="/packages" i], a[aria-label*="Packages" i]',
  fileTable: 'table[aria-label*="Files" i], [data-testid="tree-view"], .react-directory-row, .Box-row--drag-hide, [role="tree"]',
  aboutPanel: 'aside [aria-label*="About" i], aside h2, [data-testid="about-panel"], .BorderGrid-cell:has(h2)',
  topicsPanel: 'a[href*="/topics/" i], [aria-label*="Topics" i], .topic-tag',
  securityPanel: 'a[href*="/security" i], [aria-label*="Security" i], a[href*="/network/alerts" i]'
};

export const ALL_GITHUB_SELECTOR_KEYS = Object.values(GITHUB_SELECTORS).filter(Boolean) as string[];

export function getSelectorList(): string[] {
  return ALL_GITHUB_SELECTOR_KEYS;
}
