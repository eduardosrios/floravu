(function () {
  'use strict';

  function host(id) {
    return document.querySelector('.xr-section-' + id + ' .container-xl');
  }

  function applySection13() {
    var target = host(13);
    if (!target) return;
    var labels = ['Healthy Plants', 'Fast Delivery', 'Easy Care', 'Expert Support'];
    target.innerHTML = "<div class='xr xr-13 xr-13-exact'>" + labels.map(function (label, index) { return "<div role='img' aria-label='" + label + " benefit'><img src='assets/images/exact/s13-item-" + (index + 1) + ".jpg' alt=''></div>"; }).join('') + "</div>";
  }

  function applySection21() {
    var target = host(21);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-21 xr-21-exact'>",
      "<img class='xr21-logos' src='assets/images/exact/s21-logo-strip.jpg' alt='Partner organizations'>",
      "<div class='xr21-copy'><h2>Real Impact on<br>Environment</h2><p>Lorem ipsum dolor sit amet, adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our work protects the environment and supports people.</p><p>Lorem ipsum has been the industry’s standard dummy text since the 1500s, when an unknown printer took a galley of type.</p></div>",
      "<div class='xr21-mosaic'><span class='blank'>In Business</span><strong class='dark'>Climate<br>Impact</strong><strong class='light'>60%</strong><strong class='dark'>Trees<br>Saved</strong><strong class='light'>1.5 M</strong><img src='assets/images/exact/s21-photo-2.jpg' alt='Tree planting'><img src='assets/images/exact/s21-photo-1.jpg' alt='Lush planted landscape'></div>",
      "</div>"
    ].join('');
  }

  function applySection28() {
    var target = host(28);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-28 xr-28-exact'>",
      "<img class='xr28-side-left' src='assets/images/exact/s28-side-left.png' alt='' aria-hidden='true'><img class='xr28-side-right' src='assets/images/exact/s28-side-right.png' alt='' aria-hidden='true'>",
      "<small class='xr28-label'>ABOUT US</small><h2>Growing Green Together</h2><p class='xr28-copy-a'>At GardenAura, we are gardening story starts, whether you’re just starting out or nurturing a full garden.</p><p class='xr28-copy-b'>And is born by a love for nature, demonstrated urban quality seeds, rich, essential soil, and expert gardening services.</p><i class='fa-solid fa-arrow-down-left xr28-arrow' aria-hidden='true'></i>",
      "<img class='xr28-left-card' src='assets/images/exact/s28-left-card.jpg' alt='130 plus satisfied customers'><img class='xr28-middle-photo' src='assets/images/exact/s28-middle-photo.jpg' alt='Hands planting seedlings'><img class='xr28-green-card' src='assets/images/exact/s28-green-card.jpg' alt='Three thousand plus garden products'><img class='xr28-right-card' src='assets/images/exact/s28-right-card.jpg' alt='20 plus service providers'>",
      "</div>"
    ].join('');
  }

  function apply() {
    applySection13(); applySection21(); applySection28();
    var titleSpans = document.querySelectorAll('.xr-section-15 .xr15-main h2 span');
    titleSpans.forEach(function (span) { span.style.setProperty('font-size', 'inherit', 'important'); });
    var workshopIcons = document.querySelectorAll('.xr-section-107 .xr107-left i, .xr-section-107 .xr107-right i');
    var classes = ['fa-solid fa-seedling', 'fa-solid fa-fan', 'fa-solid fa-house-chimney', 'fa-solid fa-mountain-sun', 'fa-solid fa-leaf', 'fa-solid fa-faucet-drip'];
    workshopIcons.forEach(function (icon, index) { if (classes[index]) icon.className = classes[index]; });
  }

  if (window.jQuery) window.jQuery(apply);
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(apply, 0); });
  else setTimeout(apply, 0);
})();
