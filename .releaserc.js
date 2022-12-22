module.exports = {
  extends: 'semantic-release-npm-github-publish',
  defaultBranch: 'main',
  branches: [{ name: 'main' }, { name: 'beta', prerelease: true }],
};
