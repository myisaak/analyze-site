#!/bin/bash
# Pulls the latest webextension polyfill for chrome support
git submodule update --recursive --remote
cd webextension-polyfill
npm install
npm run build
cd ..
cp webextension-polyfill/dist/browser-polyfill.js feel-the-web/src/

# Builds the extention into .crx
crxmake --pack-extension=feel-the-web/