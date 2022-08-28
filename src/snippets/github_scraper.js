import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
  try {
    const gh = await fetch(process.argv[2], {
      headers: {
        Authorization: `token ${process.env.secret}`
      }
    });
    const ghJson = await gh.json();
    if (ghJson.message !== 'Not Found') {
      ghJson.forEach((repo) => {
        if (repo.language === 'JavaScript' || repo.language === 'Ruby') {
          console.info(
            `${repo.open_issues_count}, https://github.com/${repo.full_name}, ${repo.language}`
          );
        }
      });
    }
  } catch (e) {}
})();
