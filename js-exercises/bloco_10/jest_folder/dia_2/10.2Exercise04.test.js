const getRepos = require('./10.2Exercise04');

it('should verify if the repos exist', async () => {
  const repo = await getRepos('https://api.github.com/users/tryber/repos');
  expect(repo).toContain('sd-01-week4-5-project-todo-list');
});