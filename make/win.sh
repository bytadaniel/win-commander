#!/bin/bash

# Run node with experimental sea-config
node --experimental-sea-config sea-config.json

# Copy node executable to pc-commander
cp "$(command -v node)" pc-commander

# Remove signature from pc-commander
codesign --remove-signature pc-commander

# Run postject to generate blob
npx postject pc-commander NODE_SEA_BLOB pc-commander.blob \
    --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2

# Sign pccommander
codesign --sign - pc-commander

rm pc-commander.blob
