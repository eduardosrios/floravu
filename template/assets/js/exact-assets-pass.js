(function () {
  'use strict';

  var root = 'assets/images/exact/';

  function setSources(selector, files, alts) {
    var images = document.querySelectorAll(selector);
    images.forEach(function (image, index) {
      if (!files[index]) return;
      image.src = root + files[index];
      image.alt = alts[index] || image.alt;
      image.removeAttribute('loading');
    });
  }

  function applyAssets() {
    setSources('.xr-section-4 .xr-product-row .xr-plant-tile>img', [
      's4-sansevieria.jpg', 's4-pothos.jpg', 's4-shears.jpg', 's4-pot.jpg'
    ], ['Sansevieria Trifasciata', 'Golden Pothos', 'Steel pruning shears', 'Earth matte pot']);

    ['8', '9'].forEach(function (id) {
      var section = document.querySelector('.xr-section-' + id);
      if (!section) return;
      setSources('.xr-section-' + id + ' .xr-season-grid article>img', [
        's8-areca-card.jpg', 's8-lily-card.jpg', 's8-monstera-card.jpg'
      ], ['Areca Palm collection', 'Peace Lily collection', 'Monstera Deliciosa collection']);
      section.querySelectorAll('.xr-season-grid article').forEach(function (article) {
        article.classList.add('xr-exact-card-asset');
        var copy = article.querySelector('div');
        if (copy) copy.hidden = true;
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(applyAssets, 1); });
  } else {
    setTimeout(applyAssets, 1);
  }
})();
