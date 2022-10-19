artus-exception-generator
=================

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
exception-generator/0.0.0 darwin-x64 node-v16.17.1
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
* [`artus-exception-generator plugins`](#artus-exception-generator-plugins)
* [`artus-exception-generator plugins:install PLUGIN...`](#artus-exception-generator-pluginsinstall-plugin)
* [`artus-exception-generator plugins:inspect PLUGIN...`](#artus-exception-generator-pluginsinspect-plugin)
* [`artus-exception-generator plugins:install PLUGIN...`](#artus-exception-generator-pluginsinstall-plugin-1)
* [`artus-exception-generator plugins:link PLUGIN`](#artus-exception-generator-pluginslink-plugin)
* [`artus-exception-generator plugins:uninstall PLUGIN...`](#artus-exception-generator-pluginsuninstall-plugin)
* [`artus-exception-generator plugins:uninstall PLUGIN...`](#artus-exception-generator-pluginsuninstall-plugin-1)
* [`artus-exception-generator plugins:uninstall PLUGIN...`](#artus-exception-generator-pluginsuninstall-plugin-2)
* [`artus-exception-generator plugins update`](#artus-exception-generator-plugins-update)

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

_See code: [dist/commands/hello/index.ts](https://github.com/artusjs/exception-generator/blob/v0.0.0/dist/commands/hello/index.ts)_

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

## `artus-exception-generator plugins`

List installed plugins.

```
USAGE
  $ artus-exception-generator plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ artus-exception-generator plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.2/src/commands/plugins/index.ts)_

## `artus-exception-generator plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ artus-exception-generator plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ artus-exception-generator plugins add

EXAMPLES
  $ artus-exception-generator plugins:install myplugin 

  $ artus-exception-generator plugins:install https://github.com/someuser/someplugin

  $ artus-exception-generator plugins:install someuser/someplugin
```

## `artus-exception-generator plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ artus-exception-generator plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ artus-exception-generator plugins:inspect myplugin
```

## `artus-exception-generator plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ artus-exception-generator plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ artus-exception-generator plugins add

EXAMPLES
  $ artus-exception-generator plugins:install myplugin 

  $ artus-exception-generator plugins:install https://github.com/someuser/someplugin

  $ artus-exception-generator plugins:install someuser/someplugin
```

## `artus-exception-generator plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ artus-exception-generator plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ artus-exception-generator plugins:link myplugin
```

## `artus-exception-generator plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ artus-exception-generator plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ artus-exception-generator plugins unlink
  $ artus-exception-generator plugins remove
```

## `artus-exception-generator plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ artus-exception-generator plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ artus-exception-generator plugins unlink
  $ artus-exception-generator plugins remove
```

## `artus-exception-generator plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ artus-exception-generator plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ artus-exception-generator plugins unlink
  $ artus-exception-generator plugins remove
```

## `artus-exception-generator plugins update`

Update installed plugins.

```
USAGE
  $ artus-exception-generator plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
