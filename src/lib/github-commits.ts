export interface Commit {
  sha: string;
  message: string;
  date: Date;
  url: string;
}

const API = 'https://api.github.com';

// Fetched once per repo per build, shared by the homepage and the project page.
const cache = new Map<string, Promise<Commit[]>>();

// Housekeeping that says nothing about the project: TODO.md edits, merges, one-word "fix".
function isNoise(message: string): boolean {
  return (
    /^todo:/i.test(message) ||
    /\bTODO\.md\b/i.test(message) ||
    /^merge\b/i.test(message) ||
    !/\s/.test(message.trim())
  );
}

function repoPath(githubUrl: string): string | null {
  const match = githubUrl.match(/github\.com\/([^/]+\/[^/#?]+?)(?:\.git)?\/?$/);
  return match ? match[1] : null;
}

async function fetchCommits(repo: string): Promise<Commit[]> {
  // Optional: unauthenticated requests are limited to 60/hour per IP, which shared build machines can exhaust.
  const token = process.env.GITHUB_TOKEN;
  try {
    const response = await fetch(`${API}/repos/${repo}/commits?per_page=30`, {
      headers: {
        Accept: 'application/vnd.github+json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const data: any[] = await response.json();
    return data
      .map((entry) => ({
        sha: entry.sha as string,
        message: (entry.commit.message as string).split('\n')[0],
        date: new Date(entry.commit.author.date),
        url: entry.html_url as string,
      }))
      .filter((commit) => !isNoise(commit.message));
  } catch (error) {
    // The site still builds without the commit lists rather than failing the deploy.
    console.warn(`[github-commits] ${repo}: ${error instanceof Error ? error.message : error}`);
    return [];
  }
}

export async function getRecentCommits(githubUrl: string, limit = 5): Promise<Commit[]> {
  const repo = repoPath(githubUrl);
  if (!repo) return [];
  const key = repo.toLowerCase();
  if (!cache.has(key)) cache.set(key, fetchCommits(repo));
  return (await cache.get(key)!).slice(0, limit);
}
