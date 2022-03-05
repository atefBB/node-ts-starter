# Nodejs TypeScript Starter

Starter app with those tools included and configured:

- [TypeScript](https://www.typescriptlang.org/) 4.5
- [Express](http://expressjs.com/) Fast, unopinionated, minimalist web framework for Node.js
- [ESLint](https://eslint.org/) with some initial rules recommendation
- [Jest](https://jestjs.io/) for fast unit testing and code coverage
- Type definitions for Node.js and Jest
- [Prettier](https://prettier.io/) to enforce consistent code style
- [Husky](https://typicode.github.io/husky) for git hooks
- [Commitlint](https://commitlint.js.org) Lint commit messages to respect [Conventional Commits spec](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
- [Yarn](https://yarnpkg.com/) Package manager
- NPM [scripts](#available-scripts) for common operations
- Simple example of TypeScript code and unit test
- .editorconfig for consistent file format

## Getting Started

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

### Clone repository

To clone the repository, use the following commands:

```sh
git clone https://github.com/atefBB/node-ts-starter
cd node-ts-starter
yarn
```

## Available Scripts

- `start` - start development demon,
- `build` - transpile TypeScript to ES6,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `test` - run tests,
- `test:watch` - interactive watch mode to automatically re-run tests

## Additional Information

### Writing tests in JavaScript

Writing unit tests in TypeScript can sometimes be troublesome and confusing. Especially when mocking dependencies and using spies.

This is **optional**, but if you want to learn how to write JavaScript tests for TypeScript modules, read this [wiki page][https://github.com/jsynowiec/node-typescript-boilerplate/wiki/Unit-tests-in-plain-JavaScript].

## License

No License


## Authors
- [Atef Ben Ali](mailto:atef.bettaib@gmail.com)
