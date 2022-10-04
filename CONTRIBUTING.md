## Getting Started

To get a local copy up and running follow these simple example steps.


## Pre-requisites
- Text Editor | Git and Github set up
  
## How do I submit a Pull Request (PR)?

Contributing follows this workflow:

1. Fork [this project repository](https://github.com/voscarmv/issue-finder).
2. Clone the forked repository to your computer.
   - `git clone https://github.com/<your-github-username>/issue-finder.git`
   - `cd issue-finder`
3. Create and switch into a new branch.
   -  `git checkout -b my-branch-name`
   -  Open the project in your favorite code editor `code .` for VS Code.
4. Update or add to the existing code from the issue assigned to you and commit the changes.
5. Make a PR to merge your fork with this repo.
## Usage

To get a local copy running on your browser follow this workflow:

- Run npm install to load necessary files from package.json
- Run `touch .env`
- > Generate your GitHub token here https://github.com/settings/tokens
- Run `echo REACT_APP_API_KEY=ghp_my_github_token > .env`
- Then in your terminal run `npm start` and view app in your browser 

## Running code checks

Apply Linter checks with the following instructions

- Run `npm run lint` to view errors. 
- Run `npm run lint:fix` to fix multiple errors.

## Contributing to Issue Finder

- We welcome all meaningful contributions to Issue Finder. If you see any areas of improvement or wish to contribute to existing issues, please connect with our maintainers directly on the issue, and we will be pleased to help you as much as possible.
