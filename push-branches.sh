set -e

git checkout 1-init

branches=(
  1-init
  2-theme 2-theme-solution
  3-resumability
)

for branch in ${branches[*]}; do
  git checkout $branch
  git push $1 $branch
done

git checkout 1-init
