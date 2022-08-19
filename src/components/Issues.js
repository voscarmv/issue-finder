import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { epmtyIssuesList, getIssues } from '../actions';

const Issues = () => {
  const selectedIssue = useSelector((state) => state.selectIssuesStore);
  const reposlist = useSelector((state) => state.reposStore.reposlist);
  const { loading, issuesList } = useSelector((state) => state.issuesStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(epmtyIssuesList());
    if (reposlist) {
      for (let i = 0; i < reposlist.length; i++) {
        for (let j = 0; j < selectedIssue.length; j++) {
          dispatch(getIssues(reposlist[i].org, reposlist[i].repo, selectedIssue[j]));
        }
      }
    }
  }, [selectedIssue.length]);
  const issueListFlat = selectedIssue.length ? issuesList?.flat() : null;
  if (!loading && !issuesList.length && selectedIssue.length) {
    return <span className="m-2 h2">No Issue Found</span>;
  } else if (loading) {
    return (
      <div className="spinner-border m-5" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else if (!loading && !selectedIssue.length) {
    return <span className="m-2 h2">No Label Selected</span>;
  }
  return (
    <div className="issue-container">
      <h1 className="filter-title">Issues</h1>
      <ul className="grid xxl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 p-2">
        {issueListFlat.map((issue, i) => (
          <li key={i}>
            <a
              href={issue.html_url}
              target="_blank"
              className="card-link"
              rel="noopener noreferrer">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title align-middle">{issue?.title}</h5>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Issues;
