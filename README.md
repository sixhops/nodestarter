# NodeStarter

## Synopsis

This is a simple Node/Express server, hardcoded to serve an index.html, style.css, and main.js file. It is meant to be used as a starting template and a convenient development and testing environment for very simple front-end web projects. It includes commands for linting your css and js, as well as starting a local server on port 3000.

The project uses Node, Express, Nodemon, ESLint, and CSSLint.

## Motivation

I wanted a tiny web server that I could use for testing web apps locally instead of uploading to my own hosting account. I remembered seeing the script section of the package.json file and saw that you could set up a test script, linting scripts, etc. I wanted to make a simple template, mostly due to my teaching a full-stack development course, that myself and others could use to start new full-stack projects with most of the boilerplate already hammered and helpful testing scripts already configured.

## Installation and Usage

Fork the repo to your account. Clone it locally. Start making your changes. The package.json file defines the following scripts for use with the npm command:

`npm start`: Launches the server on port 3000 and listens for requests.

`npm lint:js`: Lints your JavaScript files in the app folder

`npm lint:css`: Lints your CSS files in the app folder

## License

Anyone can use this however they want.

## Next steps...

* Setting up testing.
* Improving default routing in Express.
* Add data access helpers
* Browserify. Gulp. Etc.
