(function () {
  'use strict';

  function host(id) {
    return document.querySelector('.xr-section-' + id + ' .container-xl');
  }

  function productCards(prefix, count, labels) {
    return Array.from({ length: count }, function (_, index) {
      return "<a href='#contact' aria-label='" + labels[index] + "'><img src='assets/images/exact/" + prefix + "-card-" + (index + 1) + ".jpg' alt='" + labels[index] + "'></a>";
    }).join('');
  }

  function applyThinPlants(id) {
    var target = host(id);
    if (!target) return;
    var labels = ['Buy Arborifolia for $75', 'Buy Arborvitae for $55', 'Buy Arborivite for $20', 'Buy Arborvitae for $82', 'View faded Arbor plant'];
    target.innerHTML = "<div class='xr xr-" + id + " xr-22-exact'><h2>Our Plants</h2><div class='xr22-exact-cards'>" + productCards('s22', 5, labels) + "</div></div>";
  }

  function applyGreenProducts(id) {
    var target = host(id);
    if (!target) return;
    var labels = ['View Dumb Cane, $15.99', 'View Spider Plant, $12.99', 'View Spotted Ever, $18.99', 'View Freddie Plant, $10.99'];
    target.innerHTML = [
      "<div class='xr xr-" + id + " xr-27-exact'>",
      "<header><h2>Make your home beautiful<br>with these products</h2><nav aria-label='Product carousel'><button type='button' aria-label='Previous products'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i></button><button type='button' aria-label='Next products'><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button></nav></header>",
      "<div class='xr27-exact-cards'>" + productCards('s27', 4, labels) + "</div>",
      "</div>"
    ].join('');
  }

  function applyLawnSolutions(id) {
    var target = host(id);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-" + id + " xr-98-exact'>",
      "<header><div><small><i class='fa-solid fa-sun' aria-hidden='true'></i> Our Services</small><h2>Full-Service Lawn Solutions<br>For Homes &amp; Businesses</h2></div><nav aria-label='Service carousel'><button type='button' aria-label='Previous services'><i class='fa-solid fa-chevron-left' aria-hidden='true'></i></button><button type='button' aria-label='Next services'><i class='fa-solid fa-chevron-right' aria-hidden='true'></i></button></nav></header>",
      "<div class='xr98-exact-cards'>",
      "<a href='#services' aria-label='Read about lawn mowing and maintenance'><img src='assets/images/exact/s98-card-1.jpg' alt='Lawn Mowing and Maintenance service'></a>",
      "<a href='#services' aria-label='Read about fertilization and soil treatment'><img src='assets/images/exact/s98-card-2.jpg' alt='Fertilization and Soil Treatment service'></a>",
      "<a href='#services' aria-label='Read about weed control and prevention'><img src='assets/images/exact/s98-card-3.jpg' alt='Weed Control and Prevention service'></a>",
      "<span aria-hidden='true'><img src='assets/images/exact/s98-card-4-partial.jpg' alt=''></span>",
      "</div>",
      "</div>"
    ].join('');
  }

  function apply() {
    [22, 140].forEach(applyThinPlants);
    [27, 92, 143].forEach(applyGreenProducts);
    [98, 148].forEach(applyLawnSolutions);
  }

  if (window.jQuery) {
    window.jQuery(apply);
  } else if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(apply, 0); });
  } else {
    setTimeout(apply, 0);
  }
})();
