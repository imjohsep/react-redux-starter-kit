# React Redux Starter Kit

## What is this

This is a super simple example project utilizing React, Redux, and Webpack.

### Includes

* [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html): When possible, changes will be patched in to the running application.
* [Linting](http://eslint.org/): Javascript code will be passed through a configurable linter. Configure it. Love it.
* [CSS Modules](https://github.com/css-modules/css-modules): Stylesheets can loaded into Javascript and accessed through Object properties.
* [SASS](https://github.com/jtangelder/sass-loader): Because CSS is a hack and painful without a preprocessor.
* [File Loading](https://github.com/webpack/file-loader): Load images, fonts, etc.
* [Testing!](https://mochajs.org/): Because they make coding more rewarding.


## Getting Started

Run this at the root of the project and overwrite the package.json
details that don't correspond to your new project.

`npm init`

Install all of your dependencies:

`npm install`

Start the app:

`npm start`

That's about it! This boilerplate is ready to go. It is recommended you
grow accustomed with the HomeContainer and Home Components first. Then
work your way over to the Counter Container and Component, as these
more fully implement Redux action, reducers, and state.

## Alternative Getting Started

Run `yarn init` to reconfigure the package.json file.
Be sure to override any values that don't correspond with your new project.
Common vales you should override are the repository, author, and project details.
Once our package.json file is updated we can `yarn install` the dependencies listed
in the yarn.lock file.

## Commands

All pre-baked commands are defined in `package.json` and are run through `npm`.
You should look there to see what they are doing in case you need to make any modification.


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

