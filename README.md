# ga.me

This project shows one way to handle protractor testing, using the website ga.me as an example.

Points of interest:
Page objects do not ever reveal their elements. The only way to interact with them is through the results of functions being used on the private elements.

All protractor functions that we use are curried or enhanced in some way to better work with this results-based page pattern.

Rather than stubbing out a function for every element manually, we just pass it through a helper utility to add all the functions needed to the page file. Any large-scale testing effort will have dozens of elements on a page, and the time spent refactoring if you simply add an element, and then need to add the isDisplayed, getText, and click functionality to the page individually is well saved. Not to mention the number of lines per file gets crazy, even as simple as these are!

Tests never rely on the tests before them passing before the later ones can pass themselves.. Each resets with a beforeEach, and afterEach could be added as well if there is a consistant need for something like ignoreSync.

Tests are ran in multiple browsers at once. This forces slightly better testing habits, as, once again, tests are not allowed to build off of eachother.
