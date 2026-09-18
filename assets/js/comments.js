/* Backstage Comments - Giscus Integration */
(function() {
  'use strict';
  
  // Only load on article pages (pages with a .main h1 inside section)
  var articleSection = document.querySelector('#main .inner > section');
  var headline = articleSection ? articleSection.querySelector('header.main h1') : null;
  if (!headline) return;
  
  // Find the actions bar (Read more / Homepage buttons) to insert comments before it
  var actionsBar = articleSection.querySelector('ul.actions');
  if (!actionsBar) return;
  
  // Create comment container
  var commentDiv = document.createElement('div');
  commentDiv.id = 'backstage-comments';
  commentDiv.style.cssText = 'margin: 2.5em 0 1.5em; padding-top: 1.5em; border-top: 2px solid rgba(125,18,38,0.15);';
  
  // Add section header
  var commentHeader = document.createElement('h3');
  commentHeader.textContent = 'Comments';
  commentHeader.style.cssText = 'color: #7D1226; margin-bottom: 1em; font-family: "Roboto Slab", Georgia, serif;';
  commentDiv.appendChild(commentHeader);
  
  var commentInfo = document.createElement('p');
  commentInfo.style.cssText = 'font-size: 0.85em; color: #666; margin-bottom: 1em;';
  commentInfo.textContent = 'Sign in with GitHub to leave a comment. Your thoughts and contributions are welcome.';
  commentDiv.appendChild(commentInfo);
  
  // Create giscus container
  var giscusDiv = document.createElement('div');
  giscusDiv.className = 'giscus';
  commentDiv.appendChild(giscusDiv);
  
  // Insert before the actions bar
  actionsBar.parentNode.insertBefore(commentDiv, actionsBar);
  
  // Load giscus script
  var script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.setAttribute('data-repo', 'backstagenewsng/backstagenewsng.github.io');
  script.setAttribute('data-repo-id', 'R_kgDOT2BguQ');
  script.setAttribute('data-category', 'General');
  script.setAttribute('data-category-id', 'DIC_kwDOT2Bguc4DF16H');
  script.setAttribute('data-mapping', 'pathname');
  script.setAttribute('data-strict', '0');
  script.setAttribute('data-reactions-enabled', '1');
  script.setAttribute('data-emit-metadata', '0');
  script.setAttribute('data-input-position', 'top');
  script.setAttribute('data-theme', 'light');
  script.setAttribute('data-lang', 'en');
  script.setAttribute('data-loading', 'lazy');
  script.crossOrigin = 'anonymous';
  script.async = true;
  giscusDiv.appendChild(script);
})();
