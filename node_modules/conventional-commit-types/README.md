# conventional-commit-types

[![npm](https://img.shields.io/npm/v/conventional-commit-types.svg?maxAge=2592000)](https://www.npmjs.com/package/conventional-commit-types)
[![Build Status](https://img.shields.io/travis/commitizen/conventional-commit-types.svg?maxAge=2592000)](https://travis-ci.org/commitizen/conventional-commit-types)

List of conventional commit types.

## Spec

Exports an object with a `types` key whose value is an object whose keys are type names and whose values are objects with key-value pairs such as `description` as string, optional `title` as string, etc. See [index.json](index.json). Any alternatives should follow the same spec.

## Etc.

Used by [commitizen/cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) for [commitizen/cz-cli](https://github.com/commitizen/cz-cli).

Can be used with [kentcdodds/validate-commit-msg](https://github.com/kentcdodds/validate-commit-msg#types).

Commit types originally from:
* [Angular Git Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type)
* [commitizen/cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)

Created for [AndersDJohnson/conventional-commit-types-cli](https://github.com/AndersDJohnson/conventional-commit-types-cli).
