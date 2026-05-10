/* ===================================
   OWLERA - Register Page JavaScript
   jQuery Validation & Form Handling
   =================================== */

$(document).ready(function () {

  // ===== Password Toggle =====
  $('#togglePassword').on('click', function () {
    var input = $('#regPassword');
    var icon = $(this).find('i');
    if (input.attr('type') === 'password') {
      input.attr('type', 'text');
      icon.removeClass('fa-eye').addClass('fa-eye-slash');
    } else {
      input.attr('type', 'password');
      icon.removeClass('fa-eye-slash').addClass('fa-eye');
    }
  });

  // ===== Password Strength Checker =====
  $('#regPassword').on('input', function () {
    var password = $(this).val();
    var $strength = $('#passwordStrength');
    var $text = $('#strengthText');

    if (password.length === 0) {
      $strength.hide();
      return;
    }
    $strength.show();

    var score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^a-zA-Z0-9]/.test(password)) score++;

    // Reset bars
    $('.strength-bars .bar').removeClass('weak medium strong very-strong');

    if (score <= 1) {
      $('#bar1').addClass('weak');
      $text.text('Yếu').css('color', '#e74c3c');
    } else if (score === 2) {
      $('#bar1, #bar2').addClass('medium');
      $text.text('Trung bình').css('color', '#f39c12');
    } else if (score === 3) {
      $('#bar1, #bar2, #bar3').addClass('strong');
      $text.text('Mạnh').css('color', '#27ae60');
    } else {
      $('#bar1, #bar2, #bar3, #bar4').addClass('very-strong');
      $text.text('Rất mạnh').css('color', '#2ecc71');
    }
  });

  // ===== Real-time Validation on blur =====
  $('#regFullname').on('blur', function () { validateFullname(); });
  $('#regEmail').on('blur', function () { validateEmail(); });
  $('#regPhone').on('blur', function () { validatePhone(); });
  $('#regAddress').on('blur', function () { validateAddress(); });
  $('#regPassword').on('blur', function () { validatePassword(); });
  $('#regConfirmPassword').on('blur', function () { validateConfirmPassword(); });

  // Clear error on focus
  $('.register-field .form-control').on('focus', function () {
    $(this).removeClass('is-invalid is-valid');
  });

  // ===== Validation Functions =====

  function validateFullname() {
    var val = $.trim($('#regFullname').val());
    if (val === '') {
      showError('#regFullname', '#errFullname', 'Vui lòng nhập họ và tên.');
      return false;
    }
    if (val.length < 2) {
      showError('#regFullname', '#errFullname', 'Họ tên phải có ít nhất 2 ký tự.');
      return false;
    }
    showSuccess('#regFullname');
    return true;
  }

  function validateEmail() {
    var val = $.trim($('#regEmail').val());
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (val === '') {
      showError('#regEmail', '#errEmail', 'Vui lòng nhập địa chỉ email.');
      return false;
    }
    if (!emailRegex.test(val)) {
      showError('#regEmail', '#errEmail', 'Email không đúng định dạng. Ví dụ: ten@email.com');
      return false;
    }
    showSuccess('#regEmail');
    return true;
  }

  function validatePhone() {
    var val = $.trim($('#regPhone').val());
    var phoneRegex = /^(0[3|5|7|8|9])\d{8}$/;
    if (val === '') {
      showError('#regPhone', '#errPhone', 'Vui lòng nhập số điện thoại.');
      return false;
    }
    if (!phoneRegex.test(val)) {
      showError('#regPhone', '#errPhone', 'Số điện thoại không hợp lệ. Ví dụ: 0901234567');
      return false;
    }
    showSuccess('#regPhone');
    return true;
  }

  function validateAddress() {
    var val = $.trim($('#regAddress').val());
    if (val === '') {
      showError('#regAddress', '#errAddress', 'Vui lòng nhập địa chỉ giao hàng.');
      return false;
    }
    if (val.length < 10) {
      showError('#regAddress', '#errAddress', 'Địa chỉ quá ngắn. Vui lòng nhập đầy đủ (tối thiểu 10 ký tự).');
      return false;
    }
    showSuccess('#regAddress');
    return true;
  }

  function validatePassword() {
    var val = $('#regPassword').val();
    if (val === '') {
      showError('#regPassword', '#errPassword', 'Vui lòng nhập mật khẩu.');
      return false;
    }
    if (val.length < 8) {
      showError('#regPassword', '#errPassword', 'Mật khẩu phải có ít nhất 8 ký tự (hiện tại: ' + val.length + ' ký tự).');
      return false;
    }
    showSuccess('#regPassword');
    return true;
  }

  function validateConfirmPassword() {
    var val = $('#regConfirmPassword').val();
    var password = $('#regPassword').val();
    if (val === '') {
      showError('#regConfirmPassword', '#errConfirmPassword', 'Vui lòng xác nhận mật khẩu.');
      return false;
    }
    if (val !== password) {
      showError('#regConfirmPassword', '#errConfirmPassword', 'Mật khẩu xác nhận không khớp.');
      return false;
    }
    showSuccess('#regConfirmPassword');
    return true;
  }

  function validateTerms() {
    if (!$('#agreeTerms').is(':checked')) {
      $('#errTerms').text('Bạn cần đồng ý với điều khoản dịch vụ.').show();
      return false;
    }
    $('#errTerms').hide();
    return true;
  }

  // ===== Helper Functions =====
  function showError(inputSelector, errorSelector, message) {
    $(inputSelector).addClass('is-invalid').removeClass('is-valid');
    $(errorSelector).text(message).show();
  }

  function showSuccess(inputSelector) {
    $(inputSelector).addClass('is-valid').removeClass('is-invalid');
  }

  // ===== Form Submit =====
  $('#registerForm').on('submit', function (e) {
    e.preventDefault();

    // Run all validations
    var isValid = true;
    if (!validateFullname()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePhone()) isValid = false;
    if (!validateAddress()) isValid = false;
    if (!validatePassword()) isValid = false;
    if (!validateConfirmPassword()) isValid = false;
    if (!validateTerms()) isValid = false;

    if (!isValid) {
      // Scroll to first error
      var firstError = $('.is-invalid').first();
      if (firstError.length) {
        $('html, body').animate({
          scrollTop: firstError.offset().top - 120
        }, 400);
      }
      return;
    }

    // ===== SUCCESS: Display submitted info =====
    var fullname = $.trim($('#regFullname').val());
    var email = $.trim($('#regEmail').val());
    var phone = $.trim($('#regPhone').val());
    var address = $.trim($('#regAddress').val());
    var now = new Date();
    var dateStr = now.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Fill result card
    $('#resultName').text(fullname);
    $('#resultEmail').text(email);
    $('#resultPhone').text(phone);
    $('#resultAddress').text(address);
    $('#resultDate').text(dateStr);

    // Hide form, show result with animation
    $('.register-wrapper').fadeOut(400, function () {
      $('#registerResult').fadeIn(500);
      $('html, body').animate({
        scrollTop: $('#registerResult').offset().top - 100
      }, 400);
    });
  });

  // ===== Register Another =====
  $('#btnRegisterAnother').on('click', function () {
    $('#registerResult').fadeOut(400, function () {
      // Reset form
      $('#registerForm')[0].reset();
      $('.form-control').removeClass('is-invalid is-valid');
      $('#passwordStrength').hide();
      $('#errTerms').hide();
      $('.register-wrapper').fadeIn(500);
      $('html, body').animate({
        scrollTop: $('.register-section').offset().top - 80
      }, 400);
    });
  });

});
