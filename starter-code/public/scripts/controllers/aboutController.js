'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };

  // DONE: What value is in 'module'? What is the purpose of this line of code?
  // "Module" is an arbitrary parameter within an IFFE used to create a global object from a local object, "aboutController."
  module.aboutController = aboutController;

})(window);
