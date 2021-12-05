#!/user/bin/env sh

set -e 

npm run build

cd dist

git init

git add -A
git commit -m "new deployment"

git push -f https://github.com/fadyelgendy/real-state-stocks.git master:gh-pages

cd -