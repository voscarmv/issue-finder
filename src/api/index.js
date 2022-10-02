import axios from 'axios';

// Api calls to github https://docs.github.com/en/rest/issues/issues

// fetchIssues('org/repo', 'filters');
// sample url to search repo issue by label - https://api.github.com/repos/chatwoot/chatwoot/issues?labels=good%20first%20issue
const API = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `token ${'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'}`
    // Before running npm start, run ${process.env.REACT_APP_API_KEY}`
    // export REACT_APP_API_KEY=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
    // Except with your own key generated here https://github.com/settings/tokens
  }
});

export const fetchRepos = async () =>
  await axios.get(
    'https://raw.githubusercontent.com/voscarmv/ycombinator_githubs/main/06_repos.json'
  );
export const fetchLabels = async (org, repo) => await API.get(`/repos/${org}/${repo}/labels`);

export const fetchIssues = async (org, repo, label) =>
  await API.get(`/repos/${org}/${repo}/issues?labels=${label}`);
