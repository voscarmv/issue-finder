import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const redirectUri = process.env.REACT_APP_GITHUB_REDIRECT_URI;

const authorizationEndpoint = 'https://github.com/login/oauth/authorize';

const GitHubAuth = () => {
  useEffect(() => {
    const handleGitHubCallback = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      console.log(code);
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
    <Button className="bg-white text-black">
      <button onClick={getGitHubAccessToken}>Sign in with GitHub</button>
    </Button>
  );
};

export default GitHubAuth;
