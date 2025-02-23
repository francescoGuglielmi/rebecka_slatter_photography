https://rebeckaslatter.com

## To develop:

Open terminal.

if you have never done it and you are on MacOS run xcode-select --install (takes quite some time).

clone the repository and install all the packages by running `npm install` in the root folder.

You must have node installed, and if not run:

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`

in the terminal to install NVM (manages the versions of Node)

after that run `source ~/.zshrc` to reload the terminal environment.

If everything went well you should see a number output by the command `nvm -v`.

Then you can install node by running `nvm install node` (for the latest version).

Once done you can run `npm install` and `npm start` to launch the local environment. You can also run `npm test` to run some tests.