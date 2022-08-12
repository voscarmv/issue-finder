import axios from 'axios'
//import dotenv from 'dotenv';

//dotenv.config();

// Api calls to github https://docs.github.com/en/rest/issues/issues

// fetchIssues('org/repo', 'filters');
// sample url to search repo issue by label - https://api.github.com/repos/chatwoot/chatwoot/issues?labels=good%20first%20issue
const API = axios.create(
    {
        baseURL: 'https://api.github.com',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${process.env.REACT_APP_API_KEY}`
        }
    }
);

export const fetchRepos = async () => await axios.get('https://raw.githubusercontent.com/voscarmv/ycombinator_githubs/main/06_repos.json');
//const fetchLabels = async (org, repo) => await API.get(`/repos/${org}/${repo}/labels`);
export const rawLabels = async (repos) => {
    // const repos = await fetchRepos();
    console.log(`from inside rawLabels ${JSON.stringify(repos)}`);
    const raw = [];
    // repos.data.forEach(
    //     async (item) => {
    //         const labels = await fetchLabels(item.org, item.repo);
    //         labels.data.forEach(
    //             (label) => {
    //                 raw.push(label.name);
    //             }
    //         );
    //     }
    // );
    return raw;
};
export const fetchIssues = async (org, repo, label) => await API.get(`/repos/${org}/${repo}/issues?labels=${label}`);
