#!/bin/bash

# Semantik versiyon
MAJOR=1
MINOR=4
PATCH=$(date +%Y%m%d)

VERSION="$MAJOR.$MINOR.$PATCH"

# Git tag oluşturma
git tag -a v$VERSION -m "Version $VERSION"
git push v$VERSION

echo "🚀 Pushed git tag: v$VERSION. GitHub Actions tetiklendi."
