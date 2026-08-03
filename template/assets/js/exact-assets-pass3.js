(function () {
  'use strict';

  function host(id) {
    return document.querySelector('.xr-section-' + id + ' .container-xl');
  }

  function applySection11() {
    var target = host(11);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-11 xr-11-exact'>",
      "<header><h2>Here are the best seller</h2><a href='#contact'>SHOP ALL PLANTS <span><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></span></a></header>",
      "<div class='xr11-exact-cards'>",
      "<a href='#contact' aria-label='Buy Monstera Deliciosa Plant for $19'><img src='assets/images/exact/s11-card-1.jpg' alt='Monstera Deliciosa Plant, buy now for $19'></a>",
      "<a href='#contact' aria-label='Buy Pink Anthurium for $88'><img src='assets/images/exact/s11-card-2.jpg' alt='Pink Anthurium, buy now for $88'></a>",
      "<a href='#contact' aria-label='Buy Aglaonema Red Plant for $38'><img src='assets/images/exact/s11-card-3.jpg' alt='Aglaonema Red Plant, buy now for $38'></a>",
      "</div>",
      "</div>"
    ].join('');
  }

  function applySection14() {
    var target = host(14);
    if (!target) return;
    var products = [
      ['Monstera', '$45.00'], ['Rubber Plant', '$40.00'], ['Snake Plant', '$30.00'], ['Peace Lily', '$35.00'],
      ['Pothos', '$28.00'], ['Aloe Vera', '$25.00'], ['ZZ Plant', '$32.00'], ['Fiddle Fig', '$60.00']
    ];
    target.innerHTML = "<div class='xr xr-14 xr-14-exact'><div class='xr14-exact-cards'>" + products.map(function (product, index) {
      return "<a href='#contact' aria-label='View " + product[0] + ", " + product[1] + "'><img src='assets/images/exact/s14-card-" + (index + 1) + ".jpg' alt='" + product[0] + ", " + product[1] + "'></a>";
    }).join('') + "</div></div>";
  }

  function applySection86() {
    var target = host(86);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-86 xr-86-exact'>",
      "<header>",
      "<div><small><i class='fa-solid fa-leaf' aria-hidden='true'></i> SHOP &amp; ALL PRODUCTS</small><h2>Your Tree Care Shop: Tools,<br>Products, &amp; Services</h2></div>",
      "<a href='#contact'>CONTACT US <span><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></span></a>",
      "</header>",
      "<div class='xr86-exact-cards'>",
      "<button type='button' aria-label='Add Chain saw, $237.99, to cart'><img src='assets/images/exact/s86-card-1.jpg' alt='Tree Services, Chain saw, $237.99'></button>",
      "<button type='button' aria-label='Add Grasscutter Grass, $168.39, to cart'><img src='assets/images/exact/s86-card-2.jpg' alt='Tree Services, Grasscutter Grass, $168.39'></button>",
      "<button type='button' aria-label='Add Gardening tools, $21.99, to cart'><img src='assets/images/exact/s86-card-3.jpg' alt='Tree Services, Gardening tools, $21.99'></button>",
      "<button type='button' aria-label='Add Planting trees, $468.99, to cart'><img src='assets/images/exact/s86-card-4.jpg' alt='Tree Services, Planting trees, $468.99'></button>",
      "</div>",
      "<p class='visually-hidden' aria-live='polite'></p>",
      "</div>"
    ].join('');

    var status = target.querySelector('[aria-live]');
    target.querySelectorAll('.xr86-exact-cards button').forEach(function (button) {
      button.addEventListener('click', function () {
        status.textContent = button.getAttribute('aria-label').replace(/^Add /, '').replace(/ to cart$/, '') + ' added to cart.';
      });
    });
  }

  function apply() {
    applySection11();
    applySection14();
    applySection86();
  }

  if (window.jQuery) {
    window.jQuery(apply);
  } else if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(apply, 0); });
  } else {
    setTimeout(apply, 0);
  }
})();
