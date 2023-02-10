Checks out previous branch, nice for switching between two branches:

    git checkout -

Forces our local main branch to match the "remote main":

    git checkout main
    git fetch
    git reset --hard origin/main

Get rid of all local, uncommitted changes

    git checkout .
    git clean -fd

Opening a file in the browser, straight from command line

    open annaheiniPage/index.html

Pro tip: use TAB key to autocomplete on command line. As in, type "anna" <TAB> "in" 

List local branches in git

    git branch

Delete a local branch

    git branch -D myoldbranch