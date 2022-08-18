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
  return (
    <div className="issue-container">
      <h1 className="filter-title">Issues</h1>
      <ul className="labelCont py-2">
        {issueListFlat ? (
          issueListFlat.map((issue, i) => (
            <li key={i}>
              <a
                href={issue.html_url}
                target="_blank"
                className="card-link"
                rel="noopener noreferrer">
                <div className="card" style={{ width: '18rem' }}>
                  <div className="card-body">
                    <h5 className="card-title">{issue?.title}</h5>
                  </div>
                </div>
              </a>
            </li>
          ))
        ) : loading ? (
          <li>
            <label>
              <div className="spinner-border m-5" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </label>
          </li>
        ) : (
          <>
            <span className="m-2 h2">No Label Selected</span>
          </>
        )}
      </ul>
    </div>
  );
};

export default Issues;
