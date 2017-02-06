# React Redux Starter Kit

__tl;dr;__ This is a quick start project for getting up and running with React, Redux, and Webpack. It contains a quick example application with some tests as reference material to get you out of the gate quickly.

## What is this

This is a super simple example project utilizing React, Redux, and Webpack.
It takes the brain-dead concept of incrementing a number and implements it across
this stack so you don't have to worry about what is going on and can focus on
how the implementation of React/Redux works.

In addition to these behemoth libraries, This starter kit includes-- but is not limited to-- the following features for the low, low price of $0.00.

* [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html): When possible, changes will be patched in to the running application.
* [Linting](http://eslint.org/): Javascript code will be passed through a configurable linter. Configure it. Love it.
* [CSS Modules](https://github.com/css-modules/css-modules): Stylesheets can loaded into Javascript and accessed through Object properties.
* [SASS](https://github.com/jtangelder/sass-loader): Because CSS is a hack and painful without a preprocessor.
* [File Loading](https://github.com/webpack/file-loader): Load images, fonts, etc.
* [Testing!](https://mochajs.org/): Because you're a professional.


## Getting started

Clone this repository or copy it's contents in to your project's location. Install all dependencies using `npm install`. 
This will also install all of the development dependencies indicated in `package.json`.

Once all depencies are installed, you can start the development server with `npm install`.
This will start a local server that will automatically patch the running application with most updates.
This server is intended for development only and should not be used as is to host anything public.

## Make it your own

Run `yarn init` to reconfigure the package.json file.
Be sure to override any values that don't correspond with your new project.

## Commands

All pre-baked commands are defined in `package.json` and are run through `npm`. You should look there to see what they are doing in case you need to make any modification.


| Command                            | Purpose                 |
|------------------------------------|-------------------------|
| `npm start`                        | starts the local server |
| `npm run clean`                    | deletes contents of dist directory |
| `npm run compile`                  | runs `clean` and compiles new build |
| `npm run compile:stats`            | runs `compile` and additionally outputs json stats file |
| `npm run check`                    | checks for updates to installed packages |
| `npm run test(:watch)`             | executes all tests, optionally watch for changes |
| `npm run test:coverage`            | executes tests and generates coverage report |
| `npm run test:unit(:watch)`        | executes unit tests |
| `npm run test:integration(:watch)` | executes integration tests |
| `npm run test:karma(:watch)`       | __@todo__ executes tests using the Karma test runner

