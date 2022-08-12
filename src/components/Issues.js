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
    
  return (
    <div>
      <h1 className="filter-title">Issues</h1>
      <ul className="labelCont">
        {issuesList ? (
          issuesList.map((issue, i) => (
            <li key={i}>
                <code className='text-dark'>{JSON.stringify(issue)}</code>

            </li>
          ))
        ) : (
          <li>
            <label>
              <div class="spinner-border m-5" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </label>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Issues