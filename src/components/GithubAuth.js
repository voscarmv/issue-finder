import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGithubAuthKey } from '../actions';
import Button from 'react-bootstrap/Button';

const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const redirectUri = process.env.REACT_APP_GITHUB_REDIRECT_URI;

const authorizationEndpoint = 'https://github.com/login/oauth/authorize';

// eslint-disable-next-line react/prop-types
const GitHubAuth = ({ darkMode }) => {
  const { loading } = useSelector((state) => state.githubauthStore);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleGitHubCallback = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      if (code) dispatch(getGithubAuthKey(code));
    };

    // Check if the URL contains the GitHub callback parameters
    if (window.location.search.includes('code=')) {
      handleGitHubCallback();
    }
  }, []);

  const getGitHubAccessToken = () => {
    const state = Math.random().toString(36).substring(7);

    // Store the state in sessionStorage for later verification
    sessionStorage.setItem('githubOAuthState', state);

    const authorizationUrl = `${authorizationEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user&state=${state}`;

    // Redirect the user to the GitHub authorization URL
    window.location.href = authorizationUrl;
  };

  return (
    <Button
      onClick={getGitHubAccessToken}
      variant={`${darkMode ? 'dark' : 'light'} button button-green w-full h-15`}
      disabled={loading}>
      {loading ? 'Loading...' : 'Sign in with GitHub'}
    </Button>
  );
};

export default GitHubAuth;
