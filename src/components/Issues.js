import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { epmtyIssuesList, getIssues } from '../actions';

const Issues = () => {
  const selectedLabels = useSelector((state) => state.selectedLabelsStore);
  const reposlist = useSelector((state) => state.reposStore.reposlist);
  const { loading, issuesList, language } = useSelector((state) => state.issuesStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(epmtyIssuesList());
    if (reposlist) {
      for (let i = 0; i < reposlist.length; i++) {
        for (let j = 0; j < selectedLabels.length; j++) {
          if (language == 'All')
            dispatch(getIssues(reposlist[i].org, reposlist[i].repo, selectedLabels[j]));
          else if (language.toLowerCase() === reposlist[i].language.trim().toLowerCase())
            dispatch(getIssues(reposlist[i].org, reposlist[i].repo, selectedLabels[j]));
        }
      }
    }
  }, [selectedLabels]);
  const issueListFlat = selectedLabels.length ? issuesList?.flat() : null;
  console.log(issueListFlat);
  return (
    <div className="issue-container h-100 d-flex flex-column">
      <h1 className="filter-title">Issues</h1>

      <div className="overflow-y-scroll">
        <ul className="grid xxl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 p-2">
          {loading ? (
            <div className="spinner-border m-5" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : !issuesList?.length && selectedLabels?.length ? (
            <span className="m-2 h2">No Issue Found</span>
          ) : !selectedLabels.length ? (
            <span className="m-2 h2">No Label Selected</span>
          ) : (
            issueListFlat.map((issue, i) => {
              return (
                <li key={i}>
                  <a
                    href={issue.html_url}
                    target="_blank"
                    className="card-link no-underline"
                    rel="noopener noreferrer">
                    <div className="card h-100 py-2 hover:bg-gray-100 transition-all">
                      {issue.assignees.length > 0 ? (
                        <span className="border rounded-lg px-2 py-py text-xs absolute right-2 top-2 text-red-400 border-red-400">
                          Assigned
                        </span>
                      ) : (
                        <span className="border rounded-lg px-2 py-py text-xs absolute right-2 top-2 text-green-500 border-green-500">
                          Unassigned
                        </span>
                      )}

                      <div className="card-body text-center flex flex-col justify-center">
                        <span className="uppercase text-sm space-x-2 font-semibold text-pink-400">
                          {issue.html_url.split('/').length > 4 ? issue.html_url.split('/')[4] : ''}
                        </span>
                        <h5 className="card-title">{issue?.title}</h5>
                        <div className="flex flex-wrap text-xs justify-center items-start">
                          {issue.labels.map((label, id) => (
                            <span key={id} className="border rounded-lg px-2 py-py ml-1 mb-1">
                              {label.name}
                            </span>
                          ))}
                        </div>
                        <div className="text-xs mt-2 absolute bottom-2 self-center">
                          Created at: {new Date(issue.created_at).toDateString().substr(4)}
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default Issues;
