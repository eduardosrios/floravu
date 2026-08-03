(function () {
  'use strict';

  function solid(name) { return '<i class="fa-solid fa-' + name + '" aria-hidden="true"></i>'; }
  function brand(name) { return '<i class="fa-brands fa-' + name + '" aria-hidden="true"></i>'; }

  function apply() {
    var contact = document.querySelector('.xr-section-86 .xr-86 header>a');
    if (contact) contact.innerHTML = 'CONTACT US&nbsp; ' + solid('circle');
    var subscribe = document.querySelector('.xr-section-87 button[type="submit"]');
    if (subscribe) subscribe.innerHTML = 'SUBSCRIBE&nbsp; ' + solid('circle');

    document.querySelectorAll('.xr-section-95 .xr-benefit-mosaic article>b,.xr-section-101 .xr-green-services>b').forEach(function (node) {
      node.innerHTML = solid('arrow-up-right-from-square');
      node.setAttribute('aria-hidden', 'true');
    });

    document.querySelectorAll('.xr-section-99 .xr-team-row footer').forEach(function (footer) {
      footer.innerHTML = brand('x-twitter') + '&nbsp; ' + brand('linkedin-in') + '&nbsp; ' + brand('instagram') + '&nbsp; ' + brand('facebook-f');
      footer.setAttribute('aria-label', 'Social profiles');
    });

    document.querySelectorAll('.xr-section-98 .xr-lawn-slider a,.xr-section-148 .xr-lawn-slider a').forEach(function (link) {
      link.innerHTML = solid('circle') + '&nbsp; Read More';
    });

    document.querySelectorAll('.xr-section-29 .xr-accordion-list>a:not(.active)>b').forEach(function (node) {
      node.innerHTML = solid('chevron-down');
    });
    var active = document.querySelector('.xr-section-29 .xr-accordion-list>a.active>b');
    if (active) active.innerHTML = solid('circle');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(apply, 3); });
  } else {
    setTimeout(apply, 3);
  }
})();
