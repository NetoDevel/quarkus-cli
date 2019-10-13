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

## create a new project

- To create a new quarkus project you can either use one of the two commands. If the `<output-dir>` is not provided, the project is created on current directory.
  - `create <output-dir>`
  - `init <output-dir>`
    The two commands accept a list of options. Run `quarkus-cli init --help` to see available options.

## configuration

- To generate a configuration property file use `quarkus-cli config generate -f <filename>`
- To view the current configuration file use `quarkus-cli config view`

Type `quarkus-cli config -h` for more help

## dev / remote-dev mode

- To run the current project in dev mode use `quarkus-cli dev`
- To run the current project in remote dev mode use `quarkus-cli remote-dev`

# TODO

- [ ] Add gradle support.
- [ ] Add the ability to customize build tool
- [ ] Support of additional commands like `add-extension`, `list-extensions`, `build`, `test`

# Author

Manyanda Chitimbo <manyanda.chitimbo@gmail.com>
