(function () {
  'use strict';

  var root = 'assets/images/exact/';

  function image(path, alt, className) {
    var node = document.createElement('img');
    node.src = root + path;
    node.alt = alt;
    if (className) node.className = className;
    return node;
  }

  function setSources(selector, files, alts) {
    document.querySelectorAll(selector).forEach(function (node, index) {
      if (!files[index]) return;
      node.src = root + files[index];
      node.alt = alts[index] || node.alt;
      node.removeAttribute('loading');
    });
  }

  function replaceCards(selector, files, alts, className) {
    document.querySelectorAll(selector).forEach(function (card, index) {
      if (!files[index]) return;
      card.replaceChildren(image(files[index], alts[index] || '', className));
    });
  }

  function applyAssets() {
    setSources('.xr-section-26 .xr-care-row article>img', [
      's26-inoculate.jpg', 's26-sow.jpg', 's26-place.jpg'
    ], ['Inoculate seeds', 'Sow the seeds', 'Place the pots']);

    setSources('.xr-section-29 .xr-service-focus', ['s29-pruning.jpg'], ['Pruning service']);
    setSources('.xr-section-83 .xr-83>img', ['s83-expert.jpg'], ['Gardening expert holding a potted herb']);

    setSources('.xr-section-121 .xr-case-grid>img', ['s121-project-wide.jpg'], ['Landscape maintenance project']);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(applyAssets, 2); });
  } else {
    setTimeout(applyAssets, 2);
  }
})();
