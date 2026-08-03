(function () {
  'use strict';

  function host(id) {
    return document.querySelector('.xr-section-' + id + ' .container-xl');
  }

  function applySection24() {
    var target = host(24);
    if (!target) return;
    var labels = ['Garden Design', 'Irrigation System', 'Tree Services', 'Hedge Cutting'];
    target.innerHTML = [
      "<div class='xr xr-24 xr-24-exact'>",
      "<img class='xr24-decor-left' src='assets/images/exact/s24-decor-left.png' alt='' aria-hidden='true'><img class='xr24-decor-right' src='assets/images/exact/s24-decor-right.png' alt='' aria-hidden='true'><img class='xr24-decor-soil' src='assets/images/exact/s24-decor-soil.png' alt='' aria-hidden='true'>",
      "<header><small>OUR SERVICES</small><h2>What Can We Offer</h2><p>Greenaura mission is to provide our customers with responsive service<br>and unsurpassed quality at an affordable price.</p></header>",
      "<div class='xr24-exact-cards'>" + labels.map(function (label, index) { return "<a href='#services' aria-label='Read more about " + label + "'><img src='assets/images/exact/s24-card-" + (index + 1) + ".jpg' alt='" + label + " service'></a>"; }).join('') + "</div>",
      "</div>"
    ].join('');
  }

  function applySection90() {
    var target = host(90);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-90 xr-90-exact'>",
      "<img class='p1' src='assets/images/exact/s90-photo-1.jpg' alt='Lawn care specialist'><img class='p2' src='assets/images/exact/s90-photo-2.jpg' alt='Gardener mowing a lawn'><img class='p3' src='assets/images/exact/s90-photo-3.jpg' alt='Lawn mower on grass'><img class='p4' src='assets/images/exact/s90-photo-4.jpg' alt='Garden specialist'><img class='p5' src='assets/images/exact/s90-photo-5.jpg' alt='Gardener trimming a hedge'><img class='p6' src='assets/images/exact/s90-photo-6.jpg' alt='Gardener maintaining shrubs'><img class='p7' src='assets/images/exact/s90-photo-7.jpg' alt='Gardener working on a lawn'>",
      "<div><p>At EarthSlice, we make lawn care simple and easy to understand.<br>No jargon. No pressure. Just solutions that actually work, for your lawn.</p><h2>Simple, transparent, and<br>built on real science.</h2></div>",
      "</div>"
    ].join('');
  }

  function applySection95() {
    var target = host(95);
    if (!target) return;
    var labels = ['Eco-Friendly Practices', 'Affordable Packages', 'Eco-Friendly Practices', 'Boosts Property Value', 'One-Stop Solution'];
    target.innerHTML = [
      "<div class='xr xr-95 xr-95-exact'>",
      "<header><small>WHY CHOOSE US</small><h2>Transform Your Garden into a<br>Haven for Well-Being</h2></header>",
      "<div class='xr95-exact-cards'>" + labels.map(function (label, index) { return "<a class='c" + (index + 1) + "' href='#services' aria-label='Learn more about " + label + "'><img src='assets/images/exact/s95-card-" + (index + 1) + ".jpg' alt='" + label + " benefit'></a>"; }).join('') + "</div>",
      "</div>"
    ].join('');
  }

  function apply() {
    applySection24();
    applySection90();
    applySection95();
    setTimeout(function () {
      var faq = host(132);
      if (!faq) return;
      var items = faq.querySelectorAll('details');
      if (items[1]) items[1].setAttribute('open', '');
    }, 100);
  }

  if (window.jQuery) {
    window.jQuery(apply);
  } else if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(apply, 0); });
  } else {
    setTimeout(apply, 0);
  }
})();
