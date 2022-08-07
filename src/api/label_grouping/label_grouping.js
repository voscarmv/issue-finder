let private_tkn = 'ENTER A VALID TOKEN';

// get registered labels from a single repo
const fetchLabels = async (org, repo) => {
  const conn = await fetch(`https://api.github.com/repos/${org}/${repo}/labels`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `token ${private_tkn}`
    }
  });
  const res = await conn.json().then((data) => data)
  return res;
}

// y_comb_repos raw data endpoint
const baseURL = 'https://raw.githubusercontent.com/voscarmv/ycombinator_githubs/main/06_repos.json';

// Retrieve repos data
const fetchRepos = async () => {
  const conn = await fetch(baseURL);
  const res = await conn.json().then((data) => data)
  return res;
}

// loop thru each item in y_comb list and fetch labels for each item
fetchRepos().then((data) => data.forEach((item) => fetchLabels(item.org, item.repo))).then((res) => console.log(res));
