(function () {
  'use strict';

  function host(id) {
    return document.querySelector('.xr-section-' + id + ' .container-xl');
  }

  function applySection97() {
    var target = host(97);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-97 xr-97-exact'>",
      "<header><small><span></span><i class='fa-solid fa-arrow-right-long' aria-hidden='true'></i> Outdoor Living Blog</small><h2>Landscaping Tips &amp; Insights</h2></header>",
      "<div class='xr97-exact-cards'><a href='#services' aria-label='Read Stay Informed, Inspired, Ahead Your Go-To Source For All Things Landscaping'><img src='assets/images/exact/s97-card-1.jpg' alt='Landscaping article about staying informed and inspired'></a><a href='#services' aria-label='Read Fresh Stories, Expert Tips, and Creative Ideas to Transform Your Outdoor Space'><img src='assets/images/exact/s97-card-2.jpg' alt='Landscaping article with expert outdoor-space tips'></a></div>",
      "</div>"
    ].join('');
  }

  function applySection101() {
    var target = host(101);
    if (!target) return;
    var labels = ['Vertical Garden Installations', 'Outdoor and Landscape Design', 'Collaborative Plant Sourcing'];
    target.innerHTML = "<div class='xr xr-101 xr-101-exact'><h2>Our Green<br>Services</h2><div class='xr101-exact-cards'>" + labels.map(function (label, index) { return "<a href='#services' aria-label='View " + label + "'><img src='assets/images/exact/s101-card-" + (index + 1) + ".jpg' alt='" + label + " service card'></a>"; }).join('') + "</div></div>";
  }

  function applySection114() {
    var target = host(114);
    if (!target) return;
    var labels = ['Comprehensive Services', 'Stunning Landscapes', 'Cutting-Edge Technology'];
    target.innerHTML = [
      "<div class='xr xr-114 xr-114-exact'>",
      "<header><h2>Enhance Your Property with Store-re<br>Landscaping</h2><p>At Store-re Landscaping, we create stunning, thriving outdoor spaces with<br>seasoned professionals.</p></header>",
      "<div class='xr114-exact-cards'>" + labels.map(function (label, index) { return "<a href='#contact' aria-label='Order " + label + "'><img src='assets/images/exact/s114-card-" + (index + 1) + ".jpg' alt='" + label + " service offer'></a>"; }).join('') + "</div>",
      "</div>"
    ].join('');
  }

  function applySection123() {
    var target = host(123);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-123 xr-123-exact'>",
      "<header><div><small>Our Projects</small><h2>Our Recent Projects</h2></div><nav aria-label='Project carousel'><button type='button' aria-label='Previous projects'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i></button><button type='button' aria-label='Next projects'><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button></nav></header>",
      "<div class='xr123-exact-cards'><span aria-hidden='true'><img src='assets/images/exact/s123-card-1-partial.jpg' alt=''></span><a href='#projects' aria-label='View City Garden Courtyard'><img src='assets/images/exact/s123-card-2.jpg' alt='City Garden Courtyard project'></a><a href='#projects' aria-label='View Green Haven Backyard'><img src='assets/images/exact/s123-card-3.jpg' alt='Green Haven Backyard project'></a><a href='#projects' aria-label='View Sunny Lawn Retreat'><img src='assets/images/exact/s123-card-4.jpg' alt='Sunny Lawn Retreat project'></a><span aria-hidden='true'><img src='assets/images/exact/s123-card-5-partial.jpg' alt=''></span></div>",
      "</div>"
    ].join('');
  }

  function apply() {
    applySection97();
    applySection101();
    applySection114();
    applySection123();
    var faq = host(132);
    if (faq) {
      var items = faq.querySelectorAll('details');
      if (items[1]) items[1].open = true;
    }
  }

  if (window.jQuery) {
    window.jQuery(apply);
  } else if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(apply, 0); });
  } else {
    setTimeout(apply, 0);
  }
})();
