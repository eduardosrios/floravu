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

  function applySection31() {
    var target = host(31);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-31 xr-31-exact'>",
      "<header><h2>Your property’s safety &amp; satisfaction<br>are our top priorities tree removal.</h2><p>We combine expertise, advanced equipment, and strict safety standards to handle every tree<br>removal project—big or small. Trust us to protect your home, business, and landscape.</p></header>",
      "<div class='xr31-cards'><img src='assets/images/exact/s31-card-1.jpg' alt='25 plus years of experience'><img src='assets/images/exact/s31-card-2.jpg' alt='1000 plus trees safely removed'></div>",
      "<img class='xr31-man' src='assets/images/exact/s31-man.jpg' alt='Tree-care professional holding a basket of plants'>",
      "</div>"
    ].join('');
  }

  function applySection32() {
    var target = host(32);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-32 xr-32-exact'>",
      "<h2>Your Trusted Process From<br>Start to a Perfect Finish</h2><img class='xr32-left' src='assets/images/exact/s32-left.jpg' alt='Gardener tending flowers'>",
      "<div class='xr32-steps'><img class='s1' src='assets/images/exact/s32-step-1-partial.jpg' alt='Free consultation and assessment'><img class='s2' src='assets/images/exact/s32-step-2.jpg' alt='Customized lawn care plan'><img class='s3' src='assets/images/exact/s32-step-3.jpg' alt='Professional lawn service'><img class='s4' src='assets/images/exact/s32-step-4.jpg' alt='Ongoing care and follow-up'></div>",
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

  function applySection112() {
    var target = host(112);
    if (!target) return;
    var labels = ['Maintenance', 'Garden Design', 'Planting', 'Fence Cleaning'];
    target.innerHTML = [
      "<div class='xr xr-112 xr-112-exact'>",
      "<div class='xr112-copy'><small>What We Do</small><h2>We offer Landscape<br>Services.</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit nisi vitae mauris sagittis, quis fringilla velit varius. Nam vel eleifend elit. Donec convallis arcu mi, id egestas nunc vulputate at.</p><a href='#services'>VIEW ALL SERVICES</a></div>",
      "<div class='xr112-cards'>" + labels.map(function (label, index) { return "<a href='#services' aria-label='View " + label + " service'><img src='assets/images/exact/s112-card-" + (index + 1) + ".jpg' alt='" + label + " service card'></a>"; }).join('') + "</div>",
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
      "<img class='xr122-mower' src='assets/images/exact/s122-mower.jpg' alt='Professional mowing a lawn'><img class='xr122-badge' src='assets/images/exact/s122-badge.jpg' alt='Quality service badge'><img class='xr122-plant' src='assets/images/exact/s122-plant.jpg' alt='Decorative green plant'><img class='xr122-gardener' src='assets/images/exact/s122-gardener.jpg' alt='Gardener edging a flower bed'>",
      "<div class='xr122-list'><article class='featured'><h3>Patios &amp; Hardscaping</h3><p>Create functional and beautiful outdoor spaces with our Patios &amp; Hardscaping.</p><a href='#services'>Learn More <i class='fa-solid fa-arrow-right' aria-hidden='true'></i></a></article><article><h3>Lawn Care &amp; Maintenance</h3><p>A healthy, vibrant lawn is the foundation of any great landscape.</p><a href='#services'>Learn More <i class='fa-solid fa-arrow-right' aria-hidden='true'></i></a></article><article><h3>Hedge &amp; Topiary Shaping</h3><p>Elevate your garden’s elegance with precision hedge and topiary shaping.</p><a href='#services'>Learn More <i class='fa-solid fa-arrow-right' aria-hidden='true'></i></a></article><article><h3>Garden Edging &amp; Borders</h3><p>Define and highlight your garden areas with expert edging and borders.</p><a href='#services'>Learn More <i class='fa-solid fa-arrow-right' aria-hidden='true'></i></a></article></div>",
      "</div>"
    ].join('');
  }

  function applySection135() {
    var target = host(135);
    if (!target) return;
    target.innerHTML = [
      "<div class='xr xr-135 xr-135-exact'>",
      "<img src='assets/images/exact/s135-about-left.jpg' alt='Greenaura gardener with 25 plus years of experience'>",
      "<div><small><i class='fa-solid fa-seedling' aria-hidden='true'></i> About Us</small><h2>About Greenaura</h2><p>At Greenaura, we are committed to environmentally sustainable gardening practices that promote biodiversity, conserve resources, and minimize our environmental footprint.</p><section><strong><i class='fa-solid fa-people-group' aria-hidden='true'></i> Customized<br>Solutions</strong><strong><i class='fa-solid fa-trowel' aria-hidden='true'></i> Customized<br>Solutions</strong></section><label>Professional Expertise <b>80%</b></label><i class='bar b80'></i><label>Client satisfaction <b>90%</b></label><i class='bar b90'></i></div>",
      "</div>"
    ].join('');
  }

  function apply() {
    applySection15(); applySection17(); applySection31(); applySection32(); applySection107(); applySection112(); applySection115(); applySection122(); applySection135();
  }

  if (window.jQuery) window.jQuery(apply);
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(apply, 0); });
  else setTimeout(apply, 0);
})();
