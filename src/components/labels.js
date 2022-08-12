import React from "react";
import { useSelector } from "react-redux";

const Labels = () => {
  // sample using a bunch of labels (later we can use state selectors)
  // const labels_sample = ['20%-project', 'accessibility', 'backend', 'bug', 'chatwoot-cloud', 'chore', 'content', 'dependencies', 'devops', 'docs-done', 'docs-needed', 'documentation', 'enhancement', 'Enterprise', 'Epic', 'feature', 'frontend', 'Good first issue', 'hacktoberfest', 'hotfix', 'in-QA', 'infrastructure', 'investigation', 'javascript', 'need-design', 'need-discussion', 'need-more-info', 'need-spec', 'on-hold', 'open-for-prs', 'duplicate', 'help wanted', 'invalid', 'question', 'wontfix', '⛵ next-release', 'artilery-pro', 'debt', 'discussion', 'docs', 'engine:http', 'engine:playwright', 'engine:socketio', 'engine:ws', 'engines'];
  const { labelslist } = useSelector((state) => state.labelsStore);

  return (
    <div>
      <h1 className="filter-title">Filter results</h1>
      <ul className="labelCont">
        {labelslist ? (labelslist.map((label) => (
          <li>
            <label>
              <input
                type="checkbox"
                onClick={(e) => console.log(label, e.target.checked)}
              />
              <code>{label}</code>
            </label>
          </li>
        ))):<li>
        <label>
        <div class="spinner-border m-5" role="status">
  <span class="sr-only">Loading...</span>
</div>
        </label>
      </li> }
      </ul>
    </div>
  );
};

export default Labels;
