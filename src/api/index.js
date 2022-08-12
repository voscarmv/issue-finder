import axios from 'axios'
// import labels from '../reducers/labels';
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
            // Before running npm start, run
            // export REACT_APP_API_KEY=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
        }
    }
);

export const fetchRepos = async () => await axios.get('https://raw.githubusercontent.com/voscarmv/ycombinator_githubs/main/06_repos.json');
const fetchLabels = async (org, repo) => await API.get(`/repos/${org}/${repo}/labels`);
export const rawLabels = async (repos) => {
    // const repos = await fetchRepos();
    console.log(`from inside rawLabelssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss ${JSON.stringify(repos)}`);
    let rawdata = [];
    for(let i = 0; i < repos.length; i ++){
        const item = repos[i];
        const labels = await fetchLabels(item.org, item.repo);
        for(let j = 0; j < labels.data.length; j++){
            const label = labels.data[j];
            rawdata.push(label.name);
        }
        console.log(`loading ${i*100/repos.length} %`);
    }
    return rawdata;
};
export const fetchIssues = async (org, repo, label) => await API.get(`/repos/${org}/${repo}/issues?labels=${label}`);
