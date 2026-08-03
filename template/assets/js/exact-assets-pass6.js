(function () {
  'use strict';

  function host(id) {
    return document.querySelector('.xr-section-' + id + ' .container-xl');
  }

  function applyAbout(id) {
    var target = host(id);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-" + id + " xr-30-exact'>",
      "<div class='xr30-visual'><small><i class='fa-solid fa-sun' aria-hidden='true'></i> About Us</small><img src='assets/images/exact/s30-expert.jpg' alt='Lawn care expert trimming a plant'></div>",
      "<div class='xr30-copy'><h2>We don’t just work on lawns we bring<br>them to life. Our team combines skill,<br>dedication, &amp; eco-friendly practices.</h2><p>At Barfi, we believe every lawn deserves expert care. Our mission is deliver reliable, affordable, and professional lawn services that make your yard look its best all year long. From mowing and fertilization weed control and seasonal maintenance, we’re not you covered.</p><section><article><img src='assets/images/exact/s30-icon-1.jpg' alt=''><div><strong>Committed to Greener Lawns</strong><p>Whether you want a neat refresh or full lawn transformation, our experts are here to help you every step of the way.</p></div></article><article><img src='assets/images/exact/s30-icon-2.jpg' alt=''><div><strong>Your Trusted Lawn Care Experts</strong><p>Since day one, we’ve built our reputation on trust, quality, and attention to detail. Our passion for lawns shows in every.</p></div></article></section><a href='#contact'><span><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></span> Learn More About Us</a></div>",
      "</div>"
    ].join('');
  }

  function applySection99() {
    var target = host(99);
    if (!target) return;
    var labels = ['Rhonda Rhodes, Senior Landscape Expert', 'Patricia Sanders, Landscape Design Specialist', 'Emily Williams, Horticultural Consultant'];
    target.innerHTML = [
      "<div class='xr xr-99 xr-99-exact'>",
      "<header><div><small>— OUR TEAM —</small><h2>Meet Our Green Thumb Experts</h2></div><nav aria-label='Team carousel'><button type='button' aria-label='Previous experts'><i class='fa-solid fa-chevron-left' aria-hidden='true'></i></button><button type='button' aria-label='Next experts'><i class='fa-solid fa-chevron-right' aria-hidden='true'></i></button></nav></header>",
      "<div class='xr99-exact-cards'>" + labels.map(function (label, index) { return "<a href='#contact' aria-label='Contact " + label + "'><img src='assets/images/exact/s99-card-" + (index + 1) + ".jpg' alt='" + label + "'></a>"; }).join('') + "</div>",
      "</div>"
    ].join('');
  }

  function applySection104() {
    var target = host(104);
    if (!target) return;
    var labels = ['Monstera Deliciosa plant', 'Bamboo plant', 'Money plant', 'Snake plant'];
    target.innerHTML = [
      "<div class='xr xr-104 xr-104-exact'>",
      "<header><h2>Bestsellers</h2><nav aria-label='Bestseller carousel'><button type='button' aria-label='Previous products'><i class='fa-solid fa-arrow-left-long' aria-hidden='true'></i></button><button type='button' aria-label='Next products'><i class='fa-solid fa-arrow-right-long' aria-hidden='true'></i></button></nav></header>",
      "<div class='xr104-exact-cards'>" + labels.map(function (label, index) { return "<a href='#contact' aria-label='View " + label + "'><img src='assets/images/exact/s104-card-" + (index + 1) + ".jpg' alt='" + label + " bestseller card'></a>"; }).join('') + "</div>",
      "</div>"
    ].join('');
  }

  function applySection150() {
    var target = host(150);
    if (!target) return;
    var labels = ['Patricia Sanders, Lead Landscaper', 'Sarah Thompson, Lawn Care Specialist', 'David Carter, Snow Removal Supervisor', 'Michael Brown, Customer Care Manager'];
    target.innerHTML = [
      "<div class='xr xr-150 xr-150-exact'>",
      "<header><small><i class='fa-solid fa-sun' aria-hidden='true'></i> Our Team</small><h2>Our Skilled Landscaping And<br>Snow Removal Experts</h2></header>",
      "<button class='xr150-prev' type='button' aria-label='Previous experts'><i class='fa-solid fa-chevron-left' aria-hidden='true'></i></button>",
      "<div class='xr150-exact-cards'>" + labels.map(function (label, index) { return "<a href='#contact' aria-label='Contact " + label + "'><img src='assets/images/exact/s150-card-" + (index + 1) + ".jpg' alt='" + label + "'></a>"; }).join('') + "</div>",
      "<button class='xr150-next' type='button' aria-label='Next experts'><i class='fa-solid fa-chevron-right' aria-hidden='true'></i></button>",
      "</div>"
    ].join('');
  }

  function apply() {
    [30, 147].forEach(applyAbout);
    applySection99();
    applySection104();
    applySection150();
  }

  if (window.jQuery) {
    window.jQuery(apply);
  } else if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(apply, 0); });
  } else {
    setTimeout(apply, 0);
  }
})();
