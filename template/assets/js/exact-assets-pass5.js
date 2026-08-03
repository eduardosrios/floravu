(function () {
  'use strict';

  function host(id) {
    return document.querySelector('.xr-section-' + id + ' .container-xl');
  }

  function serviceCards(prefix, count) {
    var labels = prefix === 's18'
      ? ['Landscape Design', 'Seasonal Plantings', 'Garden Renovation']
      : ['Seasonal Plantings', 'Irrigation System', 'Landscape Design', 'Garden Renovation'];
    return Array.from({ length: count }, function (_, index) {
      return "<a href='#services' aria-label='Read about " + labels[index] + "'><img src='assets/images/exact/" + prefix + "-card-" + (index + 1) + ".jpg' alt='" + labels[index] + " service card'></a>";
    }).join('');
  }

  function applySection18() {
    var target = host(18);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-18 xr-18-exact'>",
      "<div class='xr18-exact-cards'>" + serviceCards('s18', 3) + "</div>",
      "<div class='xr18-about'>",
      "<img src='assets/images/exact/s18-about-left.jpg' alt='Greenaura gardening specialist'>",
      "<div><small><i class='fa-solid fa-seedling' aria-hidden='true'></i> About Us</small><h2>About Greenaura</h2><p>At Greenaura, we are committed to environmentally sustainable gardening practices that promote biodiversity, conserve resources, and minimize our environmental footprint.</p><section><strong><i class='fa-solid fa-people-group' aria-hidden='true'></i> Customized<br>Solutions</strong><strong><i class='fa-solid fa-trowel' aria-hidden='true'></i> Customized<br>Solutions</strong></section></div>",
      "</div>",
      "</div>"
    ].join('');
  }

  function applySection134() {
    var target = host(134);
    if (!target) return;
    target.innerHTML = "<div class='xr xr-134 xr-134-exact'><div class='xr18-exact-cards'>" + serviceCards('s18', 3) + "</div></div>";
  }

  function craftHeader() {
    return "<header><small><i class='fa-solid fa-seedling' aria-hidden='true'></i> Our Services</small><h2>Crafting Outdoor<br>Masterpieces</h2></header>";
  }

  function applySection19() {
    var target = host(19);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-19 xr-19-exact'>",
      "<img class='xr19-about-strip' src='assets/images/exact/s19-about-strip.jpg' alt='Greenaura experience and satisfaction metrics'>",
      "<div class='xr19-service-preview'>" + craftHeader() + "<div class='xr136-exact-cards'>" + serviceCards('s136', 4) + "</div></div>",
      "</div>"
    ].join('');
  }

  function applySection20() {
    var target = host(20);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-20 xr-20-exact'>",
      "<div class='xr20-service-tail'><div class='xr136-exact-cards'>" + serviceCards('s136', 4) + "</div><p>We are largest independent Gardening company <a href='#services'>View all Service</a></p></div>",
      "<div class='xr20-best-work'><small><i class='fa-solid fa-seedling' aria-hidden='true'></i> Project</small><h2>Our Best Work</h2><nav aria-label='Project filters'><button class='active' type='button'>All</button><button type='button'>Garden Care</button><button type='button'>Lawn Care</button><button type='button'>Planting</button></nav></div>",
      "</div>"
    ].join('');
  }

  function applySection136() {
    var target = host(136);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-136 xr-136-exact'>",
      craftHeader(),
      "<div class='xr136-exact-cards'>" + serviceCards('s136', 4) + "</div>",
      "<p>We are largest independent Gardening company <a href='#services'>View all Service</a></p>",
      "</div>"
    ].join('');
  }

  function apply() {
    applySection18();
    applySection134();
    applySection19();
    applySection20();
    applySection136();
  }

  if (window.jQuery) {
    window.jQuery(apply);
  } else if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(apply, 0); });
  } else {
    setTimeout(apply, 0);
  }
})();
