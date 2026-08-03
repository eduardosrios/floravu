(function () {
  'use strict';

  function host(id) { return document.querySelector('.xr-section-' + id + ' .container-xl'); }

  function formStatus(form, message) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var status = form.parentElement.querySelector('[aria-live]');
      if (status) status.textContent = message;
    });
  }

  function applySection87() {
    var target = host(87); if (!target) return;
    target.innerHTML = "<div class='xr xr-87 xr-87-exact'><div><h2>Get in Touch for Expert Tree Care!</h2><p>Have questions or need immediate assistance? Reach out to us now and let our<br>experienced team provide the best solution for your trees.</p><form><label class='visually-hidden' for='xr87-email'>Email address</label><input id='xr87-email' type='email' required placeholder='Your Email Address...'><button type='submit'>SUBSCRIBE <span><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></span></button></form><small aria-live='polite'></small></div></div>";
    formStatus(target.querySelector('form'), 'Subscribed.');
  }

  function applySection94() {
    var target = host(94); if (!target) return;
    target.innerHTML = "<div class='xr xr-94 xr-94-exact'><h2>Get <span>20% Off</span> Your Next Order</h2><form><label class='visually-hidden' for='xr94-email'>Email address</label><i class='fa-regular fa-envelope' aria-hidden='true'></i><input id='xr94-email' type='email' required placeholder='Enter your email'><button type='submit'>SUBSCRIBE</button></form><small aria-live='polite'></small></div>";
    formStatus(target.querySelector('form'), 'Discount request received.');
  }

  function stat(icon, value, label) { return "<article><i class='fa-solid fa-" + icon + "' aria-hidden='true'></i><div><b>" + value + "</b><span>" + label + "</span></div></article>"; }
  function applySection96() {
    var target = host(96); if (!target) return;
    target.innerHTML = "<div class='xr xr-96 xr-96-exact'><div><small><i class='fa-regular fa-lightbulb' aria-hidden='true'></i> Testimonials</small><h2>Genuine Reviews from Garden<br>Transformation Projects</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor<br>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p></div><section>" + stat('face-smile','4.9/5','Average Rating') + stat('users','98%','Customer Satisfaction') + stat('flag','95%','Project Completion') + stat('house','500+','Projects Completed') + "</section></div>";
  }

  function applySection100() {
    var target = host(100); if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-100 xr-100-exact'><header><div><small>How It Works</small><h2>Step-By-Step To A<br>Beautiful Garden</h2></div><p>At Lawnzy, we’ve made it easy to get<br>your dream garden without any stress<br>or confusion. Our process is simple.</p></header><div class='xr100-steps'>",
      "<article><b>01</b><h3>Schedule Your Service</h3><p>Book your gardening appointment in just a few clicks or with a quick call. Choose a time that works best for you.</p></article>",
      "<article><b>02</b><h3>Professional Garden Care</h3><p>Our skilled gardeners handle everything—from mowing and planting to pruning and cleanup. We use the right tools.</p></article>",
      "<article><b>03</b><h3>Enjoy Your Green Space</h3><p>Sit back, relax, and enjoy your perfectly maintained garden. Whether it’s a cozy corner or a large backyard.</p></article>",
      "</div></div>"
    ].join('');
  }

  function applySection105() {
    var target = host(105); if (!target) return;
    target.innerHTML = "<div class='xr xr-105 xr-105-exact'><h2>Join Our Newsletter</h2><p>Sign up for our email newsletter to get exclusive discounts, updates &amp; more !</p><form><label class='visually-hidden' for='xr105-email'>Email address</label><input id='xr105-email' type='email' required placeholder='Enter your email here'><button type='submit'>Subscribe</button></form><small aria-live='polite'></small></div>";
    formStatus(target.querySelector('form'), 'Subscribed.');
  }

  function faq(summary, body, open) { return "<details" + (open ? ' open' : '') + "><summary>" + summary + "</summary>" + (body ? '<p>' + body + '</p>' : '') + "</details>"; }
  function applySection154() {
    var target = host(154); if (!target) return;
    target.innerHTML = "<div class='xr xr-154 xr-154-exact'><h2>Still Have Questions?</h2><div class='xr154-faq'><div>" + faq('How I Can Buy Product?','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',true) + faq('Do I Need To Make A Payment?','',false) + faq('Do You Provide Credit Payment?','',false) + faq('Can I Get Tracking Item?','',false) + "</div><div>" + faq('How I Can Contact This?','',false) + faq('Can I Get Refund?','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',true) + faq('How To Take The Product?','',false) + faq('This Is Trusted?','',false) + "</div></div></div>";
  }

  function apply() { applySection87(); applySection94(); applySection96(); applySection100(); applySection105(); applySection154(); }
  if (window.jQuery) window.jQuery(apply);
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(apply, 0); });
  else setTimeout(apply, 0);
})();
