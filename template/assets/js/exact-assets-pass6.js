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
      "<div class='xr30-copy'><h2>We don’t just work on lawns we bring<br>them to life. Our team combines skill,<br>dedication, &amp; eco-friendly practices.</h2><p>At Barfi, we believe every lawn deserves expert care. Our mission is deliver reliable, affordable, and professional lawn services that make your yard look its best all year long. From mowing and fertilization weed control and seasonal maintenance, we’re not you covered.</p><section><article><span class='xr30-feature-icon'><i class='fa-solid fa-seedling' aria-hidden='true'></i></span><div><strong>Committed to Greener Lawns</strong><p>Whether you want a neat refresh or full lawn transformation, our experts are here to help you every step of the way.</p></div></article><article><span class='xr30-feature-icon'><i class='fa-solid fa-shield-heart' aria-hidden='true'></i></span><div><strong>Your Trusted Lawn Care Experts</strong><p>Since day one, we’ve built our reputation on trust, quality, and attention to detail. Our passion for lawns shows in every.</p></div></article></section><a href='#contact'><span><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></span> Learn More About Us</a></div>",
      "</div>"
    ].join('');
  }

  function apply() {
    [30, 147].forEach(applyAbout);
  }

  if (window.jQuery) {
    window.jQuery(apply);
  } else if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(apply, 0); });
  } else {
    setTimeout(apply, 0);
  }
})();
