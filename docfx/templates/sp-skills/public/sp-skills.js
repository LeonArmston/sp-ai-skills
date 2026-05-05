(function () {
  var REPO = 'LeonArmston/sp-ai-skills';
  var REPO_URL = 'https://github.com/' + REPO;

  var OCTOCAT = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96" width="36" height="36" fill="white" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/></svg>';

  var FORK_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true"><path d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"/></svg>';

  var STAR_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z"/></svg>';

  function buildWidget(forks, stars) {
    var el = document.createElement('div');
    el.className = 'github-mark';
    el.innerHTML =
      '<a href="' + REPO_URL + '" title="View on GitHub" target="_blank" rel="noopener">' +
        '<div class="github-wrapper">' +
          '<div class="github-icon">' + OCTOCAT + '</div>' +
          '<div class="github-repository">' +
            '<span>GitHub</span>' +
            '<ul class="github-facts">' +
              '<li>' + FORK_ICON + '<span class="github-forks">' + forks + '</span></li>' +
              '<li>' + STAR_ICON + '<span class="github-stars">' + stars + '</span></li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
      '</a>';
    return el;
  }

  function injectWidget(forks, stars) {
    if (document.querySelector('.github-mark')) return;
    var target = document.querySelector('.navbar-collapse, .navbar > .container-fluid, nav.navbar');
    if (!target) return;
    target.appendChild(buildWidget(forks, stars));
  }

  function fetchAndInject() {
    fetch('https://api.github.com/repos/' + REPO)
      .then(function (r) { return r.json(); })
      .then(function (d) { injectWidget(d.forks_count || 0, d.stargazers_count || 0); })
      .catch(function () { injectWidget(0, 0); });
  }

  function tryInject() {
    if (document.querySelector('nav.navbar, .navbar-collapse')) {
      fetchAndInject();
      return true;
    }
    return false;
  }

  function init() {
    if (tryInject()) return;
    var obs = new MutationObserver(function () {
      if (tryInject()) { obs.disconnect(); }
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(function () { obs.disconnect(); fetchAndInject(); }, 6000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
