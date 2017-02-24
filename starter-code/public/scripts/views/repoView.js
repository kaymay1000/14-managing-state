'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  // DONE: What is in 'render'? What values are passed in? Where does it interact elsewhere in the code?
  // render is the compiled html template, which utilizes Handlebars. The values passed into the compile function is the text found in the section of the html with the id "repo-template".
  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    ui();

    $('#about ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
