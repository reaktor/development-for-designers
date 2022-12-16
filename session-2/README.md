We'll get our hands dirty with Git and Web Development and whatnot.

## Goals

- Learn the basics of Git version control system and Github service
- Get the necessary tools on your own machine, a Github account and some hands-on experience
- Get your first Pull Request approved and merged!

## Preparations

There are some things for you to install on your own machine and you can install them before the session if you have a while:

- Git: Open Terminal and type "git". Follow instructions.
- [Node.js](https://nodejs.org/en/download/) which will be needed for running things on your own machine
- [Visual Studio Code](https://code.visualstudio.com/download) is a good code editor for most web development tasks

Also,

- Create a Github account and report your Github username on the Slack channel in this thread
  - You'll get access to our repositories
- Configure your git to always use rebasing when pulling by running this: `git config --global pull.rebase true`
- Generate a SSH key on your machine and copy the public key to Github settings
  - Run `ssh-keygen` on the command-line and just press enter to all the questions
  - See your public key like this: `cat ~/.ssh/id_rsa.pub`
  - Copy-paste the public key into Github settings (Settings -> SSH and GPG keys -> New SSH Key)

You can also already clone our repository https://github.com/reaktor/development-for-designers as below

- Open terminal
- `cd` into your "projects directory", or `mkdir` a directory named "reaktor" or similar and then `cd` into it
- Clone the repository: `git clone git@github.com:reaktor/development-for-designers.git`
- Go to the directory: `cd development-for-designers` and you're good to go with all the rest of the Git commands

## Session topics

- Git basics [presentation](https://docs.google.com/presentation/d/1BfH2LTw_zXiVboBZ-E-jcVeo-_pHLi_7IRveWSmoKaw/edit) by Jouni
- Git basics hands-on assignment 1
  - Create own branch
  - Add your own notes to notes.txt using your Editor
  - Commit your changes with a descriptive commit message
  - Push the branch to the remote repository on Github
  - Make a Pull Request for the branch
  - After the Pull Request has been approved and merged, you can switch to main again and pull the latest changes and observe them in your Editor
- Assignment 2
  - Write instructions for this whole procedure into a new text file
  - Create a pull request for that as well, as above!

## Notes

Discussion at the start of the session

- The Repository exists both on Github "remote" as well as locally. You usually start by cloning a repository to your own machine from Github
- Conflict occurs when multiple people have made changes to the same place in the same file. Conflicts must be manually resolved. Changes that are not touching the same place in the same file are handled automatically by Git.
- Dropbox is partly similar, as it syncs files between your machine and a remote server. The main difference is that with Git, the sync from your local repository to the remote one is not automatic - you'll need to commit and push explicitly.
- Runtime environments have names such as Dev, Testing, Staging, QA, Production. It depends on the client, what each of these environments are used for. Often the Staging or QA environment is the closest to production, with production-like data. Sometimes a new Dev environment is even created for each Pull Request automatically so that each change can be tested in separation. Generally, test environments are useful to avoid the "works on my machine" problem as well as being able to share results for demonstration and verification purposes

Jouni's Git presentation and related discussion

- What are the stages in making your first Pull Request?
 - Simple case, when operating without branches: `add` your changes to the staging area, `commit` them with a suitable message, `pull --rebase` changes from other devs, `push` to the remote repo
 - At very start, you'll need to `clone` the repository on your own machine of course
 - If the codebase is the Recipe, then a Commit is a "change suggestion" to the recipe. You `add` your suggested changes to the suggestion (the staging area) and after you've selected what changes will be included you `commit`. After that you have a new Commit in your local repository
 - The staging area can also be thought of as a Shopping Cart for the changes you want to include in your commit
 - You can add your changes to the staging area 
  - all at once by `git add .`
  - per file `git add file.css`
  - in small chunks interactively `git add -p`
 - You can discard local changes using `git checkout .` or more selectively per file `git checkout file.css` or in small chunks using `git checkout -p`
- To create new branch, you use `git checkout -b new-branch-name`


