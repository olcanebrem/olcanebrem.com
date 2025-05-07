#!/bin/bash

# Semantik versiyon
MAJOR=1
MINOR=2
PATCH=$(date +%Y%m%d)

VERSION="$MAJOR.$MINOR.$PATCH"

# Git tag oluşturma
git tag -a v$VERSION -m "Version $VERSION"
git push origin v$VERSION

echo "🚀 Pushed git tag: v$VERSION. GitHub Actions tetiklendi."
