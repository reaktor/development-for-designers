## Terms

Git
- github, gitlab
- Clone
- Commit
- Push, pull, 
- Rebase, merge
- Fork
- Squash
- Combining commits
- Master, main, branches
- Pull request "pullari" "PR"
- Protected branches

Terminal
IDE, Editor
Codebase, Repository "repo"
Build, Deploy
Compile (part of the build)
Cloud
Server
Web page
Local environment
Brew / Homebrew
Refactoring

## Contributing to a codebase

Developing web page on your laptop, and you want it to run on a "server". What do you need?

The code is put into a Repository. Where is the repository? It may be hosted on Github, Gitlab or similar. Their servers are most likely running in the "cloud", i.e. someone else's server room.

Gitlab and Github provide Git hosting. Git is a version control system and runs on your own machine as well as on the provider's servers. In addition to Git, these providers also provide a web interface for version control, and many additional services such as Pull Requests, CI services etc.

The codebase can be thought of as a "recipe" for building the software that you can deploy onto the "server".

Interpreted languages such as JavaScript and Python can be directly executed using an interpreter such as Node.js or Python. Compiled languages such as Java or C always need a compiler first before you can run the code. The compiled code is runnable either as-is or using a Runtime program such as the Java Virtual Machine.

The terminal (terminal.app on Mac, Command Prompt on Windows) is used for using command-line programs such as Git.

IDE (integrated development environment) is an advanced Editor which helps you with managing your software project, compiling, building etc. Some editors such as Visual Studio Code (vscode) are hard to categorize as they can be used as simple editors, but provide a lot of IDE-like features.

Git has for some time now been the de-facto standard for version control, while there exist a lot of alternatives.

We want to have a Local Environment for running the software on our own laptop "development machine". It's desirable to have the local environment resemble the production environment as closely as possible.

We also tend to have Test/Staging environments for running the software in a setup that's more similar to the production environment than a local development machine. For instance, when the production is an AWS cloud setup, the test environment will be similar. The data in different environments tend to differ though, even when the setup and software are identical - it's not always feasible to replicate all production data on test setups due to confidentiality and privacy concerns as well as sheer data size.

## Getting started

What shall we need to get started?

- IDE / Editor (Visual studio code)
- Terminal (terminal.app on MacOS)
- Git 
- Github account

How to contribute to a project?

- Get the code on your own machine "clone"
- Make some changes
- Get feedback on the changes locally, build and run the software locally
- Create a branch (locally on your machine)
- Make a commit (technically add files to index first)
- Push your commit to the repository (usually in a branch)
- Code review, often using Pull Requests
- Merge to main

## Branches

Main branch (may be called master as well) is usually used for tracking changes that will be deployed to production. 

When developing new features / changes, a new development branch is often created for all the changes related to a User Story or Task. When all changes related to the Story are done, the development branch can be merged to main. Pull Requests are often used for tracking development branches, reviewing code and merging to main.

## Refactoring

Refactoring is re-organizing, cleaning up, or otherwise improving the codebase in ways that do not change what the software actually does. Enables faster development later.
