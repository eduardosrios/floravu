(function () {
  'use strict';

  function icon(name) {
    return '<i class="fa-solid fa-' + name + '" aria-hidden="true"></i>';
  }

  function setIcon(button, name, label) {
    if (!button) return;
    button.innerHTML = icon(name);
    button.setAttribute('aria-label', label);
  }

  function enhance() {
    document.querySelectorAll('.xr header nav').forEach(function (nav) {
      var buttons = nav.querySelectorAll('button');
      if (buttons.length > 1) {
        setIcon(buttons[0], 'arrow-left', 'Previous');
        setIcon(buttons[buttons.length - 1], 'arrow-right', 'Next');
      }
    });

    document.querySelectorAll('.xr-team-carousel').forEach(function (carousel) {
      var buttons = carousel.querySelectorAll(':scope > button');
      setIcon(buttons[0], 'arrow-left', 'Previous team member');
      setIcon(buttons[buttons.length - 1], 'arrow-right', 'Next team member');
    });

    document.querySelectorAll('.xr-social-stack').forEach(function (stack) {
      stack.innerHTML = '<i class="fa-brands fa-x-twitter"></i><br>' +
        '<i class="fa-brands fa-linkedin-in"></i><br>' +
        '<i class="fa-brands fa-instagram"></i><br>' +
        '<i class="fa-brands fa-facebook-f"></i>';
      stack.setAttribute('aria-label', 'Social profiles');
    });

    document.querySelectorAll('.xr form').forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var input = form.querySelector('input[type="email"]');
        var button = form.querySelector('button[type="submit"]');
        if (!input || !button || !input.checkValidity()) {
          if (input) input.reportValidity();
          return;
        }
        button.textContent = 'Subscribed';
        button.setAttribute('aria-live', 'polite');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(enhance, 0); });
  } else {
    setTimeout(enhance, 0);
  }
})();
