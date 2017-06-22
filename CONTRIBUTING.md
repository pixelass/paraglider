# Contributing

If you want to contribute please follow the guide in this file.

<!-- toc -->

- [Pull request](#pull-request)
- [Issues](#issues)
- [Development](#development)

<!-- tocstop -->

## Pull request

Ensure that the changes are tested and documented.  
DO NOT commit any built versions.  

This project uses commitizen and conventional changelog. Please use either
to ensure that the changes are listed correctly and the commits can be parsed.

Squash before merging and remove the source branch.

## Issues

Please include the browser and operating system.

A snippet of example code helps a lot, a link to the repo with the issue helps even more.
If the issue can be seen live please provide a link.

Include info about your development environment

* Node version

## Development

`yarn <command>`

* `start`: starts the development server and builds the required files
* `test`: runs test and lints files
* `dev`: starts the development server and watches the required files
* `babel`: generates lib from source
* `build`: builds all files from source
* `watch`: builds and watches all files from source
* `lint`: lints JavaScript files
* `release`: release new version using "standard-version"
