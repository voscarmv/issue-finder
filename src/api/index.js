import axios from 'axios'
// Api calls to github https://docs.github.com/en/rest/issues/issues

// fetchIssues('org/repo', 'filters');
// sample url to search repo issue by label - https://api.github.com/repos/chatwoot/chatwoot/issues?labels=good%20first%20issue
const API = axios.create({baseUrl: 'https://api.github.com'})

export const fetchIssues = (org,repo,label) => API.get(`/repos/${org}/${repo}/issues?labels=${label}`)