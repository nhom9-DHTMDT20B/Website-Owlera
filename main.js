/* ===================================
   OWLERA - Main JavaScript
   =================================== */

$(document).ready(function () {

  // --- Navbar scroll effect ---
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar-owlera').addClass('scrolled');
    } else {
      $('.navbar-owlera').removeClass('scrolled');
    }

    // Back to top button
    if ($(this).scrollTop() > 400) {
      $('.back-to-top').addClass('show');
    } else {
      $('.back-to-top').removeClass('show');
    }
  });

  // --- Back to top click ---
  $('.back-to-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
  });

  // --- Smooth scroll for nav links ---
  $('a[href^="#"]').on('click', function (e) {
    var href = this.getAttribute('href');
    // Skip bare '#' links (e.g. filter links) to avoid jQuery selector errors
    if (!href || href === '#') return;
    try {
      var target = $(href);
      if (target.length) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: target.offset().top - 80 }, 600);
        // Close mobile menu
        $('.navbar-collapse').collapse('hide');
      }
    } catch (err) {
      // Invalid selector, ignore
    }
  });

  // --- Hero Carousel auto-play ---
  $('#heroCarousel').carousel({
    interval: 5000,
    pause: 'hover'
  });

  // --- Newsletter Modal Auto-show ---
  if ($('#newsletterModal').length > 0) {
    setTimeout(function() {
      $('#newsletterModal').modal('show');
    }, 3000); // Show after 3 seconds
  }

  // --- Search form submit ---
  $('#searchForm').on('submit', function (e) {
    e.preventDefault();
    var query = $(this).find('input').val().trim();
    if (query) {
      window.location.href = 'products.html?search=' + encodeURIComponent(query);
    }
  });

  // --- Login / Logout flow ---
  function updateLoginUI() {
    var user = localStorage.getItem('owleraUser');
    if (user) {
      // Logged in: hide login button, show user info
      $('#btnOpenLogin').addClass('d-none');
      $('#userLoggedIn').removeClass('d-none');
      $('#navUserName').text(user);
    } else {
      // Logged out: show login button, hide user info
      $('#btnOpenLogin').removeClass('d-none');
      $('#userLoggedIn').addClass('d-none');
      $('#navUserName').text('');
    }
  }

  // Check login state on page load
  updateLoginUI();

  // Login form submit
  $('#loginForm').on('submit', function (e) {
    e.preventDefault();
    var email = $('#loginEmail').val().trim();
    var password = $('#loginPassword').val().trim();
    if (email && password) {
      // Extract display name from email (part before @)
      var displayName = email.split('@')[0];
      // Capitalize first letter
      displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);

      // Save to localStorage
      localStorage.setItem('owleraUser', displayName);
      localStorage.setItem('owleraEmail', email);

      // Close modal & reset form
      $('#loginModal').modal('hide');
      $(this)[0].reset();

      // Update UI
      updateLoginUI();
    }
  });

  // Logout
  $(document).on('click', '#btnLogout', function (e) {
    e.preventDefault();
    localStorage.removeItem('owleraUser');
    localStorage.removeItem('owleraEmail');
    updateLoginUI();
  });

  // Open Orders Modal
  $(document).on('click', '.dropdown-item:contains("Đơn hàng")', function(e) {
    e.preventDefault();
    if (window.renderOrders) {
      window.renderOrders();
      $('#ordersModal').modal('show');
    }
  });

  // --- Newsletter form ---
  $('#newsletterForm').on('submit', function (e) {
    e.preventDefault();
    var email = $(this).find('input[type="email"]').val().trim();
    if (email) {
      window.showToast('Đăng ký thành công!', 'Cảm ơn bạn đã đăng ký nhận tin với email: ' + email, 'success');
      $(this)[0].reset();
    }
  });

  // --- Animate on scroll (simple) ---
  function animateOnScroll() {
    $('.animate-on-scroll').each(function () {
      var elementTop = $(this).offset().top;
      var viewportBottom = $(window).scrollTop() + $(window).height() - 80;
      if (elementTop < viewportBottom) {
        $(this).addClass('animate-fadeInUp');
      }
    });
  }

  $(window).on('scroll', animateOnScroll);
  animateOnScroll();
});
