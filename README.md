artus-exception-generator
=================

> ⚠️ NOTICE!!! The project is experimental and Working-In-Process, DON'T use it in production!

Exception Generator CLI created by Artus WG.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g exception-generator
$ artus-exception-generator COMMAND
running command...
$ artus-exception-generator (--version)
exception-generator/0.0.1 darwin-x64 node-v16.17.1
$ artus-exception-generator --help [COMMAND]
USAGE
  $ artus-exception-generator COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`artus-exception-generator hello PERSON`](#artus-exception-generator-hello-person)
* [`artus-exception-generator hello world`](#artus-exception-generator-hello-world)
* [`artus-exception-generator help [COMMAND]`](#artus-exception-generator-help-command)

## `artus-exception-generator hello PERSON`

Say hello

```
USAGE
  $ artus-exception-generator hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/artusjs/exception-generator/blob/v0.0.1/dist/commands/hello/index.ts)_

## `artus-exception-generator hello world`

Say hello world

```
USAGE
  $ artus-exception-generator hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ artus-exception-generator hello world
  hello world! (./src/commands/hello/world.ts)
```

## `artus-exception-generator help [COMMAND]`

Display help for artus-exception-generator.

```
USAGE
  $ artus-exception-generator help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for artus-exception-generator.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.15/src/commands/help.ts)_
<!-- commandsstop -->
