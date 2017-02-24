'use strict';

page('/', articleController.loadAll, articleController.index);
page('/about', aboutController.index);
page('/article/:article_id', articleController.loadById, articleController.index);

// Redirect home if the default filter option is selected:
page('/category', '/');
page('/author', '/');

page('/author/:authorName', articleController.loadByAuthor, articleController.index);
page('/category/:categoryName', articleController.loadByCategory, articleController.index);

// DONE: What does this do? Is it necessary?
// The following function invokes the function(s) above when the page is rendered. The page() function renders methods found in the articleController in order to load unique information according to the URL utilized in index.html
page();
