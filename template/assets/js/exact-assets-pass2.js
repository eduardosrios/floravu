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
    replaceCards('.xr-section-16 .xr-house-row article', [
      's16-card-1.jpg', 's16-card-2.jpg', 's16-card-3.jpg', 's16-card-4.jpg'
    ], ['Asplenium product card', 'Succulent product card', 'Flowering plant product card', 'Aloe plant product card'], 'xr-exact-house-card');

    replaceCards('.xr-section-129 .xr-house-row article', [
      's129-card-1.jpg', 's129-card-2.jpg', 's129-card-3.jpg', 's129-card-4.jpg'
    ], ['Asplenium product card', 'Succulent product card', 'Flowering plant product card', 'Aloe plant product card'], 'xr-exact-house-card');

    var section16Note = document.querySelector('.xr-section-16 .xr-16 header p');
    if (section16Note) {
      section16Note.replaceChildren(image('s16-header-note.jpg', 'Best plants for boosting and purifying oxygen', 'xr16-exact-note'));
    }

    var section129Note = document.querySelector('.xr-section-129 .xr-129 header p');
    if (section129Note) {
      section129Note.replaceChildren(image('s129-header-note.jpg', 'Best plants for boosting and purifying oxygen', 'xr129-exact-note'));
    }

    setSources('.xr-section-26 .xr-care-row article>img', [
      's26-inoculate.jpg', 's26-sow.jpg', 's26-place.jpg'
    ], ['Inoculate seeds', 'Sow the seeds', 'Place the pots']);

    setSources('.xr-section-29 .xr-service-focus', ['s29-pruning.jpg'], ['Pruning service']);
    replaceCards('.xr-section-76 .xr-tree-services article', [
      's76-card-1.jpg', 's76-card-2.jpg', 's76-card-3.jpg', 's76-card-4.jpg'
    ], ['Safe tree removal service card', 'Tree trimming and pruning service card', 'Storm-damaged tree service card', 'Debris and brush clearing service card'], 'xr76-exact-card');
    setSources('.xr-section-83 .xr-83>img', ['s83-expert.jpg'], ['Gardening expert holding a potted herb']);

    replaceCards('.xr-section-91 .xr-category-grid article', [
      's91-indoor-card.jpg', 's91-lowlight-card.jpg', 's91-succulent-card.jpg', 's91-flower-card.jpg', 's91-hanging-card.jpg'
    ], ['Indoor plants', 'Low-light plants', 'Succulents', 'Flowering plants', 'Hanging plants'], 'xr-exact-category-card');

    setSources('.xr-section-121 .xr-case-grid>img', ['s121-project-wide.jpg'], ['Landscape maintenance project']);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(applyAssets, 2); });
  } else {
    setTimeout(applyAssets, 2);
  }
})();
