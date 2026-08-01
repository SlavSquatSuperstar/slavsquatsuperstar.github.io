#!/bin/sh
# Cleans past GitHub Pages deployments using gh CLI
# Author: SlavSquatSuperstar
# Usage: ./clean_deployments.sh

REPO="SlavSquatSuperstar/slavsquatsuperstar.github.io"

gh api --paginate "/repos/${REPO}/deployments" --jq '.[].id' | while read -r dep_id; do
  state="$(gh api "/repos/${REPO}/deployments/${dep_id}/statuses?per_page=1" --jq '.[0].state // empty')"
  [ "${state}" = "inactive" ] || continue
  echo "Deleting ${dep_id} (${state})"
  gh api --method DELETE "/repos/${REPO}/deployments/${dep_id}"
done
