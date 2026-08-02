(function ($) {
  "use strict";

  function logoMarkup() { return "<a class=\"brand-mark\" href=\"#home\" aria-label=\"Floravu home\"><span class=\"brand-symbol\"><img src=\"assets/images/logo-leaf-flaticon.png\" alt=\"\" aria-hidden=\"true\"></span><span class=\"brand-text\">Floravu</span></a>"; }
  function menuMarkup() { return "<a href=\"#projects\">Projects</a><a href=\"#services\">Services</a><a href=\"#about\">About us</a><a href=\"#contact\">Contact</a>"; }
  function videoBlock(source, title, text, video) {
    var media = '<video autoplay muted loop playsinline preload="metadata"><source src="' + video + '" type="video/mp4"></video>';
    var body = '';

    if (source === 3) {
      body = '<div class="video-reference-grid"><article class="wide"><h2>Home Garden</h2><p>Private outdoor rooms shaped around real life.</p></article><article><h3>Plant Selection</h3><p>Regional plants with lasting seasonal structure.</p></article><article><h3>Hardscaping</h3><p>Paths and patios built for daily use.</p></article><article><h3>Public Garden</h3><p>Durable landscapes for shared spaces.</p></article></div>';
    } else if (source === 7) {
      body = '<div class="video-seasonal-copy"><p class="eyebrow light">Seasonal best collections</p><h2>Living gardens through every season</h2><div><article><h3>Indoor calm</h3><p>Architectural foliage.</p></article><article><h3>Fresh growth</h3><p>Season-led planting.</p></article><article><h3>Garden care</h3><p>Practical upkeep.</p></article></div></div>';
    } else {
      body = '<div class="video-cta-copy"><p class="eyebrow light">Expert plant care</p><h2>' + title + '</h2><p>' + text + '</p><a class="tiny-btn light" href="#contact">Book consultation</a></div>';
    }

    return '<section class="pd-section video-variant video-reference-' + source + '" data-video-source="body-section-' + source + '"><div class="container-xl video-shell">' + media + body + '</div></section>';
  }

  var img = {
    desk: "assets/images/reference-photos/greenhouse.jpg",
    bench: "assets/images/reference-photos/path.jpg",
    work: "assets/images/reference-photos/work.jpg",
    path: "assets/images/reference-photos/garden.jpg",
    pot: "assets/images/reference-photos/pot.jpg",
    indoor: "assets/images/reference-photos/plant.jpg",
    leaf: "assets/images/reference-photos/leaf.jpg",
    hands: "assets/images/reference-photos/hands.jpg",
    woman: "assets/images/reference-photos/gardener.jpg",
    garden: "assets/images/reference-photos/gardenhero.jpg",
    tools: "assets/images/reference-photos/tools.jpg",
    mow: "assets/images/reference-photos/mow.jpg"
  };

  function icon(name) { return '<i class="fa-solid fa-' + name + '"></i>'; }
  function sec(n, cls, body) { var ids = { 1: "about", 4: "shop", 17: "services", 20: "projects" }; return '<section class="pd-section ' + cls + '" data-reference-source="' + n + '"' + (ids[n] ? ' id="' + ids[n] + '"' : '') + '><div class="container-xl">' + body + '</div></section>'; }
  function heading(k, h, p) { return '<div class="pd-head"><p class="eyebrow">' + k + '</p><h2>' + h + '</h2>' + (p ? '<span>' + p + '</span>' : '') + '</div>'; }
  function product(name, price, photo) { return '<article class="plant-card"><img src="' + photo + '" alt="' + name + '" loading="lazy"><h3>' + name + '</h3><p>' + price + '</p><button type="button" aria-label="Add ' + name + '">' + icon('plus') + '</button></article>'; }
  var inspectionCopyState = { multi: false, value: "" };
  var inspectionAssetBase = "http://localhost/templates/gardening/referencias/references-used";

  function inspectionAssetPair(kind, bodyIndex) {
    if (kind === "hero") {
      return {
        cropped: inspectionAssetBase + "/hero/cutted-section/hero-reference-cutted.jpg",
        original: inspectionAssetBase + "/hero/original/hero-reference-original.jpg"
      };
    }

    if (kind === "footer") {
      return {
        cropped: inspectionAssetBase + "/footer/cutted-section/footer-reference-cutted.jpg",
        original: inspectionAssetBase + "/footer/original/footer-reference-original.jpg"
      };
    }

    if (bodyIndex >= 73) {
      var cropIndex = String(bodyIndex - 72).padStart(2, "0");
      var originalExtension = window.FloravuNewSections ? window.FloravuNewSections.originalExtension(bodyIndex) : "jpg";
      var newFolder = inspectionAssetBase + "/body-content/section%20" + bodyIndex;

      return {
        cropped: newFolder + "/cutted-section/cutted-" + cropIndex + ".jpg",
        original: newFolder + "/original/original-reference." + originalExtension
      };
    }

    var extension = (bodyIndex >= 4 && bodyIndex <= 10) ||
      (bodyIndex >= 14 && bodyIndex <= 16) ||
      (bodyIndex >= 23 && bodyIndex <= 29) ? "png" : "jpg";
    var padded = String(bodyIndex).padStart(2, "0");
    var folder = inspectionAssetBase + "/body-content/section%20" + bodyIndex;

    return {
      cropped: folder + "/cutted-section/section-" + padded + "-cutted." + extension,
      original: folder + "/original/section-" + padded + "-original." + extension
    };
  }

  function inspectionControlsMarkup(number, kind, bodyIndex) {
    var assets = inspectionAssetPair(kind, bodyIndex);
    var context = kind === "body" ? "section " + number + " (source " + bodyIndex + ")" : kind + " " + number;

    return '<div class="stage-inspector" aria-label="Inspection controls for ' + context + '">' +
      '<a class="stage-inspector-control stage-inspector-cropped" href="' + assets.cropped + '" target="_blank" rel="noopener noreferrer" aria-label="Open cropped image for ' + context + '" title="Open cropped image">C</a>' +
      '<button class="stage-inspector-control stage-inspector-copy-toggle" type="button" aria-pressed="false" aria-label="Enable multiple section copy mode" title="Toggle multiple copy mode">C+</button>' +
      '<a class="stage-inspector-control stage-inspector-original" href="' + assets.original + '" target="_blank" rel="noopener noreferrer" aria-label="Open original image for ' + context + '" title="Open original image">O</a>' +
      '<button class="stage-inspector-control stage-inspector-number" type="button" data-copy-number="' + number + '" aria-label="Copy section number ' + number + '" title="Copy section number">' + number + '</button>' +
      '</div>';
  }

  function parsedInspectionSelection(value) {
    var normalized = String(value || "").trim();
    if (!/^\d+(?:,\d+)*$/.test(normalized)) return [];

    var seen = {};
    return normalized.split(",").filter(function (item) {
      if (seen[item]) return false;
      seen[item] = true;
      return true;
    });
  }

  function fallbackInspectionCopy(value) {
    return new Promise(function (resolve, reject) {
      var field = document.createElement("textarea");
      field.value = value;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();

      var copied = false;
      try {
        copied = document.execCommand("copy");
      } catch (error) {
        copied = false;
      }

      document.body.removeChild(field);
      if (copied) resolve();
      else reject(new Error("Clipboard write failed"));
    });
  }

  function writeInspectionClipboard(value) {
    if (navigator.clipboard && window.isSecureContext && typeof navigator.clipboard.writeText === "function") {
      return navigator.clipboard.writeText(value).catch(function () {
        return fallbackInspectionCopy(value);
      });
    }

    return fallbackInspectionCopy(value);
  }

  function syncInspectionCopyMode() {
    $(".stage-inspector-copy-toggle")
      .toggleClass("is-active", inspectionCopyState.multi)
      .attr("aria-pressed", String(inspectionCopyState.multi))
      .attr("aria-label", inspectionCopyState.multi ? "Disable multiple section copy mode" : "Enable multiple section copy mode");
  }

  function showInspectionCopyResult(button, copied) {
    var $button = $(button);
    var number = $button.attr("data-copy-number");
    window.clearTimeout(button.inspectionFeedbackTimer);
    $button
      .toggleClass("is-copied", copied)
      .toggleClass("is-copy-error", !copied)
      .html(copied ? '<i class="fa-solid fa-check" aria-hidden="true"></i>' : '<i class="fa-solid fa-xmark" aria-hidden="true"></i>');

    $(".inspection-copy-status").text(copied ? "Copied " + inspectionCopyState.value : "Could not copy " + inspectionCopyState.value);

    button.inspectionFeedbackTimer = window.setTimeout(function () {
      $button.removeClass("is-copied is-copy-error").text(number);
    }, 900);
  }

  function initInspectionControls() {
    if ($(".stage-inspector").length) return;

    $(".hero-section").append(inspectionControlsMarkup(0, "hero", 0));

    var legacyControlNumber = 0;
    var $sections = $(".pd-section");
    $sections.each(function () {
      var $section = $(this);
      var kind = "body";
      var sourceIndex = 0;
      var controlNumber = 0;
      var videoSource = $section.attr("data-video-source");
      var newReferenceNumber = parseInt($section.attr("data-reference-number"), 10);

      if (newReferenceNumber >= 73) {
        sourceIndex = newReferenceNumber;
        controlNumber = newReferenceNumber;
      } else if (videoSource) {
        legacyControlNumber += 1;
        controlNumber = legacyControlNumber;
        sourceIndex = parseInt(videoSource.replace("body-section-", ""), 10);
      } else if ($section.hasClass("contact-band")) {
        legacyControlNumber += 1;
        controlNumber = legacyControlNumber;
        kind = "footer";
      } else {
        legacyControlNumber += 1;
        controlNumber = legacyControlNumber;
        sourceIndex = parseInt($section.attr("data-reference-source"), 10);
      }

      $section.attr("data-display-number", controlNumber);
      $section.append(inspectionControlsMarkup(controlNumber, kind, sourceIndex));
    });

    $(".site-footer").append(inspectionControlsMarkup(legacyControlNumber + 1, "footer", 0));
    $("body").append('<span class="visually-hidden inspection-copy-status" aria-live="polite"></span>');
    syncInspectionCopyMode();

    $(document).on("click", ".stage-inspector-copy-toggle", function () {
      inspectionCopyState.multi = !inspectionCopyState.multi;
      syncInspectionCopyMode();
    });

    $(document).on("click", ".stage-inspector-number", function () {
      var button = this;
      var number = String($(button).attr("data-copy-number"));
      var selection = parsedInspectionSelection(inspectionCopyState.value);

      if (inspectionCopyState.multi) {
        if (selection.indexOf(number) === -1) selection.push(number);
        inspectionCopyState.value = selection.join(",");
      } else {
        inspectionCopyState.value = number;
      }

      writeInspectionClipboard(inspectionCopyState.value).then(function () {
        showInspectionCopyResult(button, true);
      }).catch(function () {
        showInspectionCopyResult(button, false);
      });
    });
  }

  function enhanceReferenceFidelity() {
    var $serviceReference = $('.pd-section[data-reference-source="17"] .container-xl');
    if ($serviceReference.length && !$serviceReference.find('.legacy-reference-tail').length) {
      $serviceReference.append('<div class="legacy-reference-tail"><img src="' + img.woman + '" alt="Floravu garden specialist"><div><p class="eyebrow">About Floravu</p><h2>Garden expertise rooted in practical care</h2><p>We combine planting knowledge, seasonal maintenance, and clear project planning for landscapes that last.</p><div class="legacy-reference-points"><span><b>25+</b> years of experience</span><span><b>1k+</b> gardens cared for</span></div></div></div>');
    }

    var $projectReference = $('.pd-section[data-reference-source="19"] .container-xl');
    if ($projectReference.length && !$projectReference.find('.legacy-reference-caption').length) {
      $projectReference.append('<div class="legacy-reference-caption"><p class="eyebrow">Selected projects</p><h2>Our Best Work</h2><a class="tiny-btn green" href="#projects">View projects</a></div>');
    }

    var $impactReference = $('.pd-section[data-reference-source="21"] .container-xl');
    if ($impactReference.length && !$impactReference.find('.legacy-impact-nav').length) {
      $impactReference.prepend('<div class="legacy-impact-nav"><span>Buy one, plant one</span><span>Impact</span><span>Projects</span><span>Journal</span></div>');
    }

    var $plantReference = $('.pd-section[data-reference-source="22"] .thin-products');
    if ($plantReference.length && $plantReference.find('.plant-card').length === 4) {
      $plantReference.append(product('Garden Fern', '$48', img.desk));
    }

    var $commitmentReference = $('.pd-section[data-reference-source="6"] .icon-grid');
    if ($commitmentReference.length && $commitmentReference.children('article').length === 3) {
      $commitmentReference.append('<article><i class="fa-solid fa-hand-holding-heart" aria-hidden="true"></i><h3>Responsible Garden Care</h3><p>Lower-impact materials and practical care plans.</p></article>');
    }

    var $categoryReference = $('.new-section[data-reference-number="142"] .row');
    if ($categoryReference.length && $categoryReference.children('[class*="col-"]').length === 3) {
      $categoryReference.children('[class*="col-"]').removeClass('col-md-4').addClass('col-md-2');
      $categoryReference.append('<div class="col-md-2"><a href="#shop"><img src="' + img.indoor + '" alt="Indoor plants"><span>Indoor</span></a></div><div class="col-md-2"><a href="#shop"><img src="' + img.pot + '" alt="Pots and planters"><span>Planters</span></a></div><div class="col-md-2"><a href="#services"><img src="' + img.tools + '" alt="Garden tools"><span>Garden care</span></a></div>');
    }
    var $contactReference = $('.contact-band .container-xl');
    if ($contactReference.length && !$contactReference.find('.reference-footer-strip').length) {
      $contactReference.html('<div class="reference-footer-strip"><div><strong>hello@floravu.com</strong><span>+1 415 555 0198</span><small>2026 Floravu. All Rights Reserved.</small></div><nav aria-label="Contact social links"><a href="#home" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a><a href="#home" aria-label="X"><i class="fa-brands fa-x-twitter"></i></a><a href="#home" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a></nav><div><a href="#home">Privacy Policy</a><a href="#home">Legal Notice</a><a href="#home">Cookies Policy</a></div></div>');
    }
  }
  var html = '';
  html += sec(2, 'dark timeline', '<div class="dark-title"><span>How it works</span><h2>Simple steps for our landscape work</h2></div><div class="steps"><article><b>01</b><h3>Design consultation</h3><p>Site goals and material direction.</p></article><article><b>02</b><h3>Design and planning</h3><p>Planting, paths, and budget.</p></article><article><b>03</b><h3>Implementation</h3><p>Construction with careful sequencing.</p></article><article><b>04</b><h3>Garden decorating</h3><p>Final pots, texture, and rhythm.</p></article></div>');
  html += sec(3, 'ribbon', '<div class="ribbon-row" data-simplebar><article class="wide"><img src="' + img.bench + '" alt="Home garden"><h3>Home Garden</h3><p>Private outdoor rooms.</p></article><article><img src="' + img.work + '" alt="Plant selection"><h3>Plant Selection</h3><p>Seasonal palettes.</p></article><article><img src="' + img.path + '" alt="Hardscape"><h3>Hardscaping</h3><p>Paths and patios.</p></article><article><img src="' + img.garden + '" alt="Public garden"><h3>Public Garden</h3><p>Commercial landscapes.</p></article></div>');
  html += videoBlock(3, 'Garden motion study', 'A moving greenhouse variant of the service card rhythm.', 'https://videos.pexels.com/video-files/34729828/14721996_1080_1920_30fps.mp4');
  html += sec(4, 'products', heading('Indoor plants', 'Indoor Favorites', '<button class="pill-btn" type="button">View all items</button>') + '<div class="product-row">' + product('Sansevieria Trifasciata', '$29.00', img.indoor) + product('Golden Pothos', '$18.00', img.leaf) + product('Pruning Shears', '$34.00', img.tools) + product('Earth Matte Pot', '$42.00', img.pot) + '</div>');
  html += sec(5, 'dark cta', '<div class="cta-pill"><div>' + heading('Expert Plant Care', 'Expert plant care at your doorstep', 'From pruning to soil rescue, our specialists keep gardens strong.') + '<a href="#contact" class="tiny-btn light">Book consultation</a></div><div class="float-imgs"><img src="' + img.hands + '" alt="Seedling" loading="lazy"><img src="' + img.pot + '" alt="Potted plant" loading="lazy"></div></div>');
  html += videoBlock(5, 'Indoor plant care in motion', 'A video duplicate that keeps the dark consultation structure.', 'https://videos.pexels.com/video-files/7351637/7351637-hd_1920_1080_24fps.mp4');
  html += sec(6, 'icons', heading('Plant benefits', 'Our Eco-Commitment', '') + '<div class="icon-grid"><article>' + icon('recycle') + '<h3>Biodegradable Packing</h3><p>Plastic-light delivery.</p></article><article>' + icon('leaf') + '<h3>Carbon-Neutral Shipping</h3><p>Consolidated routes.</p></article><article>' + icon('lock') + '<h3>Ethical Local Sourcing</h3><p>Regional growers.</p></article></div>');
  html += sec(7, 'seasonal', heading('Curated for the moment', 'Seasonal Best Collections', '') + '<div class="seasonal-cards"><article><img src="' + img.indoor + '" alt="Areca"><h3>Areca Palm</h3><a href="#shop">Explore Collection</a></article><article><img src="' + img.leaf + '" alt="Peace Lily"><h3>Peace Lily</h3><a href="#shop">Explore Collection</a></article><article><img src="' + img.pot + '" alt="Monstera"><h3>Monstera Deliciosa</h3><a href="#shop">Explore Collection</a></article></div>');
  html += videoBlock(7, 'Seasonal care in motion', 'A video duplicate for the product collection section.', 'https://videos.pexels.com/video-files/9467011/9467011-uhd_2160_3840_25fps.mp4');
  html += sec(8, 'peach band', '<h2>Learn how we take care of your plant at every stage from our greenhouse to your home.</h2>' + icon('hand-holding-heart'));
  html += sec(9, 'dark sellers', '<div class="mini-head"><h2>Here are the best seller</h2><a href="#shop">Shop all plants</a></div><div class="seller-row">' + product('Monstera Deliciosa', '$19.00', img.indoor) + product('Pink Anthurium', '$58.00', img.pot) + product('Aglaonema Red', '$38.00', img.leaf) + '</div>');
  html += sec(10, 'planter', '<div class="split"><div class="stack-img"><img src="' + img.pot + '" alt="Planter"><img src="' + img.indoor + '" alt="Plant stack"></div><div>' + heading('Unique Plant', 'Assemble your own unique planter', '') + '<ul class="check-list"><li>Get exclusive plant offers</li><li>Set watering reminders</li><li>Collect seasonal tips</li><li>Register plant updates</li></ul><a class="tiny-btn coral" href="#contact">Tell me more</a></div></div>');
  html += sec(11, 'benefits dark', '<div class="strip-grid"><article>' + icon('seedling') + '<h3>Healthy Plants</h3><p>Fresh handpicked plants.</p></article><article>' + icon('truck-fast') + '<h3>Fast Delivery</h3><p>Carefully packed.</p></article><article>' + icon('sun-plant-wilt') + '<h3>Easy Care</h3><p>Low-maintenance picks.</p></article><article>' + icon('headset') + '<h3>Expert Support</h3><p>Specialist guidance.</p></article></div>');
  html += sec(12, 'shop-grid', heading('Most Popular Plants', 'Fresh choices for quiet interiors', '') + '<div class="grid-products">' + product('Monstera', '$45.00', img.indoor) + product('Rubber Plant', '$40.00', img.leaf) + product('Snake Plant', '$30.00', img.pot) + product('Peace Lily', '$35.00', img.hands) + product('Pothos', '$28.00', img.indoor) + product('Aloe Vera', '$25.00', img.pot) + product('ZZ Plant', '$72.00', img.leaf) + product('Fiddle Fig', '$60.00', img.indoor) + '</div>');
  html += sec(14, 'editorial', '<div class="editorial-grid"><div>' + heading('Plant Caring', 'Tree Love<br>Life Shine', '') + '<a class="tiny-btn" href="#services">Choose Green</a></div><article><img src="' + img.pot + '" alt="Small plant"><span>Growline</span></article><article><h3>Gardening</h3><p>Plants reduce stress, refresh air, and add daily focus.</p></article><img src="' + img.woman + '" alt="Gardener"></div>');
  html += sec(15, 'mini-shop', heading('Plant shop', 'House Plant', 'Best plants for soothing and purifying oxygen.') + '<div class="mini-products">' + product('Asplenium', 'Potted', img.indoor) + product('Succulent', 'Semi', img.pot) + product('Monstera', 'Small', img.leaf) + product('Aloe Vera', 'Medium', img.hands) + '</div>');
  html += sec(16, 'rooted', '<div class="rooted-grid"><div><h2>Rooted in pure bliss</h2><p>Ideal plants for indoor home conditions.</p><a class="tiny-btn" href="#shop">Learn care</a></div><figure><img src="' + img.pot + '" alt="Pure plant"><figcaption>Fresh roots. Pure joy.</figcaption></figure><div><h3>Evergreen Bliss</h3><p>Little green touches make life brighter.</p></div></div>');
  html += sec(17, 'service-cards', '<div class="three-cards"><article><img src="' + img.tools + '" alt="Landscape"><i class="fa-solid fa-drafting-compass"></i><h3>Landscape Designing</h3><p>Plans from expert staff.</p></article><article><img src="' + img.work + '" alt="Seasonal"><i class="fa-solid fa-spa"></i><h3>Seasonal Planting</h3><p>Color year round.</p></article><article><img src="' + img.mow + '" alt="Renovation"><i class="fa-solid fa-shovel"></i><h3>Garden Renovation</h3><p>Restore tired yards.</p></article></div>');
  html += sec(18, 'about-metrics', '<div class="split"><img class="circle-img" src="' + img.woman + '" alt="Garden expert"><div>' + heading('About Floravu', 'Garden teams, practical care, calm outdoor results', 'Naturalistic planting with maintenance and irrigation plans.') + '<div class="meter"><span>Professional experts</span><i style="width:82%"></i></div><div class="meter"><span>Client satisfaction</span><i style="width:96%"></i></div></div></div>');
  html += sec(19, 'master', heading('Our services', 'Crafting Outdoor Masterpieces', '') + '<div class="outline-cards"><article><img src="' + img.bench + '" alt="Seasonal"><h3>Seasonal Plantings</h3><a href="#contact">Read More</a></article><article><img src="' + img.path + '" alt="Irrigation"><h3>Irrigation System</h3><a href="#contact">Read More</a></article><article><img src="' + img.garden + '" alt="Landscape"><h3>Landscape Design</h3><a href="#contact">Read More</a></article><article><img src="' + img.work + '" alt="Renovation"><h3>Garden Renovation</h3><a href="#contact">Read More</a></article></div>');
  html += sec(21, 'impact', '<div class="impact-grid"><div>' + heading('Buy one, plant one', 'Real Impact on Environment', 'Each project funds climate-positive planting.') + '</div><div class="impact-mosaic"><article>In Business</article><article class="dark">Climate Impact</article><article>60%</article><article class="dark">Trees Saved</article><article>1.5M</article><img src="' + img.garden + '" alt="Forest"></div></div>');
  html += sec(22, 'carousel', '<h2>Our Plants</h2><div class="thin-products" data-simplebar>' + product('Arborvitae', '$75', img.indoor) + product('Arborvine', '$55', img.leaf) + product('Arborrose', '$20', img.pot) + product('Arbor Tree', '$82', img.hands) + '</div>');
  html += sec(23, 'care-split', '<div class="split"><div>' + heading('About company', 'Professional Garden Care', 'Full service lawn, landscape, and garden health.') + '<a class="tiny-btn green" href="#contact">Learn More</a></div><img class="round-img" src="' + img.work + '" alt="Professional care"></div>');
  html += sec(24, 'offers', heading('Our services', 'What Can We Offer', '') + '<div class="offer-grid"><article>' + icon('sprout') + '<b>01</b><h3>Garden Design</h3><p>Plant and bed planning.</p></article><article>' + icon('faucet-drip') + '<b>02</b><h3>Irrigation System</h3><p>Water-smart setups.</p></article><article>' + icon('tree') + '<b>03</b><h3>Tree Services</h3><p>Pruning and recovery.</p></article><article>' + icon('scissors') + '<b>04</b><h3>Hedge Cutting</h3><p>Sharp structure.</p></article></div>');
  html += sec(25, 'testimonial', '<div class="testimonial-wrap"><img src="' + img.pot + '" alt="Succulent"><blockquote><span>Testimonials</span><h2>What Clients Say</h2><p>Floravu turned our small terrace into a garden that feels fresh, intentional, and easy to maintain.</p><cite>Jane Gard</cite></blockquote><img src="' + img.leaf + '" alt="Cactus"></div>');
  html += sec(26, 'care-steps', heading('', 'Taking care of your plants the right way', 'Follow this instruction.') + '<div class="care-cards"><article><img src="' + img.hands + '" alt="Inoculate"><b>01</b><h3>Inoculate</h3><p>Apply bacterial coating.</p></article><article><img src="' + img.woman + '" alt="Sow"><b>02</b><h3>Sow the seeds</h3><p>Prepare moist soil.</p></article><article><img src="' + img.pot + '" alt="Pots"><b>03</b><h3>Place the pots</h3><p>Use bright indirect light.</p></article></div>');
  html += sec(27, 'product-band', '<h2>Make your home beautiful with these products</h2><div class="green-products">' + product('Dumb Cane', '$15.99', img.indoor) + product('Spider Plant', '$12.99', img.leaf) + product('Spotted Ever', '$18.99', img.pot) + product('Freddie Plant', '$10.99', img.hands) + '</div>');
  html += sec(28, 'stats', '<div class="stat-layout"><div><b>130+</b><span>Satisfied homeowners</span></div><div><h2>Growing Green Together</h2><p>Family gardens, daily rituals, and long-term care plans.</p></div><div class="stat-photo-grid"><img src="' + img.woman + '" alt="Family"><img src="' + img.work + '" alt="Planting"><article><b>3k+</b><span>Urban plants</span></article><img src="' + img.tools + '" alt="Work"></div><div><b>20+</b><span>Years of practice</span></div></div>');
  html += sec(29, 'accordion-sec', '<div class="accordion-layout"><div>' + heading('Services', 'Landscape plans for daily life', 'Care, design, and maintenance in one place.') + '</div><img src="' + img.work + '" alt="Watering"><div class="accordion-stack"><button class="active" type="button">Garden Design Landscaping</button><button type="button">Garden Maintenance</button><button type="button">Planting and Pruning</button><button type="button">Garden Consultation</button><button type="button">Seasonal Preparation</button></div></div>');
  html += sec(30, 'consult', '<div class="consult-grid"><img src="' + img.woman + '" alt="Consultant"><div>' + heading('About us', 'We do not just work on lawns. We bring them to life.', 'Our team combines skill, dedication, and eco-friendly practices.') + '<div class="mini-points"><span>' + icon('check') + ' Committed to greener lawns</span><span>' + icon('check') + ' Trusted lawn care experts</span></div><a class="tiny-btn green" href="#contact">Learn More About Us</a></div></div>');
  html += sec(31, 'priority', '<div class="priority-grid"><div><h2>Your property safety and satisfaction are top priorities</h2><p>Inspection, equipment, and planning before every project.</p></div><article><b>25+</b><span>Years of experience</span></article><article class="green"><b>1000+</b><span>Trees safely removed</span></article><img src="' + img.work + '" alt="Garden expert"></div>');
  html += sec(32, 'trusted', '<div class="process-grid"><img src="' + img.work + '" alt="Gardener"><div><h2>Your trusted process from start to perfect finish</h2><article><b>01</b><h3>Free consultation and assessment</h3></article><article><b>02</b><h3>Customized lawn care plan</h3></article><article><b>03</b><h3>Professional lawn service</h3></article><article><b>04</b><h3>Ongoing care and follow-up</h3></article></div></div>');
  html += sec(35, 'power', '<h2>Plants. The Power On Your Side.</h2><div class="power-cards"><article>' + icon('house') + '<h3>Garden Plant</h3><p>Therapeutic homes.</p></article><article>' + icon('briefcase') + '<h3>Office Plant</h3><p>More oxygen.</p></article><article>' + icon('tree-city') + '<h3>Home Plant</h3><p>Cleaner rooms.</p></article><article>' + icon('building') + '<h3>Apartment Plant</h3><p>Balcony friendly.</p></article><article>' + icon('seedling') + '<h3>Garden Plant</h3><p>Layered beds.</p></article><article>' + icon('road') + '<h3>Streets Plant</h3><p>Urban planting.</p></article></div>');
  html += sec(36, 'mission', heading('Mission and Values', 'Our key pillars', '') + '<div class="mission-row"><article>' + icon('hands-holding-circle') + '<h3>Social Consciousness</h3></article><article>' + icon('leaf') + '<h3>Sustainability</h3></article><article>' + icon('people-group') + '<h3>Community Improvement</h3></article><article>' + icon('scale-balanced') + '<h3>Economic Impact</h3></article><article>' + icon('handshake') + '<h3>Fair Trade</h3></article></div>');
  if (window.FloravuNewSections) html += window.FloravuNewSections.render();
  html += '<section class="pd-section contact-band" id="contact"><div class="container-xl"><div class="contact-panel"><div><p class="eyebrow light">Ready to begin</p><h2>Transform your garden with a calmer, greener plan.</h2></div><form class="contact-form"><label><span>Name</span><input type="text" placeholder="Your name"></label><label><span>Email</span><input type="email" placeholder="you@example.com"></label><button type="submit">Request Consult</button></form></div></div></section>';
  html += '<footer class="site-footer" aria-label="Floravu footer"><div class="footer-inner"><div class="footer-contact"><a href="mailto:hello@floravu.com">hello@floravu.com</a><span>+1 415 555 0198 | +1 415 555 0142</span><small>&copy; 2026 Floravu. All Rights Reserved.</small></div><div class="footer-social"><a href="#home" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a><a href="#home" aria-label="X"><i class="fa-brands fa-x-twitter"></i></a><a href="#home" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a></div><div class="footer-links"><a href="#home">Privacy Policy</a><a href="#home">Legal Notice</a><a href="#home">Cookies Policy</a><span>Design by Floravu</span></div></div></footer>';

  $(function () {
    $('.hero-nav').html(menuMarkup());
    if (!$('.fixed-topbar').length) $('body').prepend('<div class="fixed-topbar"><div class="fixed-inner">' + logoMarkup() + '<nav class="topbar-nav" aria-label="Sticky navigation">' + menuMarkup() + '</nav><button class="fixed-menu-toggle" type="button" aria-label="Open menu"><i class="fa-solid fa-bars"></i></button></div></div>');
    $('#bodyContent').html(html);
    if (window.FloravuNewSections) window.FloravuNewSections.init();
    enhanceReferenceFidelity();
    initInspectionControls();
    $('.site-footer .footer-contact').prepend(logoMarkup());
    if (window.SimpleBar) $('[data-simplebar]').each(function () { if (!this.SimpleBar) new SimpleBar(this); });
    $('.primary-cta, .ghost-link, .card-arrow, .hero-nav a').on('click', function () { $(this).trigger('blur'); });
    $('.filter-tabs button').on('click', function () { var f = $(this).data('filter'); $('.filter-tabs button').removeClass('active'); $(this).addClass('active'); $('.gallery-grid img').each(function () { $(this).toggle(f === 'all' || $(this).data('cat') === f); }); });
    $('.accordion-stack button').on('click', function () { $(this).siblings().removeClass('active'); $(this).addClass('active'); });
    $(document).on('click', '.has-sub > button', function () { $(this).closest('.has-sub').toggleClass('open').siblings('.has-sub').removeClass('open'); });
    $(document).on('click', '.fixed-menu-toggle', function () { $('.fixed-topbar').toggleClass('menu-open'); });
    function syncTopbar() { var footer = document.querySelector('.site-footer'); var footerTop = footer ? footer.getBoundingClientRect().top : 99999; $('.fixed-topbar').toggleClass('visible', window.scrollY > 180 && footerTop > window.innerHeight); }
    $(window).on('scroll resize', syncTopbar); syncTopbar();
    $('.contact-form').on('submit', function (e) { e.preventDefault(); $(this).addClass('sent'); $(this).find('button').text('Request Sent'); });

    // Circular-project carousel.
    var heroTrack = document.querySelector('.hero-track');
    function heroCardStep() {
      var card = heroTrack && heroTrack.querySelector('.hero-project');
      return card ? card.getBoundingClientRect().width : 320;
    }
    function updateHeroStatus() {
      if (!heroTrack) return;
      var projects = Array.prototype.slice.call(heroTrack.querySelectorAll('.hero-project'));
      if (!projects.length) return;
      var nearest = projects.reduce(function (best, item, index) {
        var distance = Math.abs(item.offsetLeft - heroTrack.scrollLeft);
        return distance < best.distance ? { index: index, distance: distance } : best;
      }, { index: 0, distance: Infinity });
      $('.hero-carousel-status').text(String(nearest.index + 1).padStart(2, '0') + ' / ' + String(projects.length).padStart(2, '0'));
    }
    $('.hero-carousel-next').on('click', function () {
      if (!heroTrack) return;
      var max = heroTrack.scrollWidth - heroTrack.clientWidth;
      heroTrack.scrollTo({ left: heroTrack.scrollLeft >= max - 8 ? 0 : heroTrack.scrollLeft + heroCardStep(), behavior: 'smooth' });
    });
    $('.hero-carousel-prev').on('click', function () {
      if (!heroTrack) return;
      var max = heroTrack.scrollWidth - heroTrack.clientWidth;
      heroTrack.scrollTo({ left: heroTrack.scrollLeft <= 8 ? max : heroTrack.scrollLeft - heroCardStep(), behavior: 'smooth' });
    });
    if (heroTrack) heroTrack.addEventListener('scroll', updateHeroStatus, { passive: true });
    updateHeroStatus();
    $('.hero-menu-toggle').on('click', function () {
      var open = !$('.hero-header').hasClass('menu-open');
      $('.hero-header').toggleClass('menu-open', open);
      $(this).attr('aria-expanded', String(open));
    });
    $('.hero-nav a').on('click', function () {
      $('.hero-header').removeClass('menu-open');
      $('.hero-menu-toggle').attr('aria-expanded', 'false');
    });
    if (!$('.media-modal').length) $('body').append('<div class="media-modal" aria-hidden="true"><div class="media-backdrop"></div><div class="media-dialog"><button class="media-close" type="button" aria-label="Close media"><i class="fa-solid fa-xmark"></i></button><div class="media-stage"></div></div></div><a class="floating-contact" href="#contact" aria-label="Request consultation"><i class="fa-solid fa-message"></i><span>Consult</span></a>');
    function openModal(markup) { $('.media-stage').html(markup); $('.media-modal').attr('aria-hidden', 'false').addClass('open'); if (window.SimpleBar) $('.media-stage [data-simplebar]').each(function () { if (!this.SimpleBar) new SimpleBar(this); }); }
    function closeModal() { $('.media-modal').removeClass('open').attr('aria-hidden', 'true'); $('.media-stage').empty(); }
    $(document).on('click', '.media-close, .media-backdrop', closeModal);
    $(document).on('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
    $(document).on('click', '.gallery-grid img, .three-cards img, .outline-cards img, .seasonal-cards img', function () { openModal('<img src="' + this.currentSrc + '" alt="' + (this.alt || 'Garden image') + '">'); });
    $(document).on('click', '.video-shell', function (e) { if ($(e.target).is('a')) return; var src = $(this).find('video source').attr('src'); openModal('<video autoplay controls playsinline src="' + src + '"></video>'); });

    $('.gallery-grid img').slice(4).addClass('gallery-extra').hide();
    if (!$('.gallery-load').length) $('.gallery .gallery-grid').after('<button class="gallery-load" type="button">Load More Projects</button>');
    $(document).on('click', '.gallery-load', function () { $('.gallery-extra').slideDown(220).removeClass('gallery-extra'); $(this).remove(); });

    function animateNumber(el) { var raw = $(el).text(); var m = raw.match(/(\d+)/); if (!m || el.dataset.counted) return; el.dataset.counted = '1'; var end = parseInt(m[1], 10); var obj = { v: 0 }; if (window.gsap) gsap.to(obj, { v: end, duration: 1.4, ease: 'power2.out', onUpdate: function () { $(el).text(raw.replace(m[1], Math.round(obj.v))); } }); }
    var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (!entry.isIntersecting) return; var el = entry.target; el.classList.add('in-view'); if (window.gsap) gsap.fromTo(el, { y: 36, opacity: .2 }, { y: 0, opacity: 1, duration: .75, ease: 'power2.out' }); $(el).find('b,strong').each(function(){ animateNumber(this); }); io.unobserve(el); }); }, { threshold: .16 }) : null;
    if (io) $('.pd-section, .site-footer, .hero-section').each(function () { io.observe(this); });

    function syncActiveNav() { var ids = ['about','services','projects','contact']; var active = 'home'; ids.forEach(function(id){ var el = document.getElementById(id); if (el && el.getBoundingClientRect().top < 180) active = id; }); $('.hero-nav a, .topbar-nav a').removeClass('active').filter('[href="#' + active + '"]').addClass('active'); }
    $(window).on('scroll resize', syncActiveNav); syncActiveNav();

  });
})(jQuery);
