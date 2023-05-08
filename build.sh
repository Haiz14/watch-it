git checkout main
git pull
git checkout release
git pull
git merge main
cd frontend
npm i
npm run build
mv dist/client ../docs
git add docs
git commit -m "updated site"
git push
