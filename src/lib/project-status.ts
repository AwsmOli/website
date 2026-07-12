export type ProjectStatus =
  | 'idea'
  | 'concept'
  | 'implementation'
  | 'alpha'
  | 'beta'
  | 'released'
  | 'discontinued';

export function statusBadgeVariant(status: ProjectStatus): 'default' | 'accent' {
  return status === 'released' ? 'accent' : 'default';
}

// Most finished/polished first, discontinued last regardless of how far it got.
export const STATUS_ORDER: ProjectStatus[] = [
  'released',
  'beta',
  'alpha',
  'implementation',
  'concept',
  'idea',
  'discontinued',
];

export const STATUS_GROUP_LABELS: Record<ProjectStatus, string> = {
  released: 'Released',
  beta: 'Beta',
  alpha: 'Alpha',
  implementation: 'In Development',
  concept: 'Concepts',
  idea: 'Ideas',
  discontinued: 'Discontinued',
};

export function statusRank(status: ProjectStatus): number {
  const index = STATUS_ORDER.indexOf(status);
  return index === -1 ? STATUS_ORDER.length : index;
}
