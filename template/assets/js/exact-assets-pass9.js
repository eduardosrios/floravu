(function () {
  'use strict';

  function host(id) {
    return document.querySelector('.xr-section-' + id + ' .container-xl');
  }

  function applySection15() {
    var target = host(15);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-15 xr-15-exact'>",
      "<div class='xr15-side'><small>Plant Online</small><h3>Plants for boosting<br>and purifying</h3><img src='assets/images/exact/s15-plant.jpg' alt='Green indoor plant'></div>",
      "<div class='xr15-main'><h2><span>TREE</span><img src='assets/images/exact/s15-flower.jpg' alt='Flower'><span>LOVE</span><br>LIFE SHINE</h2><a href='#services'>Choose Haven <i class='fa-solid fa-arrow-right' aria-hidden='true'></i></a><hr><small>Gardening Benefits</small><footer><p>A 2007 study discovered that the soil bacteria Mycobacterium vaccae increases serotonin, which helps to improve mood and reduce anxiety.</p><b>01</b></footer></div>",
      "<img class='xr15-woman' src='assets/images/exact/s15-woman.jpg' alt='Gardener caring for plants'>",
      "</div>"
    ].join('');
  }

  function applySection17() {
    var target = host(17);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-17 xr-17-exact'>",
      "<h2 class='xr17-rooted'>ROOTED IN<br>PURE BLISS</h2><p class='xr17-copy'>These succulents are ideal for use in<br>your indoor home conditions.</p><a class='xr17-button' href='#services'>Learn Care <i class='fa-solid fa-arrow-right' aria-hidden='true'></i></a>",
      "<img class='xr17-center' src='assets/images/exact/s17-center.jpg' alt='Potted plant over a yellow circle'>",
      "<div class='xr17-right'><small>About Plants</small><h3>FRESH ROOTS<br>PURE JOY</h3><img src='assets/images/exact/s17-flower.jpg' alt='Red flower'></div>",
      "<img class='xr17-bottom-flowers' src='assets/images/exact/s17-bottom-flowers.jpg' alt='Colorful flowers'><h2 class='xr17-evergreen'>EVERGREEN BLISS</h2><img class='xr17-leaf' src='assets/images/exact/s17-leaf.jpg' alt='Green leaf'><p class='xr17-leaf-copy'>Little touch of green<br>makes Life brighter.</p>",
      "</div>"
    ].join('');
  }

  function workshopFeature(icon, label) {
    return "<article><span><i class='fa-solid fa-" + icon + "' aria-hidden='true'></i></span><strong>" + label + "</strong></article>";
  }

  function applySection107() {
    var target = host(107);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-107 xr-107-exact'>",
      "<header><small>FEATURED WORKSHOPS</small><h2>Get your Hands Dirty and Grow Your Skills–<br>Join One of Our Upcoming Garden Workshops</h2></header>",
      "<div class='xr107-left'>" + workshopFeature('seedling', 'Edible &amp;<br>Sustainable<br>Gardening') + workshopFeature('flower', 'Floral<br>Design') + workshopFeature('warehouse', 'Greenhouse<br>Growing') + "</div>",
      "<img class='xr107-center' src='assets/images/exact/s107-center.jpg' alt='Garden workshop with pots and tools'>",
      "<div class='xr107-right'>" + workshopFeature('sun-plant-wilt', 'Landscape<br>Design') + workshopFeature('leaf', 'Seasonal<br>&amp; Specialized<br>Gardening') + workshopFeature('faucet-drip', 'Youth &amp; Junior<br>Gardening') + "</div>",
      "</div>"
    ].join('');
  }

  function applySection115() {
    var target = host(115);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-115 xr-115-exact'>",
      "<img class='xr115-person' src='assets/images/exact/s115-person.jpg' alt='Gardener carrying fresh plants'>",
      "<div class='xr115-copy'><small>What makes us special</small><h2>Design &amp; Planting</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tincidunt odio. Duis et sem hendrerit velit faucibus placerat.</p><a href='#services'>Read More</a><div class='xr115-features'><span><i class='fa-solid fa-location-dot' aria-hidden='true'></i><b>Irrigation &amp;<br>Drainage</b></span><span><i class='fa-solid fa-broom' aria-hidden='true'></i><b>Lawn<br>Service</b></span><span><i class='fa-solid fa-screwdriver-wrench' aria-hidden='true'></i><b>Garden<br>Care</b></span><span><i class='fa-solid fa-house' aria-hidden='true'></i><b>Residential<br>Services</b></span></div></div>",
      "</div>"
    ].join('');
  }

  function applySection122() {
    var target = host(122);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-122 xr-122-exact'>",
      "<header><small>Our Services</small><h2>Your Lawn, Our Expertise</h2></header>",
      "<img class='xr122-mower' src='assets/images/exact/s122-mower.jpg' alt='Professional mowing a lawn'><a class='xr122-badge' href='#services' aria-label='Explore our services'><span aria-hidden='true'><b style='--i:0'>S</b><b style='--i:1'>U</b><b style='--i:2'>C</b><b style='--i:3'>C</b><b style='--i:4'>E</b><b style='--i:5'>S</b><b style='--i:6'>S</b><b style='--i:7'>&nbsp;</b><b style='--i:8'>B</b><b style='--i:9'>R</b><b style='--i:10'>A</b><b style='--i:11'>N</b><b style='--i:12'>D</b><b style='--i:13'>&nbsp;</b><b style='--i:14'>W</b><b style='--i:15'>I</b><b style='--i:16'>T</b><b style='--i:17'>H</b><b style='--i:18'>&nbsp;</b><b style='--i:19'>D</b><b style='--i:20'>E</b><b style='--i:21'>M</b><b style='--i:22'>O</b></span><i class='fa-solid fa-play' aria-hidden='true'></i></a><img class='xr122-plant' src='assets/images/exact/s122-plant.jpg' alt='Decorative green plant'><img class='xr122-gardener' src='assets/images/exact/s122-gardener.jpg' alt='Gardener edging a flower bed'>",
      "<div class='xr122-list'><article class='featured'><h3>Patios &amp; Hardscaping</h3><p>Create functional and beautiful outdoor spaces with our Patios &amp; Hardscaping.</p><a href='#services'>Learn More <i class='fa-solid fa-arrow-right' aria-hidden='true'></i></a></article><article><h3>Lawn Care &amp; Maintenance</h3><p>A healthy, vibrant lawn is the foundation of any great landscape.</p><a href='#services'>Learn More <i class='fa-solid fa-arrow-right' aria-hidden='true'></i></a></article><article><h3>Hedge &amp; Topiary Shaping</h3><p>Elevate your garden’s elegance with precision hedge and topiary shaping.</p><a href='#services'>Learn More <i class='fa-solid fa-arrow-right' aria-hidden='true'></i></a></article><article><h3>Garden Edging &amp; Borders</h3><p>Define and highlight your garden areas with expert edging and borders.</p><a href='#services'>Learn More <i class='fa-solid fa-arrow-right' aria-hidden='true'></i></a></article></div>",
      "</div>"
    ].join('');
  }

  function apply() {
    applySection15(); applySection17(); applySection107(); applySection115(); applySection122();
  }

  if (window.jQuery) window.jQuery(apply);
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(apply, 0); });
  else setTimeout(apply, 0);
})();
