(function () {
  'use strict';

  var semantic = 'assets/images/semantic/';
  var exact = 'assets/images/exact/';

  function setSources(selector, files, root) {
    document.querySelectorAll(selector).forEach(function (image, index) {
      if (!files[index]) return;
      image.src = (root || semantic) + files[index];
      image.removeAttribute('loading');
    });
  }

  function apply() {
    setSources('.xr-section-8 .xr-season-grid article>img', ['s8-areca.jpg', 's8-lily.jpg', 's8-monstera.jpg']);
    setSources('.xr-section-14 .xr-shop-eight article>img', Array.from({ length: 8 }, function (_, index) { return 's14-photo-' + (index + 1) + '.jpg'; }));
    [129].forEach(function (id) {
      setSources('.xr-section-' + id + ' .xr-house-row article>img', Array.from({ length: 4 }, function (_, index) { return 's16-photo-' + (index + 1) + '.jpg'; }));
    });
    [18, 134].forEach(function (id) {
      setSources('.xr-section-' + id + ' .xr-three-services article>img', Array.from({ length: 3 }, function (_, index) { return 's18-photo-' + (index + 1) + '.jpg'; }));
    });
    setSources('.xr-section-18 .xr-about-lower>img', ['s18-about-photo.jpg']);
    setSources('.xr-section-19 .xr-about-fragment>img', ['s18-about-photo.jpg']);
    [19, 20, 136].forEach(function (id) {
      setSources('.xr-section-' + id + ' .xr-master-cards article>img', Array.from({ length: 4 }, function (_, index) { return 's136-photo-' + (index + 1) + '.jpg'; }));
    });
    [22, 140].forEach(function (id) {
      setSources('.xr-section-' + id + ' .xr-thin-plants article>img', Array.from({ length: 5 }, function (_, index) { return 's22-photo-' + (index + 1) + '.jpg'; }));
    });
    [27, 92, 143].forEach(function (id) {
      setSources('.xr-section-' + id + ' .xr-green-products article>img', Array.from({ length: 4 }, function (_, index) { return 's27-photo-' + (index + 1) + '.jpg'; }));
    });
    setSources('.xr-section-28 .xr-stat-story img', [
      '../exact/s28-left-card.jpg', '../exact/s28-middle-photo.jpg', 's28-green-photo.jpg', 's28-right-photo.jpg'
    ]);
    setSources('.xr-section-31 .xr-priority-copy>div article:first-child img', ['s31-experience-photo.jpg']);
    setSources('.xr-section-31 .xr-priority-photo', ['s31-man.jpg'], exact);
    setSources('.xr-section-32 .xr-32>div:first-child img', ['s32-left.jpg'], exact);
    setSources('.xr-section-76 .xr-tree-services article>img', Array.from({ length: 4 }, function (_, index) { return 's76-photo-' + (index + 1) + '.jpg'; }));
    setSources('.xr-section-86 .xr-tool-shop article>img', Array.from({ length: 4 }, function (_, index) { return 's86-photo-' + (index + 1) + '.jpg'; }));
    setSources('.xr-section-91 .xr-category-grid article>img', Array.from({ length: 5 }, function (_, index) { return 's91-photo-' + (index + 1) + '.jpg'; }));
    setSources('.xr-section-95 .xr-wellbeing-photo img', ['s95-garden-photo.jpg']);
    setSources('.xr-section-97 .xr-blog-row article>img', ['s97-photo-1.jpg', 's97-photo-2.jpg']);
    [98, 148].forEach(function (id) {
      setSources('.xr-section-' + id + ' .xr-lawn-slider article>img', Array.from({ length: 4 }, function (_, index) { return 's98-photo-' + (index + 1) + '.jpg'; }));
    });
    setSources('.xr-section-99 .xr-team-row article>img', Array.from({ length: 3 }, function (_, index) { return 's99-photo-' + (index + 1) + '.jpg'; }));
    setSources('.xr-section-101 .xr-green-services article>img', Array.from({ length: 3 }, function (_, index) { return 's101-photo-' + (index + 1) + '.jpg'; }));
    setSources('.xr-section-104 .xr-bestsellers article>img', Array.from({ length: 4 }, function (_, index) { return 's104-photo-' + (index + 1) + '.jpg'; }));
    setSources('.xr-section-123 .xr-project-strip article>img', Array.from({ length: 5 }, function (_, index) { return 's123-photo-' + (index + 1) + '.jpg'; }));
    setSources('.xr-section-135 .xr-about-metric-full>img', ['s135-about-photo.jpg']);
    setSources('.xr-section-150 .xr-team-carousel article>img', Array.from({ length: 4 }, function (_, index) { return 's150-photo-' + (index + 1) + '.jpg'; }));
    document.querySelectorAll('.xr-section-97 time').forEach(function (time) { time.innerHTML = '13<br>MAR<br>2025'; });
    document.querySelectorAll('.xr-section-99 .xr-team-row footer').forEach(function (footer) {
      footer.innerHTML = "<a href='#contact' aria-label='X profile'><i class='fa-brands fa-x-twitter' aria-hidden='true'></i></a><a href='#contact' aria-label='LinkedIn profile'><i class='fa-brands fa-linkedin-in' aria-hidden='true'></i></a><a href='#contact' aria-label='Instagram profile'><i class='fa-brands fa-instagram' aria-hidden='true'></i></a><a href='#contact' aria-label='Facebook profile'><i class='fa-brands fa-facebook-f' aria-hidden='true'></i></a>";
    });
    var social = document.querySelector('.xr-section-150 .xr-social-stack');
    if (social) social.innerHTML = "<a href='#contact' aria-label='X profile'><i class='fa-brands fa-x-twitter' aria-hidden='true'></i></a><a href='#contact' aria-label='LinkedIn profile'><i class='fa-brands fa-linkedin-in' aria-hidden='true'></i></a><a href='#contact' aria-label='Instagram profile'><i class='fa-brands fa-instagram' aria-hidden='true'></i></a><a href='#contact' aria-label='Facebook profile'><i class='fa-brands fa-facebook-f' aria-hidden='true'></i></a>";
    function bindCartButtons(selector) {
      document.querySelectorAll(selector).forEach(function (button) {
        button.type = 'button';
        button.addEventListener('click', function () {
          button.innerHTML = "ADDED&nbsp; <i class='fa-solid fa-check' aria-hidden='true'></i>";
          button.setAttribute('aria-pressed', 'true');
          var section = button.closest('.xr');
          var status = section.querySelector('.semantic-cart-status');
          if (!status) {
            status = document.createElement('p');
            status.className = 'semantic-cart-status visually-hidden';
            status.setAttribute('aria-live', 'polite');
            section.appendChild(status);
          }
          status.textContent = (button.closest('article').querySelector('h3')?.textContent || 'Item') + ' added to cart.';
        });
      });
    }
    bindCartButtons('.xr-section-86 .xr-tool-shop button');
    bindCartButtons('.xr-section-104 .xr-bestsellers article button:last-child');

    setTimeout(function () {
      var socialMarkup = "<a href='#contact' aria-label='X profile'><i class='fa-brands fa-x-twitter' aria-hidden='true'></i></a><a href='#contact' aria-label='LinkedIn profile'><i class='fa-brands fa-linkedin-in' aria-hidden='true'></i></a><a href='#contact' aria-label='Instagram profile'><i class='fa-brands fa-instagram' aria-hidden='true'></i></a><a href='#contact' aria-label='Facebook profile'><i class='fa-brands fa-facebook-f' aria-hidden='true'></i></a>";

      document.querySelectorAll('.xr-section-99 .xr-team-row footer').forEach(function (footer) {
        footer.innerHTML = socialMarkup;
      });

      var teamCard = document.querySelector('.xr-section-150 .xr-team-carousel article:nth-of-type(2)');
      var delayedSocial = document.querySelector('.xr-section-150 .xr-social-stack');
      if (!delayedSocial && teamCard) {
        delayedSocial = document.createElement('div');
        delayedSocial.className = 'xr-social-stack';
        teamCard.appendChild(delayedSocial);
      }
      if (delayedSocial) delayedSocial.innerHTML = socialMarkup;
    }, 30);
  }

  if (window.jQuery) window.jQuery(apply);
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(apply, 0); });
  else setTimeout(apply, 0);
})();
