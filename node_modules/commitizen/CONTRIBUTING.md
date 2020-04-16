# Contribution guide

## Developing commitizen

You consider contributing changes to commitizen – thank you!
Please consider these guidelines when filing a pull request:

*  Commits follow the [Angular commit convention](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)
*  JavaScript is written using ES2015 features
*  2 spaces indentation
*  Features and bug fixes should be covered by test cases

## Creating releases

commitizen uses [semantic-release](https://github.com/semantic-release/semantic-release)
to release new versions automatically.

*  Commits of type `fix` will trigger bugfix releases, think `0.0.1`
*  Commits of type `feat` will trigger feature releases, think `0.1.0`
*  Commits with `BREAKING CHANGE` in body or footer will trigger breaking releases, think `1.0.0`

All other commit types will trigger no new release.

## Gotchas

### Atom removes lines with just spaces, breaking tests

When using Atom, if you edit some of our tests, atom will remove the whitespace on some lines. Unfortunately we wanted this whitespace to
able to test multiline commits and their difference across operating
systems. Atom has decided to keep the stripping of whitespace as a
default. Although we understand this decision, it has the unfortunate
side effect of editing parts of the file that you might not have
intended. We think this should be left up to more configurable tools
like eslint.

For now, in order to work around this, you can take the steps outlined
[here](https://github.com/atom/whitespace/issues/10#issuecomment-85183781) to temporarily disable automatic whitespace removal in Atom.
