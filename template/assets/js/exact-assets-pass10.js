(function () {
  'use strict';

  function host(id) {
    return document.querySelector('.xr-section-' + id + ' .container-xl');
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

  function apply() {
    applySection21();
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
