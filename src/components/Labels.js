import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToSelectedLabels, removeFromSelectLabels } from '../actions';

const Labels = () => {
  // sample using a bunch of labels (later we can use state selectors)
  // const labels_sample = ['20%-project', 'accessibility', 'backend', 'bug', 'chatwoot-cloud', 'chore', 'content', 'dependencies', 'devops', 'docs-done', 'docs-needed', 'documentation', 'enhancement', 'Enterprise', 'Epic', 'feature', 'frontend', 'Good first issue', 'hacktoberfest', 'hotfix', 'in-QA', 'infrastructure', 'investigation', 'javascript', 'need-design', 'need-discussion', 'need-more-info', 'need-spec', 'on-hold', 'open-for-prs', 'duplicate', 'help wanted', 'invalid', 'question', 'wontfix', '⛵ next-release', 'artilery-pro', 'debt', 'discussion', 'docs', 'engine:http', 'engine:playwright', 'engine:socketio', 'engine:ws', 'engines'];
  const { labelslist } = useSelector((state) => state.labelsStore);
  const dispatch = useDispatch();

  function handleLabelSelection(label, e) {
    if (e) dispatch(addToSelectedLabels(label));
    else dispatch(removeFromSelectLabels(label));
  }
  return (
    <div className="label-container">
      <h1 className="filter-title">Labels</h1>
      <ul className="grid xxl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 p-2">
        {labelslist ? (
          labelslist.map((label, i) => (
            <li key={i}>
              <label>
                <input
                  type="checkbox"
                  onClick={(e) => handleLabelSelection(label, e.target.checked)}
                />
                <code>{label}</code>
              </label>
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
  );
};

export default Labels;
