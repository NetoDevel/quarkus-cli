# quarkus-cli

`quarkus-cli` is an unoffical command line interface for `https://code.quarkus.io`. You can use this CLI tool to generate a new [`Quarkus`](https://quarkus.io) project without the usage of the browser.

![](https://github.com/machi1990/quarkus-cli/workflows/Node%20CI/badge.svg)

# Installation

The CLI is written on NodeJs - at least NodeJs v8 is required.

1. Install test runner you can use either of the following options.
   - npm: `npm install -g https://github.com/machi1990/quarkus-cli`
   - yarn: `yarn gloabl add https://github.com/machi1990/quarkus-cli`

To see if the installation is successfully, run `quarkus -h` which should output the usage information.

# How to use

- To create a new quarkus project you can either use one of the two commands. If the `<output-dir>` is not provided, the project is created on current directory.
  - `create <output-dir>`
  - `init <output-dir>`
    The two commands accept a list of options. Run `quarkus-cli init --help` to see available options.

# TODO

- Support of additional commands like `add-extension`, `list-extensions`,`generate-config`, `build`, `test`, `dev` workflow, `remote-dev` workflow

# Author

Manyanda Chitimbo <manyanda.chitimbo@gmail.com>
