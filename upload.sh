#!/bin/bash
COMMIT_MSG=${1:-"Update"}

git add .
git commit -m "$COMMIT_MSG"
git push