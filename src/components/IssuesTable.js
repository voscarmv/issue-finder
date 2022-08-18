import React from 'react';
import propTypes from 'prop-types';

const IssuesTable = ({ issues }) => {
  if (!issues) {
    return null;
  }
  if (!issues[0]) {
    return null;
  }
  if (!issues[0].url) {
    return null;
  }
  return (
    <ul>
      {issues.map((issue, id) => (
        <li key={id}>
          <a href={`"${issue.url}"`}>{issue.url}</a>
        </li>
      ))}
    </ul>
  );
};

IssuesTable.propTypes = {
  issues: propTypes.arrayOf(propTypes.any).isRequired
};

export default IssuesTable;
