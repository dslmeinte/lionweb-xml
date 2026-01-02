#!/bin/sh

# Script to rebuild all packages from scratch, e.g. after cloning or after running `npm run clean`.
# It does so *in dependency order*.

# Have script exit after first failure is detected:
set -e

cd packages

cd build
npm run generate
cd ..

cd lionweb-ecore
npm run build
cd ..

cd examples
npm run generate > generate.out.log 2> generate.err.log
cd ..

cd .. # (/<root>)

# (doesn't bother with dependency order:)
npm run lint

