// user gh token
let private_tkn = 'ENTER A VALID TOKEN';

// y_comb_repos raw data
const baseURL = 'https://raw.githubusercontent.com/voscarmv/ycombinator_githubs/main/06_repos.json';

// fetch Y combinator main json file
const fetchRepos = async () => {
  const conn = await fetch(baseURL);
  const res = await conn.json().then((data) => data);
  return res;
};

// get registered labels from a single repo
const fetchLabels = async (org, repo) => {
  const conn = await fetch(`https://api.github.com/repos/${org}/${repo}/labels`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token ${private_tkn}`
    }
  });
  const res = await conn.json().then((data) => data);
  return res;
};

let raw_labels = []; // 1766 at the time of writing this chunk of code
let norm_labels = []; // 184 after removing repeated label names

// loop thru each item in y_comb list and fetch labels for each item
fetchRepos().then((res) =>
  res.forEach((item) =>
    fetchLabels(item.org, item.repo).then((res) =>
      res.forEach((item) => raw_labels.push(item.name))
    )
  )
);

// await for fetching to conclude and remove repeated values from raw_labels
setTimeout(() => {
  norm_labels = [...new Set(raw_labels)];
}, 2500);

// verify normalize label names values
setTimeout(() => {
  console.info(norm_labels);
}, 3000);
