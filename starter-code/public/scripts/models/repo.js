'use strict';

(function(module) {
  const repos = {};
  repos.all = [];

  // DONE: Where is this invoked? What values are passed in? Where does it interact elsewhere in the code?
  // This function accepts a callback function as its parameter. The function is invoked in aboutController.js when the About page view is rendered. This function's callback when invokes is repoView.index, which appends the repositories to the About page.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos?per_page=5&sort=updated')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
