#!/bin/bash

set -xe

# check package version
PACKAGE=$(node --eval "console.log(require('./package.json').name);")
VERSION=$(node --eval "console.log(require('./package.json').version);")

# 通过命令行同步指定包
cnpm sync $PACKAGE

cnpm info $PACKAGE versions

echo "nrm use cnpm; yarn add $PACKAGE@$VERSION"
