## Commitizen for contributors

When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time. No more waiting until later for a git commit hook to run and reject your commit (though [that](https://github.com/kentcdodds/validate-commit-msg) can still be helpful). No more digging through [CONTRIBUTING.md](CONTRIBUTING.md) to find what the preferred format is. Get instant feedback on your commit message formatting and be prompted for required fields.

[![Backers on Open Collective](https://opencollective.com/commitizen/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/commitizen/sponsors/badge.svg)](#sponsors) [![travis.ci](https://img.shields.io/travis/commitizen/cz-cli.svg?style=flat-square&branch=master)](https://travis-ci.org/commitizen/cz-cli) [![Azure Build Status](https://dev.azure.com/commitizen/cz-cli/_apis/build/status/commitizen.cz-cli?branchName=master)](https://dev.azure.com/commitizen/cz-cli/_build/latest?definitionId=2)
[![codecov.io](https://img.shields.io/codecov/c/github/commitizen/cz-cli.svg?style=flat-square)](https://codecov.io/github/commitizen/cz-cli?branch=master) [![npm monthly downloads](https://img.shields.io/npm/dm/commitizen.svg?style=flat-square)](https://www.npmjs.com/package/commitizen) [![current version](https://img.shields.io/npm/v/commitizen.svg?style=flat-square)](https://www.npmjs.com/package/commitizen) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release) [![commitizen on stackoverflow](https://img.shields.io/badge/stackoverflow-community-orange.svg?longCache=true&style=flat-square&logo=stackoverflow)](https://stackoverflow.com/tags/commitizen)

## Installing the command line tool

Commitizen is currently tested against
node 10 and 12 although it may work in
older node. You should also have npm 6
or greater.

Installation is as simple as running the following command (if you see `EACCES` error, reading [fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions) may help):

```
npm install -g commitizen
```

## Using the command line tool

### If your repo is [Commitizen-friendly]:

Simply use `git cz` instead of `git commit` when committing.

_Alternatively_, if you are using **NPM 5.2+** you can [use `npx`](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) instead of installing globally:

```
npx git-cz
```

or as an npm script:

```json
  ...
  "scripts": {
    "commit": "npx git-cz"
  }
```

When you're working in a Commitizen friendly repository, you'll be prompted to fill in any required fields and your commit messages will be formatted according to the standards defined by project maintainers.

[![Add and commit with Commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)

### If your repo is NOT Commitizen friendly:

If you're **not** working in a Commitizen friendly repository, then `git cz` will work just the same as `git commit` but `npx git-cz` will use the [streamich/git-cz](https://github.com/streamich/git-cz) adapter. To fix this, you need to first [make your repo Commitizen-friendly](#making-your-repo-commitizen-friendly)

## Making your repo Commitizen-friendly

For this example, we'll be setting up our repo to use [AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) also known as [conventional-changelog](https://github.com/ajoslin/conventional-changelog).

First, install the Commitizen cli tools:

```
npm install commitizen -g
```

Next, initialize your project to use the cz-conventional-changelog adapter by typing:

```
commitizen init cz-conventional-changelog --save-dev --save-exact
```

Or if you are using Yarn:

```
commitizen init cz-conventional-changelog --yarn --dev --exact
```

Note that if you want to force install over the top of an old adapter, you can apply the `--force` argument. For more information on this, just run `commitizen help`.

The above command does three things for you.

1. Installs the cz-conventional-changelog adapter npm module
2. Saves it to package.json's dependencies or devDependencies
3. Adds the `config.commitizen` key to the root of your **package.json** as shown here:

```json
...
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
```

This just tells Commitizen which adapter we actually want our contributors to use when they try to commit to this repo.

`commitizen.path` is resolved via [require.resolve](https://nodejs.org/api/globals.html#globals_require_resolve) and supports

- npm modules
- directories relative to `process.cwd()` containing an `index.js` file
- file base names relative to `process.cwd()` with `js` extension
- full relative file names
- absolute paths.

Please note that in the previous version of Commitizen we used czConfig. **czConfig has been deprecated** and you should migrate to the new format before Commitizen 3.0.0.

### Optional: Install and run Commitizen locally

Installing and running Commitizen locally allows you to make sure that developers are running the exact same version of Commitizen on every machine.

Install Commitizen with `npm install --save-dev commitizen`.

On **NPM 5.2+** you can [use `npx`](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) to initialize the conventional changelog adapter:

```
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

For **previous versions of NPM (< 5.2)** you can execute `./node_modules/.bin/commitizen` or `./node_modules/.bin/git-cz` in order to actually use the commands.

You can then initialize the conventional changelog adapter using: `./node_modules/.bin/commitizen init cz-conventional-changelog --save-dev --save-exact`

And you can then add some nice npm run scripts in your package.json pointing to the local version of commitizen:

```json
  ...
  "scripts": {
    "commit": "git-cz"
  }
```

This will be more convenient for your users because then if they want to do a commit, all they need to do is run `npm run commit` and they will get the prompts needed to start a commit!

> **NOTE:** if you are using `precommit` hooks thanks to something like `husky`, you will need to name your script some thing other than "commit" (e.g. "cm": "git-cz"). The reason is because npm-scripts has a "feature" where it automatically runs scripts with the name *prexxx* where *xxx* is the name of another script. In essence, npm and husky will run "precommit" scripts twice if you name the script "commit," and the work around is to prevent the npm-triggered *precommit* script.

#### Optional: Running Commitizen on `git commit`

This example shows how to incorporate Commitizen into the existing `git commit` workflow by using git hooks and the `--hook` command-line option. This is useful for project maintainers
who wish to ensure the proper commit format is enforced on contributions from those unfamiliar with Commitizen.

Once either of these methods is implemented, users running `git commit` will be presented with an interactive Commitizen session that helps them write useful commit messages.

> **NOTE:** This example assumes that the project has been set up to [use Commitizen locally](https://github.com/commitizen/cz-cli#optional-install-and-run-commitizen-locally).

##### Traditional git hooks

Update `.git/hooks/prepare-commit-msg` with the following code:

```
#!/bin/bash
exec < /dev/tty && node_modules/.bin/git-cz --hook || true
```

##### Husky
For `husky` users, add the following configuration to the project's `package.json`:

```
"husky": {
  "hooks": {
    "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
  }
}
```

> **Why `exec < /dev/tty`?** By default, git hooks are not interactive. This command allows the user to use their terminal to interact with Commitizen during the hook.

#### Congratulations your repo is Commitizen-friendly. Time to flaunt it!

Add the Commitizen-friendly badge to your README using the following markdown:

```
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
```

Your badge will look like this:

[![Commitizen-friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

It may also make sense to change your README.md or CONTRIBUTING.md to include or link to the Commitizen project so that your new contributors may learn more about installing and using Commitizen.

## Conventional commit messages as a global utility

Install `commitizen` globally, if you have not already.

```
npm install -g commitizen
```

Install your preferred `commitizen` adapter globally, for example [`cz-conventional-changelog`](https://www.npmjs.com/package/cz-conventional-changelog)

```
npm install -g cz-conventional-changelog
```

Create a `.czrc` file in your `home` directory, with `path` referring to the preferred, globally installed, `commitizen` adapter

```
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

You are all set! Now `cd`into any `git` repository and use `git cz` instead of `git commit` and you will find the `commitizen` prompt.

Protip: You can use all the `git commit` `options` with `git cz`, for example: `git cz -a`.

> If your repository is a [nodejs](https://nodejs.org/en/) project, making it [Commitizen-friendly] is super easy.

If your repository is already [Commitizen-friendly], the local `commitizen` adapter will be used, instead of globally installed one.

## Commitizen for multi-repo projects

As a project maintainer of many projects, you may want to standardize on a single commit message
format for all of them. You can create your own node module which acts as front-end for commitizen.

### 1. Create your own entry point script

```
// my-cli.js

#!/usr/bin/env node
"use strict";

const path = require('path');
const bootstrap = require('commitizen/dist/cli/git-cz').bootstrap;

bootstrap({
  cliPath: path.join(__dirname, '../../node_modules/commitizen'),
  // this is new
  config: {
    "path": "cz-conventional-changelog"
  }
});
```

### 2. Add script to package.json

```
// package.json

{
  "name": "company-commit",
  "bin": "./my-cli.js",
  "dependencies": {
    "commitizen": "^2.7.6",
    "cz-conventional-changelog": "^1.1.5",
  }
}
```

### 3. Publish it to npm and use it!

```
npm install company-commit --save-dev
./node_modules/.bin/company-commit
```

## Adapters

We know that every project and build process has different requirements so we've tried to keep Commitizen open for extension. You can do this by choosing from any of the pre-build adapters or even by building your own. Here are some of the great adapters available to you:

- [cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog)
- [cz-jira-smart-commit](https://www.npmjs.com/package/cz-jira-smart-commit)
- [@endemolshinegroup/cz-jira-smart-commit](https://github.com/EndemolShineGroup/cz-jira-smart-commit)
- [@endemolshinegroup/cz-github](https://github.com/EndemolShineGroup/cz-github)
- [rb-conventional-changelog](https://www.npmjs.com/package/rb-conventional-changelog)
- [cz-mapbox-changelog](https://www.npmjs.com/package/cz-mapbox-changelog)
- [cz-customizable](https://github.com/leonardoanalista/cz-customizable)
- [commitlint](https://github.com/marionebl/commitlint)
- [vscode-commitizen](https://github.com/KnisterPeter/vscode-commitizen)
- [cz-emoji](https://github.com/ngryman/cz-emoji)
- [cz-adapter-eslint](https://www.npmjs.com/package/cz-adapter-eslint)

To create an adapter, just fork one of these great adapters and modify it to suit your needs. We pass you an instance of [Inquirer.js](https://github.com/SBoudrias/Inquirer.js/) but you can capture input using whatever means necessary. Just call the `commit` callback with a string and we'll be happy. Publish it to npm, and you'll be all set!

## Retrying failed commits

As of version 2.7.1, you may attempt to retry the last commit using the `git cz --retry` command. This can be helpful when you have tests set up to run via a git precommit hook. In this scenario, you may have attempted a Commitizen commit, painstakingly filled out all of the commitizen fields, but your tests fail. In previous Commitizen versions, after fixing your tests, you would be forced to fill out all of the fields again. Enter the retry command. Commitizen will retry the last commit that you attempted in this repo without you needing to fill out the fields again.

Please note that the retry cache may be cleared when upgrading commitizen versions, upgrading adapters, or if you delete the `commitizen.json` file in your home or temp directory. Additionally, the commit cache uses the filesystem path of the repo, so if you move a repo or change its path, you will not be able to retry a commit. This is an edge case, but might be confusing if you have scenarios where you are moving folders that contain repos.

It is important to note that if you are running `git-cz` from a npm script (let's say it is called `commit`) you will need to do one of the following:

- Pass `-- --retry` as an argument for your script. i.e: `npm run commit -- --retry`
- Use [npm-run](https://www.npmjs.com/package/npm-run) to find and call git-cz executable directly. i.e: `npm-run git-cz --retry`
- Use [npm-quick-run](https://www.npmjs.com/package/npm-quick-run) i.e: `nr commit --retry` or just `nr c --retry` (which will run all scripts that starts with the letter 'c')

Note that the last two options **do not** require you to pass `--` before the args but the first **does**.

## Commitizen for project maintainers

As a project maintainer, making your repo Commitizen friendly allows you to select pre-existing commit message conventions or to create your own custom commit message convention. When a contributor to your repo uses Commitizen, they will be prompted for the correct fields at commit time.

## Go further

Commitizen is great on its own, but it shines when you use it with some other amazing open source tools. Kent C. Dodds shows you how to accomplish this in his Egghead.io series, [How to write an open source javascript library](https://egghead.io/series/how-to-write-an-open-source-javascript-library). Many of the concepts can be applied to non-javascript projects as well.

## Philosophy

### About Commitizen

Commitizen is an open source project that helps contributors be good open source citizens. It accomplishes this by prompting them to follow commit message conventions at commit time. It also empowers project maintainers to create or use predefined commit message conventions in their repos to better communicate their expectations to potential contributors.

### Commitizen or Commit Hooks

Both! Commitizen is not meant to be a replacement for git commit hooks. Rather, it is meant to work side-by-side with them to ensure a consistent and positive experience for your contributors. Commitizen treats the commit command as a declarative action. The contributor is declaring that they wish to contribute to your project. It is up to you as the maintainer to define what rules they should be following.

We accomplish this by letting you define which adapter you'd like to use in your project. Adapters just allow multiple projects to share the same commit message conventions. A good example of an adapter is the cz-conventional-changelog adapter.

## Related projects

- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) – Generate a changelog from conventional commit history
- [commitlint](https://github.com/marionebl/commitlint) - Lint commit messages

## Authors and Contributors

@JimTheDev (Jim Cummins, author)
@kentcdodds
@accraze
@kytwb
@Den-dp

Special thanks to @stevelacy, whose [gulp-git](https://www.npmjs.com/package/gulp-git) project makes commitizen possible.

## Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="graphs/contributors"><img src="https://opencollective.com/commitizen/contributors.svg?width=890&button=false" /></a>

## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/commitizen#backer)]

<a href="https://opencollective.com/commitizen#backers" target="_blank"><img src="https://opencollective.com/commitizen/backers.svg?width=890"></a>

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/commitizen#sponsor)]

<a href="https://opencollective.com/commitizen/sponsor/0/website" target="_blank"><img src="https://opencollective.com/commitizen/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/commitizen/sponsor/1/website" target="_blank"><img src="https://opencollective.com/commitizen/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/commitizen/sponsor/2/website" target="_blank"><img src="https://opencollective.com/commitizen/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/commitizen/sponsor/3/website" target="_blank"><img src="https://opencollective.com/commitizen/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/commitizen/sponsor/4/website" target="_blank"><img src="https://opencollective.com/commitizen/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/commitizen/sponsor/5/website" target="_blank"><img src="https://opencollective.com/commitizen/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/commitizen/sponsor/6/website" target="_blank"><img src="https://opencollective.com/commitizen/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/commitizen/sponsor/7/website" target="_blank"><img src="https://opencollective.com/commitizen/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/commitizen/sponsor/8/website" target="_blank"><img src="https://opencollective.com/commitizen/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/commitizen/sponsor/9/website" target="_blank"><img src="https://opencollective.com/commitizen/sponsor/9/avatar.svg"></a>

[Commitizen-friendly]: #making-your-repo-commitizen-friendly
