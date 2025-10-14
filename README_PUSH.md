This repository isn't yet initialized with Git on this machine and the Git CLI was not found in the environment where this script ran.

To push this Spring Boot + React project to GitHub, follow these steps locally on your machine:

1. Install Git for Windows: https://git-scm.com/download/win and ensure "Git from the command line" is selected so `git` is on PATH.
2. Open PowerShell and run the included helper script `init-repo.ps1` from the repository root:

   .\init-repo.ps1

   The script will:
   - initialize a local git repository
   - create an initial commit including project files (honoring .gitignore)
   - prompt you for the GitHub repository URL (HTTPS or SSH)
   - add it as `origin` and push the current branch (creates `main` if needed)

3. If you prefer to run commands manually, here are the commands the script runs (PowerShell):

   git init
   git checkout -b main
   git add -A
   git commit -m "chore: initial commit"
   git remote add origin <YOUR_GIT_REMOTE_URL>
   git push -u origin main

If you want me to add the remote for you, provide the repository URL (HTTPS or SSH) and confirm you want me to run the push. Note: I can't install Git for you — you'll need to install it locally.
