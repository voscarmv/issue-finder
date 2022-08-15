import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getIssues} from '../actions'

const Issues = () => {
    const selectedIssue = useSelector((state) => state.selectIssuesStore);
    const reposlist = useSelector((state) => state.reposStore.reposlist);
    const { issuesList } = useSelector((state) => state.issuesStore);
    const dispatch = useDispatch();
    useEffect(() => {
        if(reposlist && selectedIssue){
            for(let i = 0; i < reposlist.length; i++) {
                for(let j = 0; j < selectedIssue.length; j++){
                    dispatch(getIssues(reposlist[i].org,reposlist[i].repo,selectedIssue[j]))
                }
            }
        }
      },
      [selectedIssue]
    );
    const issueListFlat = issuesList?.flat()
  return (
    <div>
      <h1 className="filter-title">Issues</h1>
      <ul className="labelCont">
        {issueListFlat ? (
          issueListFlat.map((issue, i) => (
            <li key={i}>
              <a href={issue.html_url} target="_blank" className="card-link" rel="noopener noreferrer">
                <div className="card" style={{ width: '18rem' }}>
                  <div className="card-body">
                  <h5 className="card-title">{issue?.title}</h5>
                  </div>
                </div>
              </a>
            </li>
          ))
        ) : (
          <li>
            <label>
              <div className="spinner-border m-5" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </label>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Issues