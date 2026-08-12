(function () {
  'use strict';

  var base = 'assets/images/reference-photos/';
  var a = {
    family: base + 'family.jpg', garden: base + 'garden.jpg', gardener: base + 'gardener.jpg',
    hero: base + 'gardenhero.jpg', greenhouse: base + 'greenhouse.jpg', hands: base + 'hands.jpg',
    lawn: base + 'lawn.jpg', leaf: base + 'leaf.jpg', monstera: base + 'monstera.jpg',
    mow: base + 'mow.jpg', path: base + 'path.jpg', plant: base + 'plant.jpg', pot: base + 'pot.jpg',
    team1: base + 'team-1.jpg', team2: base + 'team-2.jpg', team3: base + 'team-3.jpg',
    team4: base + 'team-4.jpg', tools: base + 'tools.jpg', work: base + 'work.jpg',
    shears: 'assets/images/generated/pruning-shears.png',
    terracotta: 'assets/images/generated/terracotta-pot.png'
  };

  function im(src, alt, cls) {
    return '<img src=\'' + a[src] + '\' alt=\'' + (alt || 'Garden') + '\'' + (cls ? ' class=\'' + cls + '\'' : '') + ' loading=lazy>';
  }
  function ico(name) { return '<i class=\'fa-solid fa-' + name + '\' aria-hidden=true></i>'; }
  function rating() { return '<span class=xr-rating>' + ico('star').repeat(5) + '</span>'; }
  function cart() { return '<span class=xr-cart>' + ico('cart-shopping') + '</span>'; }
  function plantTile(src, name, price) {
    return '<article class=xr-plant-tile>' + im(src, name) + '<div><h3>' + name + '</h3><b>' + price + '</b>' + cart() + '</div></article>';
  }
  function serviceTile(src, name, text, icon) {
    return '<article class=xr-service-tile>' + im(src, name) + '<div class=xr-service-copy>' + ico(icon || 'leaf') + '<h3>' + name + '</h3><p>' + text + '</p></div></article>';
  }

  var T = {};

  T[1] = `<div class='xr xr-1'>
    <header><span>HOW IT WORKS</span><h2>SIMPLE STEPS FOR<br>OUR LANDSCAPE WORK</h2></header>
    <div class='xr-timeline-line'></div>
    <div class='xr-timeline-steps'>
      <article><b>01</b><h3>Design consultation</h3><p>After an initial map, we sit down with you to have a detailed discussion about your garden vision and preferences.</p></article>
      <article><b>02</b><h3>Design &amp; planning</h3><p>Our team of experts meticulously creates a custom garden design that aligns with your desires and your space’s unique characteristics.</p></article>
      <article><b>03</b><h3>Implement construction</h3><p>We present the design to you for review. Once approved, we move forward to implement the plan with construction.</p></article>
      <article><b>04</b><h3>Garden decorating</h3><p>With your design finalized, we put on our gardening gloves and work, creating your garden to be as beautiful as envisioned.</p></article>
    </div>
  </div>`;

  T[4] = `<div class='xr xr-4'>
    <header><div><span>INDOOR PLANTS</span><h2>Indoor Favorites</h2></div><a href=#shop>View all items <b>→</b></a></header>
    <div class='xr-product-row'>
      ${plantTile('plant','Sansevieria Trifasciata','$29.00')}
      ${plantTile('leaf','Golden Pothos','$18.00')}
      ${plantTile('shears','Steel Pruning Shears','$34.00')}
      ${plantTile('terracotta','Earth Matte Pot','$42.00')}
    </div>
  </div>`;

  T[8] = T[9] = `<div class='xr xr-8'>
    <header><span>CURATED FOR THE MOMENT</span><h2>Seasonal Best Collections</h2></header>
    <div class='xr-season-grid'>
      <article>${im('plant','Areca Palm')}<div><h3>Areca Palm</h3><p>Air-purifying foliage for calm rooms.</p><a href=#shop>Explore Collection</a></div></article>
      <article>${im('leaf','Peace Lily')}<div><h3>Peace Lily</h3><p>Seasonal color with quiet structure.</p><a href=#shop>Explore Collection</a></div></article>
      <article>${im('monstera','Monstera Deliciosa')}<div><h3>Monstera Deliciosa</h3><p>Bold leaves for bright interiors.</p><a href=#shop>Explore Collection</a></div></article>
    </div>
  </div>`;

  T[11] = `<div class='xr xr-11'>
    <header><h2>Here are the best seller</h2><a href=#shop>SHOP ALL PLANTS</a></header>
    <div class='xr-seller-row'>
      <article>${im('plant','Monstera Deliciosa')}<h3>Monstera Deliciosa</h3><a href=#shop>BUY NOW&nbsp; $19</a></article>
      <article>${im('pot','Pink Anthurium')}<h3>Pink Anthurium</h3><a href=#shop>BUY NOW&nbsp; $58</a></article>
      <article>${im('monstera','Aglaonema Red')}<h3>Aglaonema Red</h3><a href=#shop>BUY NOW&nbsp; $38</a></article>
    </div>
  </div>`;

  T[13] = `<div class='xr xr-13'><div class='xr-benefit-strip'>
    <article>${ico('seedling')}<div><h3>Healthy Plants</h3><p>Fresh handpicked plants.</p></div></article>
    <article>${ico('truck-fast')}<div><h3>Fast Delivery</h3><p>Carefully packed and delivered.</p></div></article>
    <article>${ico('sun')}<div><h3>Easy Care</h3><p>Low-maintenance favorites.</p></div></article>
    <article>${ico('headset')}<div><h3>Expert Support</h3><p>Guidance when you need it.</p></div></article>
  </div></div>`;

  T[14] = `<div class='xr xr-14'><header><span>PLANT SHOP</span><h2>Fresh picks for every room</h2></header><div class='xr-shop-eight'>
    ${plantTile('plant','Monstera','$45')}${plantTile('leaf','Rubber Plant','$40')}${plantTile('pot','Snake Plant','$30')}${plantTile('monstera','Peace Lily','$35')}
    ${plantTile('greenhouse','Pothos','$28')}${plantTile('hands','Aloe Vera','$25')}${plantTile('plant','ZZ Plant','$72')}${plantTile('leaf','Fiddle Fig','$60')}
  </div></div>`;

  T[15] = `<div class='xr xr-15'>
    <div class='xr-editorial-note'><small>Plant Caring</small><h3>Plants for boosting<br>and purifying</h3><figure>${im('plant','Growline')}<span>01</span></figure></div>
    <div class='xr-editorial-title'><h2>TREE <em>LOVE</em><br>LIFE SHINE</h2><a href=#services>Choose Green&nbsp; ›</a><small>Gardening benefits</small><p>A healthy garden encourages calm, focus, and a closer daily relationship with nature.</p></div>
    ${im('gardener','Gardener','xr-editorial-photo')}
  </div>`;

  T[16] = `<div class='xr xr-16'>
    <header><h2>HOUSE <i class='fa-solid fa-leaf' aria-hidden='true'></i><span>PLANT</span></h2><p>${ico('leaf')} Best plants for boosting and<br>purifying oxygen</p></header>
    <div class='xr-house-row'>
      <article><small>P-9845 <b>5★</b></small>${im('plant','Asplenium')}<p><span>PLANT<br><b>Asplenium</b></span><span>SIZE<br><b>Potted</b></span></p></article>
      <article><small>P-7845 <b>5★</b></small>${im('pot','Succulent')}<p><span>PLANT<br><b>Succulent</b></span><span>SIZE<br><b>Semi</b></span></p></article>
      <article><small>P-6345 <b>5★</b></small>${im('monstera','Monstera')}<p><span>PLANT<br><b>Monstera</b></span><span>SIZE<br><b>Small</b></span></p></article>
      <article><small>P-1945 <b>5★</b></small>${im('leaf','Aloe Vera')}<p><span>PLANT<br><b>Aloe Vera</b></span><span>SIZE<br><b>Medium</b></span></p></article>
    </div>
  </div>`;

  T[17] = `<div class='xr xr-17'>
    <div><h2>ROOTED IN<br>PURE BLISS</h2><p>These succulents are ideal for use in<br>your indoor home conditions.</p><a href=#shop>Learn Care&nbsp; ›</a></div>
    <figure><span class='xr-yellow-disc'></span>${im('pot','Pure plant')}<b>Grow<br>now</b></figure>
    <aside><small>About Plants</small><h3>FRESH ROOTS<br>PURE JOY</h3>${im('monstera','Flower')}</aside>
    <footer><span>EVERGREEN BLISS</span><small>Little touches of green<br>make life brighter</small></footer>
  </div>`;

  T[18] = `<div class='xr xr-18'>
    <div class='xr-three-services'>
      ${serviceTile('lawn','Landscape Design','Our team of experienced staff work.','pen-ruler')}
      ${serviceTile('gardener','Seasonal Planting','Our team of experienced staff work.','spa')}
      ${serviceTile('hands','Garden Renovation','Our team of experienced staff work.','seedling')}
    </div>
    <div class='xr-about-lower'>${im('gardener','Garden expert')}<div><small>ABOUT US</small><h2>About GreenAura</h2><p>Our certified specialists combine practical planting knowledge, project planning, and responsible maintenance.</p><div><b>${ico('people-group')} Customized<br>Solutions</b><b>${ico('leaf')} Customized<br>Solutions</b></div></div></div>
  </div>`;

  T[19] = `<div class='xr xr-19'>
    <div class='xr-about-fragment'>${im('gardener','Garden specialist')}<b>25+<small>Years Experience</small></b><div><span>Professional Expertise</span><i></i><span>Client satisfaction</span><i></i></div></div>
    <div class='xr-master-wrap'><header><small>OUR SERVICES</small><h2>Crafting Outdoor<br>Masterpieces</h2></header><div class='xr-master-cards'>
      ${serviceTile('gardener','Seasonal Plantings','Year-round care for lasting color.','spa')}
      ${serviceTile('path','Irrigation System','Water-smart systems for healthy beds.','faucet-drip')}
      ${serviceTile('work','Landscape Design','Plans shaped around everyday use.','pen-ruler')}
      ${serviceTile('garden','Garden Renovation','Restore and refresh tired spaces.','seedling')}
    </div></div>
  </div>`;

  T[20] = `<div class='xr xr-20'>
    <div class='xr-master-cards'>
      ${serviceTile('gardener','Seasonal Plantings','Year-round care for lasting color.','spa')}
      ${serviceTile('path','Irrigation System','Water-smart systems for healthy beds.','faucet-drip')}
      ${serviceTile('work','Landscape Design','Plans shaped around everyday use.','pen-ruler')}
      ${serviceTile('garden','Garden Renovation','Restore and refresh tired spaces.','seedling')}
    </div><footer><small>OUR WORK</small><h2>Our Best Work</h2><nav><button>All</button><button>Garden Care</button><button>Lawn Care</button><button>Planting</button></nav></footer>
  </div>`;

  T[21] = `<div class='xr xr-21'><div class='xr-logo-bar'><span>WOODCHUCK USA</span><span>10</span><span>TREE TRIBE</span><span>trvst</span></div><div class='xr-impact-copy'><div><h2>Real Impact on<br>Environment</h2><p>Every garden is a daily investment in cleaner air, resilient planting, and thriving local habitats.</p></div><div class='xr-impact-grid'><span>In Business</span><b>Climate<br>Impact</b><strong>60%</strong><b>Trees<br>Saved</b><strong>1.5 M</strong>${im('garden','Forest')}</div></div></div>`;

  T[22] = `<div class='xr xr-22'><h2>Our Plants</h2><div class='xr-thin-plants'>
    ${plantTile('plant','Arborvitae','$75')}${plantTile('leaf','Arboricola','$55')}${plantTile('monstera','Arbor Rose','$20')}${plantTile('pot','Arbor Tree','$82')}${plantTile('greenhouse','Arbor Mist','$48')}
  </div></div>`;

  T[24] = `<div class='xr xr-24'><img class='xr24-decor-left' src='assets/images/exact/s24-decor-left.png' alt='' aria-hidden='true'><img class='xr24-decor-right' src='assets/images/exact/s24-decor-right.png' alt='' aria-hidden='true'><img class='xr24-decor-soil' src='assets/images/exact/s24-decor-soil.png' alt='' aria-hidden='true'><header><small>OUR SERVICES</small><h2>What Can We Offer</h2><p>Complete landscape services, delivered with thoughtful planning and a practical point of view.</p></header><div class='xr-offer-row'>
    <article><b>01</b>${ico('pen-ruler')}<h3>Garden Design</h3><p>We provide complete garden planning, planting layouts, and practical landscape guidance.</p><a href=#contact>+ READ MORE</a></article>
    <article><b>02</b>${ico('faucet-drip')}<h3>Irrigation System</h3><p>We provide efficient irrigation planning, installation, and seasonal watering support.</p><a href=#contact>+ READ MORE</a></article>
    <article><b>03</b>${ico('tree')}<h3>Tree Services</h3><p>We provide careful pruning, tree-health checks, landscape care, and seasonal support.</p><a href=#contact>+ READ MORE</a></article>
    <article><b>04</b>${ico('scissors')}<h3>Hedge Cutting</h3><p>We provide structured hedge trimming, landscape cleanup, and healthy seasonal growth care.</p><a href=#contact>+ READ MORE</a></article>
  </div></div>`;

  T[26] = `<div class='xr xr-26'><header><h2>Taking care of your plants<br>the right way</h2><p>Follow this instruction.</p></header><div class='xr-care-row'>
    <article>${im('hands','Inoculate')}<h3><b>01</b> Inoculate</h3><p>Applying a bacterial coating helps plants thrive in healthy soil.</p></article>
    <article>${im('greenhouse','Sow the seeds')}<h3><b>02</b> Sow the seeds</h3><p>Prepare a moist medium and press each seed in precisely.</p></article>
    <article>${im('pot','Place the pots')}<h3><b>03</b> Place the pots</h3><p>Use bright indirect light and a controlled watering rhythm.</p></article>
  </div></div>`;

  function greenPlantBand(id) {
    return `<div class='xr xr-${id}'><header><h2>Make your home beautiful<br>with these products</h2><nav><button>‹</button><button>›</button></nav></header><div class='xr-green-products'>
      ${plantTile('plant','Dumb Cane','$15.99')}${plantTile('leaf','Spider Plant','$12.99')}${plantTile('monstera','Spotted Ever','$18.99')}${plantTile('pot','Freddie Plant','$10.99')}
    </div></div>`;
  }
  T[27] = greenPlantBand(27);

  T[28] = `<div class='xr xr-28 xr-28-coded'><img class='xr28-side-left' src='assets/images/exact/s28-side-left.png' alt='' aria-hidden='true'><img class='xr28-side-right' src='assets/images/exact/s28-side-right.png' alt='' aria-hidden='true'><small class='xr28-label'>ABOUT US</small><h2>Growing Green Together</h2><p class='xr28-copy-a'>At Floravu, we grow more than gardens. We create lasting spaces for families and neighborhoods.</p><p class='xr28-copy-b'>Thoughtful planting supports local habitats while practical care keeps every landscape thriving.</p><i class='fa-solid fa-arrow-down-left xr28-arrow' aria-hidden='true'></i><article class='xr28-left-card'><b>130+</b><span>Satisfied Customers</span><img src='assets/images/semantic/s28-left-photo.jpg' alt='Garden clients'></article><figure class='xr28-middle-photo'><img src='assets/images/exact/s28-middle-photo.jpg' alt='Soil care'></figure><article class='xr28-green-card'><b>3k+</b><span>Unique Projects</span><img src='assets/images/semantic/s28-green-photo.jpg' alt='Garden tools and plants'></article><article class='xr28-right-card'><b>20+</b><span>Service Providers</span><img src='assets/images/semantic/s28-right-photo.jpg' alt='Garden care professional'></article></div>`;
  T[29] = `<div class='xr xr-29'><div class='xr-service-intro'><small>SECTION 04</small><h2>Services ↗</h2><p>Transform your outdoor space with expert garden design, pruning, care, and seasonal support.</p></div>${im('work','Pruning','xr-service-focus')}<div class='xr-accordion-list'><a href=#services>Planting Services <b>⌄</b></a><a class=active href=#services>Garden Design Landscaping <b>•</b><small>Beautiful outdoor spaces planned for real daily use and lasting growth.</small></a><a href=#services>Garden Maintenance <b>⌄</b></a><a href=#services>Planting &amp; Pruning <b>⌄</b></a><a href=#services>Garden Consultation <b>⌄</b></a><a href=#services>Seasonal Garden Preparation <b>⌄</b></a></div><a class=xr-view-all href=#services>View all&nbsp; →</a></div>`;

  T[30] = `<div class='xr xr-30'><span class=xr-label>About Us</span>${im('gardener','Lawn expert','xr-about-photo')}<div class='xr-about-copy'><h2>We don’t just work on lawns we bring them to life. Our team combines skill, dedication, &amp; eco-friendly practices.</h2><p>At Floravu, we believe every lawn deserves expert care. Our service blends reliable schedules, skilled teams, and responsible methods.</p><div class='xr-two-points'><article>${ico('seedling')}<b>Committed to Greener Lawns</b><p>Healthier soil, smarter water use, and lasting growth.</p></article><article>${ico('award')}<b>Your Trusted Lawn Care Experts</b><p>Clear plans and careful work from start to finish.</p></article></div><a href=#about>●&nbsp; Learn More About Us</a></div></div>`;

  T[31] = `<div class='xr xr-31'><div class='xr-priority-copy'><h2>Your property’s safety &amp; satisfaction<br>are our top priorities tree removal.</h2><p>Careful inspection, advanced equipment, and trained specialists handle every removal with precision.</p><div><article><b>25+</b><span>Years Of Experience</span>${im('team2','Tree specialist')}</article><article class=green>${ico('tree')}<b>1000+</b><span>Trees Safely Removed</span><p>Trusted crews, safe work zones, and efficient cleanup.</p></article></div></div>${im('work','Garden professional','xr-priority-photo')}</div>`;

  T[32] = `<div class='xr xr-32'><div><h2>Your Trusted Process From<br>Start to a Perfect Finish</h2>${im('gardener','Garden service')}</div><div class='xr-process-list'><article><b>01</b><h3>Free Consultation &amp; Assessment</h3><p>We begin by inspecting the site and understanding your needs.</p></article><article><b>02</b><h3>Customized Lawn Care Plan</h3><p>A clear schedule covers maintenance, planting, and seasonal service.</p></article><article><b>03</b><h3>Professional Lawn Service</h3><p>Our team arrives on time and works with care.</p></article><article><b>04</b><h3>Ongoing Care &amp; Follow-Up</h3><p>We keep the landscape healthy through every season.</p></article></div></div>`;

  T[33] = `<div class='xr xr-33'><h2>Plants. The Power<br>On Your Side.</h2><div class='xr-power-grid'><article>${ico('dove')}<h3>Garden Plant</h3><p>Clean air and quieter rooms.</p></article><article>${ico('laptop')}<h3>Office Plant</h3><p>Fresh focus for work spaces.</p></article><article>${ico('house')}<h3>Home Plant</h3><p>Easy plants for daily life.</p></article><article>${ico('building')}<h3>Apartment Plant</h3><p>Compact greenery for small homes.</p></article><article>${ico('seedling')}<h3>Garden Plant</h3><p>Layered beds and seasonal color.</p></article><article>${ico('road')}<h3>Street Plant</h3><p>Resilient urban planting.</p></article></div></div>`;

  T[76] = `<div class='xr xr-76'><header><small>Our Services</small><h2>EVERYTHING OF YOUR<br>TREES AND YARD NEED</h2><nav><button>‹</button><button>›</button></nav></header><div class='xr-tree-services'>
    <article>${im('work','Safe tree removal')}<div>${ico('tree')}<h3>SAFE TREE REMOVAL</h3><p>Dead, dangerous trees removed carefully by trained crews.</p></div></article>
    <article>${im('tools','Tree trimming pruning')}<div>${ico('scissors')}<h3>TREE TRIMMING PRUNING</h3><p>Keep trees healthy, safe, and beautifully structured.</p></div></article>
    <article>${im('garden','Storm damaged trees')}<div>${ico('cloud-bolt')}<h3>STORM DAMAGED TREES</h3><p>Rapid assessment and recovery after severe weather.</p></div></article>
    <article>${im('mow','Debris brush clearing')}<div>${ico('broom')}<h3>DEBRIS BRUSH CLEARING</h3><p>Restore clean, usable space after pruning and removal.</p></div></article>
  </div></div>`;

  T[79] = `<div class='xr xr-79'><div><small>Frequently Asked Questions</small><h2>COMMON QUESTIONS<br>FROM OUR ALL CLIENTS</h2><a href=#contact>STILL HAVE QUESTIONS?</a></div><div class='xr-faq-stack'><details><summary>How much does tree removal cost in Chicago?</summary></details><details><summary>Do you provide emergency tree services?</summary></details><details><summary>How often should trees be trimmed or pruned?</summary></details><details><summary>Do you clean up after the job is done?</summary></details><details open><summary>What tree services do you offer?</summary><p>Removal, trimming, pruning, stump grinding, storm cleanup, brush hauling, and crane-assisted work.</p></details></div></div>`;

  T[83] = `<div class='xr xr-83'>${im('gardener','Gardening expert')}<div><small>PLANT ENTHUSIASTS</small><h2>our passion for gardening<br>excellence</h2><p>From lush gardens and clean lawns to beautiful outdoor spaces, our experienced team delivers careful work.</p><div class='xr-about-cards'><article>${ico('tree')}<b>Beautiful Outdoor Space</b><p>Practical planting and care.</p></article><article>${ico('seedling')}<b>Expert Gardening Services</b><p>Trusted seasonal support.</p></article></div><footer><a href=#contact>Contact Us</a><b>${ico('phone')} 877 555 0308</b></footer></div></div>`;

  T[86] = `<div class='xr xr-86'><header><div><small>SHOP ALL PRODUCTS</small><h2>Your Tree Care Shop: Tools,<br>Products, &amp; Services</h2></div><a href=#contact>CONTACT US&nbsp; ●</a></header><div class='xr-tool-shop'>
    <article>${im('tools','Chain saw')}<small>Tree Services</small><h3>Chain saw</h3><b>$237.99</b><button>ADD TO CART&nbsp; ${ico('cart-shopping')}</button></article>
    <article>${im('mow','Grasscutter')}<small>Tree Services</small><h3>Grasscutter Grass</h3><b>$168.39</b><button>ADD TO CART&nbsp; ${ico('cart-shopping')}</button></article>
    <article>${im('hands','Gardening tools')}<small>Tree Services</small><h3>Gardening tools</h3><b>$21.99</b><button>ADD TO CART&nbsp; ${ico('cart-shopping')}</button></article>
    <article>${im('leaf','Planting trees')}<small>Tree Services</small><h3>Planting trees</h3><b>$468.99</b><button>ADD TO CART&nbsp; ${ico('cart-shopping')}</button></article>
  </div></div>`;

  T[87] = `<div class='xr xr-87'><div class='xr-photo-subscribe'>${im('hands','Plant care')}<div><h2>Get in Touch for Expert Tree Care!</h2><p>Have questions or need immediate assistance? Reach out to us.</p><form><input type=email placeholder='Your Email Address...'><button type=submit>SUBSCRIBE&nbsp; ●</button></form></div></div></div>`;

  T[88] = `<div class='xr xr-88'><h2>FAQS</h2><div class='xr-number-faq'><details><summary><b>1.</b> How do I maintain my <span>Scotts®</span> ProVista™ properly/lawn?</summary></details><details><summary><b>2.</b> How do I maintain my <span>Scotts®</span> ProVista™ properly/lawn?</summary></details><details><summary><b>3.</b> How do I mow newly installed Scotts® ProVista™ turfgrass?</summary></details><details><summary><b>4.</b> Does Scotts® ProVista™ require fertilizer?</summary></details><details><summary><b>5.</b> Is Scotts® ProVista™ turfgrass drought tolerant? Do I need to water it?</summary></details><details><summary><b>6.</b> How does Scotts® ProVista™ perform in shade?</summary></details></div></div>`;

  T[89] = `<div class='xr xr-89'><div><h2>Grow with US!</h2><form><input type=email placeholder='Enter your email'><button type=submit>Subscribe</button></form><p>Join our newsletter for better gardening tips and updates.</p></div></div>`;

  T[90] = `<div class='xr xr-90'><div class='xr-scene-collage'>${im('mow','Garden scene')} ${im('family','Garden family')} ${im('garden','Plant care')} ${im('work','Landscape service')} ${im('gardener','Garden worker')} ${im('tools','Tools')}</div><div class='xr-scene-copy'><p>At Floravu, we make lawn care simple and easy to understand. No jargon. No pressure. Just solutions that actually work for your lawn.</p><h2>Simple, transparent, and<br>built on real science.</h2></div></div>`;

  T[91] = `<div class='xr xr-91'><header><h2>Shop by Category</h2><p>Discover plants by type, style, or care level.</p></header><div class='xr-category-grid'><article class=large>${im('plant','Indoor plants')}<h3>Indoor Plants</h3><p>Perfect for home &amp; office</p><b>›</b></article><article>${im('pot','Low light plants')}<h3>Low Light Plants</h3><p>Easy care, high impact</p><b>›</b></article><article>${im('monstera','Succulents')}<h3>Succulents</h3><p>Minimal care, maximum style</p><b>›</b></article><article>${im('leaf','Flowering plants')}<h3>Flowering Plants</h3><p>Colorful &amp; easy growing</p><b>›</b></article><article>${im('greenhouse','Hanging plants')}<h3>Hanging Plants</h3><p>Decorate shelves &amp; walls</p><b>›</b></article></div></div>`;

  T[92] = greenPlantBand(92);

  T[94] = `<div class='xr xr-94'><h2>Get <span>20% Off</span> Your Next Order</h2><form>${ico('envelope')}<input type=email placeholder='Enter your email'><button type=submit>SUBSCRIBE</button></form></div>`;

  T[95] = `<div class='xr xr-95'><header><small>WHY CHOOSE US</small><h2>Transform Your Garden into a<br>Haven for Well-Being</h2></header><div class='xr-benefit-mosaic'><article><h3>Eco-Friendly Practices</h3><p>We care for gardens with responsible methods.</p><a href=#services>Learn more</a><b>↗</b></article><article class=green><h3>Affordable Packages</h3><p>Flexible plans make expert care accessible.</p><a href=#services>Learn more</a><b>↗</b></article><article class=yellow><h3>Eco-Friendly Practices</h3><p>Thoughtful products support healthy growth.</p><a href=#services>Learn more</a><b>↗</b></article><article class=dark><h3>Boosts Property Value</h3><p>A well-planned landscape adds lasting appeal.</p><a href=#services>Learn more</a><b>↗</b></article><figure>${im('path','Garden path')}</figure><article><h3>One-Stop Solution</h3><p>Design, planting, care, and maintenance together.</p><a href=#services>Learn more</a><b>↗</b></article></div></div>`;

  T[96] = `<div class='xr xr-96'><div><small>Testimonials</small><h2>Genuine Reviews from Garden<br>Transformation Projects</h2><p>Learn from clients across residential and commercial landscapes.</p></div><div class='xr-review-stats'><article>${ico('star')}<b>4.9/5</b><span>Average Rating</span></article><article>${ico('users')}<b>96%</b><span>Customer Satisfaction</span></article><article>${ico('flag-checkered')}<b>95%</b><span>Project Completion</span></article><article>${ico('comments')}<b>500+</b><span>Projects Completed</span></article></div></div>`;

  T[97] = `<div class='xr xr-97'><header><small>OUTDOOR LIVING BLOG</small><h2>Landscaping Tips &amp; Insights</h2></header><div class='xr-blog-row'><article>${im('family','Garden article')}<time>13<br>JUN<br>2026</time><div><small>${ico('calendar')} 08 May 2026&nbsp; ${ico('user')} Green Garden</small><h3>Stay Informed, Inspired, Ahead: Your Go-To Source For All Things Landscaping</h3><a href=#projects>+ Read More</a></div></article><article>${im('gardener','Landscape article')}<time>13<br>JUN<br>2026</time><div><small>${ico('calendar')} 08 May 2026&nbsp; ${ico('user')} Green Garden</small><h3>Fresh Stories, Expert Tips, and Creative Ideas to Transform Your Outdoor Space</h3><a href=#projects>Read More →</a></div></article></div></div>`;

  function lawnSolutions(id) {
    return `<div class='xr xr-${id}'><header><small>Our Services</small><h2>Full-Service Lawn Solutions<br>For Homes &amp; Businesses</h2><nav><button>‹</button><button>›</button></nav></header><div class='xr-lawn-slider'><article>${im('gardener','Lawn mowing')}<h3>Lawn Mowing &amp; Maintenance</h3><p>Keep your grass neat, healthy, and consistently cared for.</p><a href=#services>●&nbsp; Read More</a></article><article>${im('family','Fertilization')}<h3>Fertilization &amp; Soil Treatment</h3><p>Feed your lawn with nutrients that support long-term growth.</p><a href=#services>●&nbsp; Read More</a></article><article>${im('work','Weed control')}<h3>Weed Control &amp; Prevention</h3><p>Stop weeds before they spread through garden beds.</p><a href=#services>●&nbsp; Read More</a></article><article>${im('lawn','Residential care')}<h3>Residential Lawn Care</h3><p>Scheduled service for a greener outdoor space.</p><a href=#services>●&nbsp; Read More</a></article></div></div>`;
  }
  T[98] = lawnSolutions(98);

  T[99] = `<div class='xr xr-99'><header><small>OUR TEAM</small><h2>Meet Our Green Thumb Experts</h2><nav><button>‹</button><button>›</button></nav></header><div class='xr-team-row'><article>${im('team1','Rhonda Rhodes')}<h3>Rhonda Rhodes</h3><p>Senior Landscape Expert</p><footer>𝕏&nbsp; in&nbsp; ◎&nbsp; f</footer></article><article>${im('team2','Patricia Sanders')}<h3>Patricia Sanders</h3><p>Landscape Design Specialist</p><footer>𝕏&nbsp; ●&nbsp; ◎&nbsp; f</footer></article><article>${im('team3','Emily Williams')}<h3>Emily Williams</h3><p>Horticultural Consultant</p><footer>𝕏&nbsp; in&nbsp; ◎&nbsp; f</footer></article></div></div>`;

  T[100] = `<div class='xr xr-100'><div><small>How It Work</small><h2>Step-By-Step To A<br>Beautiful Garden</h2></div><p>At Floravu, we make it easy to give your outdoor garden the care it deserves.</p><div class='xr-three-process'><article><b>01</b><h3>Schedule Your Service</h3><p>Book your gardening appointment in a few clicks.</p></article><article><b>02</b><h3>Professional Garden Care</h3><p>Our skilled gardeners handle every step.</p></article><article><b>03</b><h3>Enjoy Your Green Space</h3><p>Sit back and enjoy a healthy, beautiful garden.</p></article></div></div>`;

  T[101] = `<div class='xr xr-101'><h2>Our Green<br>Services</h2><div class='xr-green-services'><article><h3>Vertical Garden<br>Installations</h3><span>★★★★★</span><b>↗</b>${im('garden','Vertical garden')}</article><article><h3>Outdoor &amp; Landscape<br>Design</h3><span>★★★★★</span><b>↗</b>${im('pot','Landscape design')}</article><article><h3>Collaborative Plant<br>Sourcing</h3><span>★★★★★</span><b>↗</b>${im('monstera','Plant sourcing')}</article></div></div>`;

  T[104] = `<div class='xr xr-104'><header><h2>Bestsellers</h2><nav><button>⟵</button><button>⟶</button></nav></header><div class='xr-bestsellers'><article>${im('greenhouse','Monstera Deliciosa')}<h3>Monstera Deliciosa plant</h3><p>₹2000/- <del>₹2199/-</del>${rating()}</p><button>Buy Now</button><button>Add cart</button></article><article>${im('plant','Bamboo plant')}<h3>Bamboo plant</h3><p>₹1200/- <del>₹1499/-</del>${rating()}</p><button>Buy Now</button><button>Add cart</button></article><article>${im('pot','Money plant')}<h3>Money plant</h3><p>₹2000/- <del>₹2199/-</del>${rating()}</p><button>Buy Now</button><button>Add cart</button></article><article>${im('leaf','Snake plant')}<h3>Snake plant</h3><p>₹1300/- <del>₹1499/-</del>${rating()}</p><button>Buy Now</button><button>Add cart</button></article></div></div>`;

  T[105] = `<div class='xr xr-105'><h2>Join Our Newsletter</h2><p>Sign up for our email newsletter to get exclusive discounts, updates &amp; more!</p><form><input type=email placeholder='Enter your email here'><button type=submit>Subscribe</button></form></div>`;

  T[107] = `<div class='xr xr-107'><header><small>EXHIBITIONS &amp; WORKSHOPS</small><h2>Get your Hands Dirty and Grow Your Skills<br>Join One of Our Upcoming Garden Workshops</h2></header><div class='xr-workshop-wheel'><div><article>Edible &amp;<br>Sustainable<br>Gardening ${ico('seedling')}</article><article>Floral<br>Design ${ico('flower')}</article><article>Greenhouse<br>Growing ${ico('warehouse')}</article></div>${im('pot','Garden workshop')}<div><article>${ico('mountain-sun')} Landscape<br>Design</article><article>${ico('sun-plant-wilt')} Seasonal<br>&amp; Specialised<br>Gardening</article><article>${ico('person-digging')} Youth &amp; Junior<br>Gardening</article></div></div></div>`;

  T[112] = `<div class='xr xr-112'><div class='xr-landscape-copy'><small>What We Do</small><h2>We offer Landscape<br>Services.</h2><p>Explore garden design, planting, maintenance, and careful landscape improvements for every kind of outdoor space.</p><a href=#services>VIEW ALL SERVICES</a></div><div class='xr-landscape-cards'><article>${ico('screwdriver-wrench')}<h3>Maintenance</h3><p>Routine upkeep keeps every outdoor area neat, healthy, and ready for each season.</p></article><article>${ico('pen-ruler')}<h3>Garden Design</h3><p>Custom garden plans balance practical layouts, healthy planting, and lasting beauty.</p></article><article>${ico('seedling')}<h3>Planting</h3><p>Carefully selected plants create layered color, texture, and year-round interest.</p></article><article>${ico('water')}<h3>Fence Cleaning</h3><p>Restore fences and boundaries with careful cleaning that protects each surface.</p></article></div></div>`;

  T[114] = `<div class='xr xr-114'><header><h2>Enhance Your Property with Store-re<br>Landscaping</h2><p>We create stunning, thriving outdoor spaces with seasoned professionals.</p></header><div class='xr-pricing-row'><article><small>Stunning Landscapes</small><h3>Comprehensive<br>Services</h3><p>Garden design, lawn care, hardscaping, irrigation, and seasonal maintenance.</p><a href=#contact>Order Now</a></article><article class=featured><small>Cutting-Edge Technology</small><h3>Stunning<br>Landscapes</h3><p>We take pride in reliability, professionalism, and a passion for creative outdoor spaces.</p><a href=#contact>Order Now</a></article><article><small>Comprehensive Services</small><h3>Cutting-Edge<br>Technology</h3><p>Trust Store-re Landscaping to enhance your property with innovative solutions.</p><a href=#contact>Order Now</a></article></div></div>`;

  T[115] = `<div class='xr xr-115'>${im('greenhouse','Design and planting')}<div><small>What makes us special</small><h2>Design &amp; Planting</h2><p>Fresh planting plans and careful installation create outdoor spaces that feel alive.</p><a href=#services>Read More</a><div class='xr-design-icons'><span>${ico('shield-halved')} Irrigation &amp;<br>Drainage</span><span>${ico('chart-simple')} Lawn<br>Service</span><span>${ico('screwdriver-wrench')} Garden<br>Care</span><span>${ico('house')} Residential<br>Services</span></div></div></div>`;

  T[121] = `<div class='xr xr-121'><header><b>25K<small>Satisfied Client</small></b><p>At Floravu, we believe that every outdoor space holds potential to be extraordinary. What started as a passion for nature and design has grown into a trusted landscaping company.</p></header><div class='xr-case-grid'>${im('garden','Landscape project')}<div><h3>Shaping Outdoor<br>Spaces With Care</h3><a href=#projects>View Work&nbsp; ↗</a></div><article><b>77k+</b><span>Hours Worked</span><p>Happy clients&nbsp; 92%</p><p>Team members&nbsp; 80%</p><a href=#projects>↗</a></article></div><footer><span>Logoipsum</span><span>Logoipsum</span><span>Logoipsum</span><span>Logoipsum</span></footer></div>`;

  T[122] = `<div class='xr xr-122'><header><small>Our Services</small><h2>Your Lawn, Our Expertise</h2></header><div class='xr-expertise-layout'><figure>${im('mow','Lawn mowing')}<b>100%<small>Satisfaction</small></b></figure><div><article><h3>Plants &amp; Hardscaping</h3><p>Complete installations for durable outdoor rooms.</p><a href=#services>Learn More →</a></article><article><h3>Lawn Care &amp; Maintenance</h3><p>Consistent service keeps growth healthy and controlled.</p><a href=#services>Learn More →</a></article><article><h3>Garden Design &amp; Services</h3><p>Creative plans align planting with the way you live.</p><a href=#services>Learn More →</a></article></div><div class='xr-expertise-images'>${im('plant','Plant')} ${im('gardener','Gardener')}</div></div></div>`;

  T[123] = `<div class='xr xr-123'><header><div><small>Our Projects</small><h2>Our Recent Projects</h2></div><nav><button>‹</button><button>›</button></nav></header><div class='xr-project-strip'><article>${im('mow','City garden')}<h3>City Garden Courtyard</h3></article><article>${im('lawn','Courtyard')}<h3>City Garden Courtyard</h3></article><article>${im('gardener','Restaurant garden')}<h3>Green Haven Restaurant</h3><p>Our recent favorite project.</p><a href=#projects>Learn More →</a></article><article>${im('work','Retreat')}<h3>Sunny Lawn Retreat</h3></article><article>${im('garden','Bloomside')}<h3>Bloomside Garden</h3></article></div></div>`;

  T[129] = T[16].replace('xr-16','xr-129');

  T[130] = `<div class='xr xr-130'><header><small>HOW IT WORKS</small><h2>SIMPLE STEPS FOR<br>OUR LANDSCAPE WORK</h2></header><div class='xr-timeline-line'></div><div class='xr-timeline-steps'><article><b>01</b><h3>Design consultation</h3><p>After an initial map, we sit down with you to have a detailed discussion about your garden vision and preferences.</p></article><article><b>02</b><h3>Design &amp; planning</h3><p>Our team of experts meticulously creates a custom garden design that aligns with your desires and your space’s unique characteristics.</p></article><article><b>03</b><h3>Implement construction</h3><p>We present the design to you for review. Once approved, we move forward to implement the plan with construction.</p></article><article><b>04</b><h3>Garden decorating</h3><p>With your design finalized, we put on our gardening gloves and work, creating your garden to be as beautiful as envisioned.</p></article></div></div>`;

  T[132] = `<div class='xr xr-132'><div class='xr-order-faq'><details><summary>Ordering for Delivery?</summary></details><details open><summary>Potting Services</summary><p>We offer potting on in store purchases or you are welcome to bring in your own and we can pot them for you! There is a fee depending one what supplies are used. Visit us or call us for more details.</p></details><details><summary>Do we ship plants?</summary></details><details><summary>Ordering for Pick up?</summary></details></div></div>`;

  T[134] = `<div class='xr xr-134'><div class='xr-three-services'>${serviceTile('lawn','Landscape Design','Our team of experienced staff work.','pen-ruler')}${serviceTile('gardener','Seasonal Planting','Our team of experienced staff work.','spa')}${serviceTile('hands','Garden Renovation','Our team of experienced staff work.','seedling')}</div></div>`;

  T[135] = `<div class='xr xr-135'><div class='xr-about-metric-full'>${im('gardener','Garden expert')}<b>25+<small>Year Experience</small></b><div><small>ABOUT US</small><h2>About GreenAura</h2><p>A GreenAura, we are committed to environmentally sustainable gardening practices that promote biodiversity, conserve resources, and minimize our footprint.</p><section><strong>${ico('people-group')} Customized<br>Solutions</strong><strong>${ico('leaf')} Customized<br>Solutions</strong></section><span>Professional Expertise</span><i style='--w:80%'></i><span>Client satisfaction</span><i style='--w:94%'></i></div></div></div>`;

  T[136] = `<div class='xr xr-136'><header><small>OUR SERVICES</small><h2>Crafting Outdoor<br>Masterpieces</h2></header><div class='xr-master-cards'>${serviceTile('gardener','Seasonal Plantings','Year-round care for lasting color.','spa')}${serviceTile('path','Irrigation System','Water-smart systems for healthy beds.','faucet-drip')}${serviceTile('work','Landscape Design','Plans shaped around everyday use.','pen-ruler')}${serviceTile('garden','Garden Renovation','Restore and refresh tired spaces.','seedling')}</div><footer>We are longest independent gardening company&nbsp; <a href=#services>View All Services</a></footer></div>`;

  T[137] = `<div class='xr xr-137'><div class='xr-sustainable-copy'><h2>Create<br>sustainable<br>future</h2><p>Buy One. Plant one.</p><span>${ico('circle')} Scroll down</span></div><div class='xr-sustainable-mosaic'><small>Our top<br>picks</small><figure class='plant-a'><img src='assets/images/exact/s137-card-1.jpg' alt='Small potted tree'></figure><figure class='leaf-a'><img src='assets/images/exact/s137-card-2.jpg' alt='Monstera leaves'></figure><article class='copy-a'>In publishing and<br>graphic design,<br>Lorem ipsum is a<br>placeholder.</article><article class='copy-b'>In publishing and<br>graphic design,<br>Lorem.</article><figure class='leaf-b'><img src='assets/images/exact/s137-card-5.jpg' alt='Dew-covered green leaves'></figure></div></div>`;

  T[140] = `<div class='xr xr-140'><h2>Our Plants</h2><div class='xr-thin-plants'>${plantTile('plant','Arborvitae','$75')}${plantTile('leaf','Arboricola','$55')}${plantTile('monstera','Arbor Rose','$20')}${plantTile('pot','Arbor Tree','$82')}${plantTile('greenhouse','Arbor Mist','$48')}</div></div>`;
  T[143] = greenPlantBand(143);
  T[147] = T[30].replace('xr-30','xr-147');
  T[148] = lawnSolutions(148);

  T[150] = `<div class='xr xr-150'><header><small>Our Team</small><h2>Our Skilled Landscaping And<br>Snow Removal Experts</h2></header><div class='xr-team-carousel'><button>‹</button><article>${im('team1','Patricia Sanders')}<h3>Patricia Sanders</h3><p>Lead Landscaper</p></article><article>${im('team2','Sarah Thompson')}<h3>Sarah Thompson</h3><p>Lawn Care Specialist</p><div class='xr-social-stack'>●<br>◎<br>▶<br>↗</div></article><article>${im('team3','David Carter')}<h3>David Carter</h3><p>Snow Removal Supervisor</p></article><article>${im('team4','Michael Brown')}<h3>Michael Brown</h3><p>Customer Care Manager</p></article><button>›</button></div></div>`;

  T[154] = `<div class='xr xr-154'><h2>Still Have Questions?</h2><div class='xr-faq-columns'><div><details open><summary>What services does Floravu offer?</summary><p>Floravu provides garden design, planting, maintenance, lawn care, irrigation, pruning, and seasonal support.</p></details><details><summary>How do I schedule a consultation?</summary></details><details><summary>Do you work on small residential gardens?</summary></details><details><summary>Can you maintain an existing landscape?</summary></details></div><div><details open><summary>How does the design process work?</summary><p>We assess the site, define priorities, create a clear plan, and coordinate installation.</p></details><details><summary>Do you offer recurring care plans?</summary></details><details><summary>Are your practices environmentally responsible?</summary></details><details><summary>Which areas do you serve?</summary></details></div></div></div>`;

  var legacySelectors = {
    1: '[data-reference-source=2]', 4: '[data-reference-source=4]', 8: '[data-reference-source=7].seasonal',
    9: '.video-reference-7', 11: '[data-reference-source=9]', 13: '[data-reference-source=11]',
    14: '[data-reference-source=12]', 15: '[data-reference-source=14]', 16: '[data-reference-source=15]',
    17: '[data-reference-source=16]', 18: '[data-reference-source=17]', 19: '[data-reference-source=18]',
    20: '[data-reference-source=19]', 21: '[data-reference-source=21]', 22: '[data-reference-source=22]',
    24: '[data-reference-source=24]', 26: '[data-reference-source=26]', 27: '[data-reference-source=27]',
    28: '[data-reference-source=28]', 29: '[data-reference-source=29]', 30: '[data-reference-source=30]',
    31: '[data-reference-source=31]', 32: '[data-reference-source=32]', 33: '[data-reference-source=35]'
  };

  function apply() {
    Object.keys(T).forEach(function (key) {
      var id = Number(key);
      var selector = legacySelectors[id] || '[data-reference-number=' + id + ']';
      selector = selector.replace(/=(\d+)\]/, '=\'$1\']');
      var section = document.querySelector(selector);
      if (!section) return;
      var host = section.querySelector('.container-xl');
      if (!host) return;
      host.className = 'container-xl';
      host.innerHTML = T[id];
      section.classList.add('xr-section', 'xr-section-' + id);
    });
  }

  window.FloravuExactSections = { apply: apply, templates: T };
})();
