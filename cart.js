/* ===================================
   OWLERA - Cart & Wishlist System
   Shared across all pages
   Uses localStorage for persistence
   =================================== */

$(document).ready(function () {

  // ===== Initialize Data =====
  var cart = JSON.parse(localStorage.getItem('owleraCart')) || [];
  var wishlist = JSON.parse(localStorage.getItem('owleraWishlist')) || [];

  // Product Database
  var productDB = {
    '1': { id: '1', name: 'Owlera Classic Round', price: 1290000, oldPrice: 1690000, img: 'img/product1.png', category: 'Kính Cận' },
    '2': { id: '2', name: 'Owlera Cat-Eye Noir', price: 2190000, oldPrice: 0, img: 'img/product16.png', category: 'Kính Râm' },
    '3': { id: '3', name: 'Owlera Aviator Gold', price: 1890000, oldPrice: 3150000, img: 'img/product17.png', category: 'Kính Râm' },
    '4': { id: '4', name: 'Owlera Titanium Slim', price: 2490000, oldPrice: 0, img: 'img/product2.png', category: 'Kính Cận' },
    '5': { id: '5', name: 'Owlera Blue Shield', price: 890000, oldPrice: 0, img: 'img/product3.png', category: 'Kính Cận' },
    '6': { id: '6', name: 'Owlera Gradient Square', price: 1750000, oldPrice: 0, img: 'img/product18.png', category: 'Kính Râm' },
    '7': { id: '7', name: 'Owlera Vintage Rose', price: 1590000, oldPrice: 0, img: 'img/product30.png', category: 'Kính Thời Trang' },
    '8': { id: '8', name: 'Owlera Luxe Oversize', price: 3290000, oldPrice: 0, img: 'img/product31.png', category: 'Kính Thời Trang' },
    '9': { id: '9', name: 'Owlera Clear Crystal', price: 1450000, oldPrice: 0, img: 'img/product4.png', category: 'Kính Cận' },
    '10': { id: '10', name: 'Owlera Sport X', price: 2650000, oldPrice: 0, img: 'img/product19.png', category: 'Kính Râm' },
    '11': { id: '11', name: 'Owlera Street Style', price: 1890000, oldPrice: 0, img: 'img/product32.png', category: 'Kính Thời Trang' },
    '12': { id: '12', name: 'Owlera Minimalist', price: 990000, oldPrice: 1250000, img: 'img/product5.png', category: 'Kính Cận' },
    '13': { id: '13', name: 'Owlera Flex Lite', price: 750000, oldPrice: 0, img: 'img/product6.png', category: 'Kính Cận' },
    '14': { id: '14', name: 'Owlera Scholar Pro', price: 1190000, oldPrice: 1490000, img: 'img/product7.png', category: 'Kính Cận' },
    '15': { id: '15', name: 'Owlera Ultra Thin', price: 1690000, oldPrice: 0, img: 'img/product8.png', category: 'Kính Cận' },
    '16': { id: '16', name: 'Owlera Carbon Edge', price: 2290000, oldPrice: 0, img: 'img/product9.png', category: 'Kính Cận' },
    '17': { id: '17', name: 'Owlera Retro Square', price: 980000, oldPrice: 1150000, img: 'img/product10.png', category: 'Kính Cận' },
    '18': { id: '18', name: 'Owlera Comfort Fit', price: 1350000, oldPrice: 1590000, img: 'img/product11.png', category: 'Kính Cận' },
    '19': { id: '19', name: 'Owlera Diamond Frame', price: 3490000, oldPrice: 0, img: 'img/product12.png', category: 'Kính Cận' },
    '20': { id: '20', name: 'Owlera Smart Vision', price: 1890000, oldPrice: 0, img: 'img/product13.png', category: 'Kính Cận' },
    '21': { id: '21', name: 'Owlera Classic Oval', price: 1150000, oldPrice: 0, img: 'img/product14.png', category: 'Kính Cận' },
    '22': { id: '22', name: 'Owlera Premium HD', price: 2790000, oldPrice: 0, img: 'img/product15.png', category: 'Kính Cận' },
    '23': { id: '23', name: 'Owlera Sunset Mirror', price: 1590000, oldPrice: 0, img: 'img/product20.png', category: 'Kính Râm' },
    '24': { id: '24', name: 'Owlera Polar Shield', price: 2390000, oldPrice: 2890000, img: 'img/product21.png', category: 'Kính Râm' },
    '25': { id: '25', name: 'Owlera Ocean Blue', price: 1290000, oldPrice: 1720000, img: 'img/product22.png', category: 'Kính Râm' },
    '26': { id: '26', name: 'Owlera Dark Knight', price: 1990000, oldPrice: 0, img: 'img/product23.png', category: 'Kính Râm' },
    '27': { id: '27', name: 'Owlera Beach Club', price: 890000, oldPrice: 0, img: 'img/product24.png', category: 'Kính Râm' },
    '28': { id: '28', name: 'Owlera Explorer Pro', price: 2890000, oldPrice: 0, img: 'img/product25.png', category: 'Kính Râm' },
    '29': { id: '29', name: 'Owlera Shadow X', price: 1450000, oldPrice: 1890000, img: 'img/product26.png', category: 'Kính Râm' },
    '30': { id: '30', name: 'Owlera Cruise Classic', price: 1690000, oldPrice: 0, img: 'img/product27.png', category: 'Kính Râm' },
    '31': { id: '31', name: 'Owlera Alpine Sport', price: 3190000, oldPrice: 4560000, img: 'img/product28.png', category: 'Kính Râm' },
    '32': { id: '32', name: 'Owlera Drift Pilot', price: 2090000, oldPrice: 0, img: 'img/product29.png', category: 'Kính Râm' },
    '33': { id: '33', name: 'Owlera Chic Round', price: 1290000, oldPrice: 0, img: 'img/product33.png', category: 'Kính Thời Trang' },
    '34': { id: '34', name: 'Owlera Glam Cat', price: 2490000, oldPrice: 0, img: 'img/product34.png', category: 'Kính Thời Trang' },
    '35': { id: '35', name: 'Owlera Boho Spirit', price: 1190000, oldPrice: 0, img: 'img/product35.png', category: 'Kính Thời Trang' },
    '36': { id: '36', name: 'Owlera Runway Elite', price: 3590000, oldPrice: 0, img: 'img/product36.png', category: 'Kính Thời Trang' },
    '37': { id: '37', name: 'Owlera Urban Edge', price: 1690000, oldPrice: 2110000, img: 'img/product37.png', category: 'Kính Thời Trang' },
    '38': { id: '38', name: 'Owlera Crystal Luxe', price: 2190000, oldPrice: 2590000, img: 'img/product38.png', category: 'Kính Thời Trang' },
    '39': { id: '39', name: 'Owlera Retro Vibe', price: 990000, oldPrice: 0, img: 'img/product39.png', category: 'Kính Thời Trang' },
    '40': { id: '40', name: 'Owlera Parisian Chic', price: 2790000, oldPrice: 0, img: 'img/product40.png', category: 'Kính Thời Trang' },
    '41': { id: '41', name: 'Owlera Minimal Art', price: 1450000, oldPrice: 0, img: 'img/product41.png', category: 'Kính Thời Trang' },
    '42': { id: '42', name: 'Owlera Bold Statement', price: 1890000, oldPrice: 2390000, img: 'img/product42.png', category: 'Kính Thời Trang' }
  };

  // ===== Inject Cart Sidebar & Toast HTML =====
  var cartSidebarHTML = '' +
    '<div class="cart-overlay" id="cartOverlay"></div>' +
    '<div class="cart-sidebar" id="cartSidebar">' +
      '<div class="cart-sidebar-header">' +
        '<h5><i class="fas fa-shopping-bag mr-2"></i>Giỏ Hàng (<span id="cartSidebarCount">0</span>)</h5>' +
        '<button class="cart-close-btn" id="cartCloseBtn"><i class="fas fa-times"></i></button>' +
      '</div>' +
      '<div class="cart-sidebar-body" id="cartSidebarBody">' +
        '<div class="cart-empty" id="cartEmpty">' +
          '<i class="fas fa-shopping-basket"></i>' +
          '<p>Giỏ hàng trống</p>' +
          '<a href="products.html" class="btn btn-owlera btn-sm">Mua Sắm Ngay</a>' +
        '</div>' +
        '<div class="cart-items-list" id="cartItemsList"></div>' +
      '</div>' +
      '<div class="cart-sidebar-footer" id="cartSidebarFooter">' +
        '<div class="cart-total">' +
          '<span>Tổng cộng:</span>' +
          '<strong id="cartTotal">0₫</strong>' +
        '</div>' +
        '<button class="btn btn-owlera btn-block cart-checkout-btn" id="btnCheckout">' +
          '<i class="fas fa-credit-card mr-2"></i>Thanh Toán' +
        '</button>' +
        '<a href="products.html" class="btn btn-owlera-outline btn-block btn-continue" style="color:var(--accent);border-color:var(--accent);">' +
          'Tiếp Tục Mua Sắm' +
        '</a>' +
      '</div>' +
    '</div>';

  var toastHTML = '' +
    '<div class="owlera-toast" id="owleraToast">' +
      '<div class="toast-icon" id="toastIcon"><i class="fas fa-check-circle"></i></div>' +
      '<div class="toast-content">' +
        '<p class="toast-title" id="toastTitle">Thêm vào giỏ hàng</p>' +
        '<p class="toast-msg" id="toastMsg">Sản phẩm đã được thêm thành công!</p>' +
      '</div>' +
      '<button class="toast-close" id="toastClose"><i class="fas fa-times"></i></button>' +
    '</div>';

  var wishlistSidebarHTML = '' +
    '<div class="cart-sidebar" id="wishlistSidebar">' +
      '<div class="cart-sidebar-header">' +
        '<h5><i class="fas fa-heart mr-2" style="color: #e74c3c;"></i>Yêu Thích (<span id="wishlistSidebarCount">0</span>)</h5>' +
        '<button class="cart-close-btn" id="wishlistCloseBtn"><i class="fas fa-times"></i></button>' +
      '</div>' +
      '<div class="cart-sidebar-body" id="wishlistSidebarBody">' +
        '<div class="cart-empty" id="wishlistEmpty">' +
          '<i class="far fa-heart"></i>' +
          '<p>Chưa có sản phẩm yêu thích</p>' +
          '<a href="products.html" class="btn btn-owlera btn-sm">Khám Phá Ngay</a>' +
        '</div>' +
        '<div class="cart-items-list" id="wishlistItemsList"></div>' +
      '</div>' +
    '</div>';

  var checkoutModalHTML = '' +
    '<div class="modal fade" id="checkoutModal" tabindex="-1" role="dialog" aria-hidden="true">' +
      '<div class="modal-dialog modal-dialog-centered modal-lg" role="document">' +
        '<div class="modal-content" style="border-radius: 12px; border: none; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.2);">' +
          '<div class="modal-header" style="background: var(--light-bg); border-bottom: 1px solid var(--border); padding: 20px 30px;">' +
            '<h5 class="modal-title" style="font-family: var(--font-heading); color: var(--primary); font-weight: 700;"><i class="fas fa-shopping-bag mr-2"></i>Thanh Toán Đơn Hàng</h5>' +
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
              '<span aria-hidden="true">&times;</span>' +
            '</button>' +
          '</div>' +
          '<div class="modal-body p-0">' +
            '<div class="row no-gutters">' +
              '<!-- Left Column: Order Summary & Delivery Info -->' +
              '<div class="col-md-6 p-4" style="background: var(--white);">' +
                '<h6 style="color: var(--primary); font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-size: 0.85rem; margin-bottom: 15px;">1. Thông tin giao hàng</h6>' +
                '<form id="checkoutDeliveryForm">' +
                  '<div class="form-group mb-3">' +
                    '<label style="font-size: 0.85rem; color: var(--text-dark); font-weight: 500;">Họ và Tên</label>' +
                    '<input type="text" class="form-control" id="checkoutName" required style="font-size: 0.9rem; padding: 10px 15px;">' +
                  '</div>' +
                  '<div class="form-group mb-3">' +
                    '<label style="font-size: 0.85rem; color: var(--text-dark); font-weight: 500;">Số Điện Thoại</label>' +
                    '<input type="tel" class="form-control" id="checkoutPhone" required style="font-size: 0.9rem; padding: 10px 15px;">' +
                  '</div>' +
                  '<div class="form-group mb-4">' +
                    '<label style="font-size: 0.85rem; color: var(--text-dark); font-weight: 500;">Địa Chỉ Giao Hàng</label>' +
                    '<textarea class="form-control" id="checkoutAddress" rows="2" required style="font-size: 0.9rem; padding: 10px 15px;"></textarea>' +
                  '</div>' +
                '</form>' +
                '<div style="background: var(--light-bg); border-radius: 8px; padding: 15px; border: 1px dashed var(--border);">' +
                  '<div class="d-flex justify-content-between align-items-center mb-2">' +
                    '<span style="font-size: 0.9rem; color: var(--text-dark);">Tổng phụ:</span>' +
                    '<strong id="checkoutSubtotal" style="font-size: 0.9rem; color: var(--primary);">0₫</strong>' +
                  '</div>' +
                  '<div class="d-flex justify-content-between align-items-center mb-2">' +
                    '<span style="font-size: 0.9rem; color: var(--text-dark);">Phí vận chuyển:</span>' +
                    '<strong style="font-size: 0.9rem; color: #27ae60;">Miễn phí</strong>' +
                  '</div>' +
                  '<hr style="border-top-color: var(--border); margin: 10px 0;">' +
                  '<div class="d-flex justify-content-between align-items-center">' +
                    '<span style="font-weight: 600; color: var(--primary);">Tổng cộng:</span>' +
                    '<strong id="checkoutTotal" style="font-size: 1.2rem; color: var(--accent);">0₫</strong>' +
                  '</div>' +
                '</div>' +
              '</div>' +
              '<!-- Right Column: Payment Method -->' +
              '<div class="col-md-6 p-4" style="background: #fafafa; border-left: 1px solid var(--border);">' +
                '<h6 style="color: var(--primary); font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-size: 0.85rem; margin-bottom: 15px;">2. Phương thức thanh toán</h6>' +
                '<div class="payment-methods">' +
                  '<!-- COD -->' +
                  '<div class="payment-method-option mb-3">' +
                    '<div class="custom-control custom-radio">' +
                      '<input type="radio" id="payCOD" name="paymentMethod" class="custom-control-input" value="cod" checked>' +
                      '<label class="custom-control-label" for="payCOD" style="font-weight: 500; cursor: pointer;">Thanh toán khi nhận hàng (COD)</label>' +
                    '</div>' +
                    '<div class="payment-details mt-2" id="detailsCOD" style="font-size: 0.85rem; color: var(--text-muted); padding-left: 1.5rem;">' +
                      'Bạn sẽ thanh toán bằng tiền mặt khi nhận được hàng.' +
                    '</div>' +
                  '</div>' +
                  '<!-- Bank Transfer -->' +
                  '<div class="payment-method-option mb-3">' +
                    '<div class="custom-control custom-radio">' +
                      '<input type="radio" id="payBank" name="paymentMethod" class="custom-control-input" value="bank">' +
                      '<label class="custom-control-label" for="payBank" style="font-weight: 500; cursor: pointer;">Chuyển khoản ngân hàng</label>' +
                    '</div>' +
                    '<div class="payment-details mt-2" id="detailsBank" style="display: none; font-size: 0.85rem; color: var(--text-dark); background: var(--white); border: 1px solid var(--border); border-radius: 6px; padding: 12px; margin-left: 1.5rem;">' +
                      '<p class="mb-1">Ngân hàng: <strong>Vietcombank</strong></p>' +
                      '<p class="mb-1">Chủ tài khoản: <strong>OWLERA VIETNAM</strong></p>' +
                      '<p class="mb-0">Số tài khoản: <strong style="color: var(--accent); font-size: 1rem;">1234 5678 9999</strong></p>' +
                    '</div>' +
                  '</div>' +
                  '<!-- Credit Card -->' +
                  '<div class="payment-method-option mb-4">' +
                    '<div class="custom-control custom-radio">' +
                      '<input type="radio" id="payCard" name="paymentMethod" class="custom-control-input" value="card">' +
                      '<label class="custom-control-label" for="payCard" style="font-weight: 500; cursor: pointer;">Thẻ Tín dụng / Ghi nợ <i class="fab fa-cc-visa ml-1" style="color:#1434CB"></i> <i class="fab fa-cc-mastercard ml-1" style="color:#EB001B"></i></label>' +
                    '</div>' +
                    '<div class="payment-details mt-3" id="detailsCard" style="display: none; margin-left: 1.5rem;">' +
                      '<div class="card-form-wrapper" style="background: var(--white); border: 1px solid var(--border); border-radius: 8px; padding: 15px;">' +
                        '<div class="form-group mb-2">' +
                          '<input type="text" class="form-control form-control-sm" placeholder="Số thẻ (0000 0000 0000 0000)" maxlength="19">' +
                        '</div>' +
                        '<div class="form-group mb-2">' +
                          '<input type="text" class="form-control form-control-sm" placeholder="Tên in trên thẻ">' +
                        '</div>' +
                        '<div class="row no-gutters">' +
                          '<div class="col-6 pr-1">' +
                            '<input type="text" class="form-control form-control-sm" placeholder="MM/YY" maxlength="5">' +
                          '</div>' +
                          '<div class="col-6 pl-1">' +
                            '<input type="text" class="form-control form-control-sm" placeholder="CVV" maxlength="3">' +
                          '</div>' +
                        '</div>' +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
                '<button type="button" class="btn btn-owlera btn-block mt-4" id="btnConfirmOrder" style="padding: 12px; font-weight: 600; letter-spacing: 1px; border-radius: 30px;">XÁC NHẬN ĐẶT HÀNG</button>' +
                '<p class="text-center mt-3 mb-0" style="font-size: 0.75rem; color: var(--text-muted);"><i class="fas fa-lock mr-1"></i> Thanh toán an toàn và bảo mật</p>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

  var ordersModalHTML = '' +
    '<div class="modal fade" id="ordersModal" tabindex="-1" role="dialog" aria-hidden="true">' +
      '<div class="modal-dialog modal-dialog-centered modal-lg" role="document">' +
        '<div class="modal-content" style="border-radius: 12px; border: none; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.2);">' +
          '<div class="modal-header" style="background: var(--light-bg); border-bottom: 1px solid var(--border); padding: 20px 30px;">' +
            '<h5 class="modal-title" style="font-family: var(--font-heading); color: var(--primary); font-weight: 700;"><i class="fas fa-history mr-2"></i>Lịch Sử Đơn Hàng</h5>' +
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
              '<span aria-hidden="true">&times;</span>' +
            '</button>' +
          '</div>' +
          '<div class="modal-body p-0" style="background: #fafafa; min-height: 300px; max-height: 70vh; overflow-y: auto;">' +
            '<div id="ordersListContainer" class="p-4">' +
              '<!-- Orders will be rendered here -->' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

  // Inject into page
  $('body').append(cartSidebarHTML).append(wishlistSidebarHTML).append(toastHTML).append(checkoutModalHTML).append(ordersModalHTML);

  // ===== Format Price =====
  function formatPrice(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '₫';
  }

  // ===== Show Toast =====
  function showToast(title, msg, type) {
    var $toast = $('#owleraToast');
    var $icon = $('#toastIcon');
    $('#toastTitle').text(title);
    $('#toastMsg').text(msg);

    $toast.removeClass('toast-success toast-wishlist toast-remove');
    if (type === 'wishlist') {
      $icon.html('<i class="fas fa-heart"></i>');
      $toast.addClass('toast-wishlist');
    } else if (type === 'remove') {
      $icon.html('<i class="fas fa-trash-alt"></i>');
      $toast.addClass('toast-remove');
    } else {
      $icon.html('<i class="fas fa-check-circle"></i>');
      $toast.addClass('toast-success');
    }

    $toast.addClass('show');
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(function () {
      $toast.removeClass('show');
    }, 3000);
  }
  
  // Expose globally
  window.showToast = showToast;

  $(document).on('click', '#toastClose', function () {
    $('#owleraToast').removeClass('show');
  });

  // ===== Update Cart Badge =====
  function updateCartBadge() {
    var totalItems = 0;
    cart.forEach(function (item) { totalItems += item.qty; });
    $('.badge-cart').text(totalItems);
    $('#cartSidebarCount').text(totalItems);

    if (totalItems === 0) {
      $('.badge-cart').hide();
    } else {
      $('.badge-cart').show();
    }
  }

  // ===== Update Wishlist Badge =====
  function updateWishlistBadge() {
    if (wishlist.length > 0) {
      if ($('.badge-wishlist').length === 0) {
        $('.nav-icon-btn[title="Yêu thích"]').append('<span class="badge-wishlist">' + wishlist.length + '</span>');
      } else {
        $('.badge-wishlist').text(wishlist.length);
      }
      $('.badge-wishlist').show();
    } else {
      $('.badge-wishlist').hide();
    }
  }

  // ===== Render Cart Sidebar =====
  function renderCart() {
    var $list = $('#cartItemsList');
    $list.empty();
    
    updateCartBadge();
    saveCart();

    if (cart.length === 0) {
      $('#cartEmpty').show();
      $list.hide();
      $('#cartSidebarFooter').hide();
      return;
    }

    $('#cartEmpty').hide();
    $list.show();
    $('#cartSidebarFooter').show();

    var total = 0;
    cart.forEach(function (item, index) {
      var subtotal = item.price * item.qty;
      total += subtotal;

      var itemHTML = '' +
        '<div class="cart-item" data-index="' + index + '">' +
          '<div class="cart-item-img">' +
            '<img src="' + item.img + '" alt="' + item.name + '">' +
          '</div>' +
          '<div class="cart-item-info">' +
            '<h6 class="cart-item-name">' + item.name + '</h6>' +
            '<p class="cart-item-price">' + formatPrice(item.price) + '</p>' +
            '<div class="cart-item-qty">' +
              '<button class="cart-qty-btn cart-qty-minus" data-index="' + index + '">–</button>' +
              '<span>' + item.qty + '</span>' +
              '<button class="cart-qty-btn cart-qty-plus" data-index="' + index + '">+</button>' +
            '</div>' +
          '</div>' +
          '<button class="cart-item-remove" data-index="' + index + '" title="Xóa">' +
            '<i class="fas fa-trash-alt"></i>' +
          '</button>' +
        '</div>';

      $list.append(itemHTML);
    });

    $('#cartTotal').text(formatPrice(total));
  }

  // ===== Render Wishlist Sidebar =====
  function renderWishlist() {
    var $list = $('#wishlistItemsList');
    $list.empty();
    
    updateWishlistBadge();
    
    if (wishlist.length === 0) {
      $('#wishlistEmpty').show();
      $list.hide();
      return;
    }

    $('#wishlistEmpty').hide();
    $list.show();

    wishlist.forEach(function (id) {
      var product = productDB[id];
      if (!product) return;

      var itemHTML = '' +
        '<div class="cart-item">' +
          '<div class="cart-item-img">' +
            '<img src="' + product.img + '" alt="' + product.name + '">' +
          '</div>' +
          '<div class="cart-item-info">' +
            '<h6 class="cart-item-name">' + product.name + '</h6>' +
            '<p class="cart-item-price">' + formatPrice(product.price) + '</p>' +
            '<div class="mt-2">' +
              '<button class="btn btn-owlera btn-sm btn-wishlist-to-cart" data-id="' + product.id + '" style="padding: 4px 10px; font-size: 0.7rem;"><i class="fas fa-cart-plus mr-1"></i> Thêm</button>' +
            '</div>' +
          '</div>' +
          '<button class="cart-item-remove wishlist-item-remove" data-id="' + product.id + '" title="Xóa khỏi yêu thích">' +
            '<i class="fas fa-trash-alt"></i>' +
          '</button>' +
        '</div>';

      $list.append(itemHTML);
    });
    
    $('#wishlistSidebarCount').text(wishlist.length);
  }

  // Move wishlist item to cart
  $(document).on('click', '.btn-wishlist-to-cart', function () {
    var id = $(this).data('id').toString();
    addToCart(id, 1);
    
    // Remove from wishlist after adding to cart
    toggleWishlist(id, true);
    renderWishlist();
  });

  $(document).on('click', '.wishlist-item-remove', function () {
    var id = $(this).data('id').toString();
    toggleWishlist(id, true);
    renderWishlist();
    showToast('Đã xóa', 'Đã xóa khỏi danh sách yêu thích', 'remove');
  });

  // ===== Save / Load =====
  function saveCart() {
    localStorage.setItem('owleraCart', JSON.stringify(cart));
  }
  function saveWishlist() {
    localStorage.setItem('owleraWishlist', JSON.stringify(wishlist));
  }

  // ===== Add to Cart =====
  function addToCart(productId, qty) {
    if (!localStorage.getItem('owleraUser')) {
      showToast('Yêu cầu đăng nhập', 'Bạn cần đăng nhập để mua hàng.', 'error');
      setTimeout(function() {
        if ($('#loginModal').length) {
          $('#loginModal').modal('show');
        } else {
          window.location.href = 'register.html';
        }
      }, 1500);
      return;
    }

    qty = qty || 1;
    var product = productDB[productId];
    if (!product) return;

    var existing = cart.find(function (item) { return item.id === productId; });
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
        qty: qty
      });
    }

    saveCart();
    renderCart();
    showToast('Đã thêm vào giỏ hàng', product.name + ' x' + qty, 'success');
  }

  // ===== Toggle Wishlist =====
  function toggleWishlist(productId, silent) {
    var product = productDB[productId];
    if (!product) return;

    var index = wishlist.indexOf(productId);
    if (index > -1) {
      wishlist.splice(index, 1);
      if (!silent) showToast('Đã bỏ yêu thích', product.name, 'remove');
    } else {
      wishlist.push(productId);
      if (!silent) showToast('Đã thêm yêu thích', product.name, 'wishlist');
    }

    saveWishlist();
    updateWishlistBadge();
    updateWishlistUI();
  }

  // ===== Quick View (Xem nhanh) from Product Cards =====
  $(document).on('click', '.product-actions button[title="Xem nhanh"]', function (e) {
    e.preventDefault();
    var $card = $(this).closest('.product-card');
    var href = $card.find('.product-name a').attr('href');
    if (href) {
      window.location.href = href;
    }
  });

  // ===== Add to Cart from Product Cards (index, products pages) =====
  $(document).on('click', '.product-actions button[title="Th\\u00eam v\\u00e0o gi\\u1ecf"]', function (e) {
    e.preventDefault();
    var $card = $(this).closest('.product-card');
    var href = $card.find('.product-name a').attr('href');
    if (href && href.indexOf('id=') > -1) {
      var productId = href.split('id=')[1].split('&')[0];
      addToCart(productId, 1);
    } else {
      // Fallback
      var fallbackId = $card.closest('[data-product-id]').data('product-id');
      if (fallbackId) addToCart(fallbackId.toString(), 1);
    }
  });

  // ===== Wishlist from Product Cards =====
  $(document).on('click', '.product-actions button[title="Yêu thích"], .product-actions button[title="Y\\u00eau th\\u00edch"]', function (e) {
    e.preventDefault();
    var $card = $(this).closest('.product-card');
    var href = $card.find('.product-name a').attr('href');
    var productId = null;
    
    if (href && href.indexOf('id=') > -1) {
      productId = href.split('id=')[1].split('&')[0];
    } else {
      // Fallback
      productId = $(this).data('wishlist-id') || $card.closest('[data-product-id]').data('product-id');
    }

    if (productId) {
      toggleWishlist(productId.toString());
      // Toggle visual instantly on card
      var $icon = $(this).find('i');
      if (wishlist.indexOf(productId.toString()) > -1) {
        $icon.removeClass('far').addClass('fas').css('color', '#e74c3c');
      } else {
        $icon.removeClass('fas').addClass('far').css('color', '');
      }
    }
  });

  // ===== Update Wishlist Heart Icons Global =====
  function updateWishlistUI() {
    // Explicit data-wishlist-id
    $('[data-wishlist-id]').each(function () {
      var id = $(this).data('wishlist-id').toString();
      if (wishlist.indexOf(id) > -1) {
        $(this).find('i').removeClass('far').addClass('fas');
        $(this).addClass('wishlisted');
      } else {
        $(this).find('i').removeClass('fas').addClass('far');
        $(this).removeClass('wishlisted');
      }
    });

    // Implicit from product cards
    $('.product-card').each(function() {
      var href = $(this).find('.product-name a').attr('href');
      if (href && href.indexOf('id=') > -1) {
        var productId = href.split('id=')[1].split('&')[0];
        var $btn = $(this).find('button[title="Yêu thích"], button[title="Y\\u00eau th\\u00edch"]');
        if (wishlist.indexOf(productId) > -1) {
          $btn.find('i').removeClass('far').addClass('fas').css('color', '#e74c3c');
        } else {
          $btn.find('i').removeClass('fas').addClass('far').css('color', '');
        }
      }
    });
  }

  // ===== Open / Close Cart Sidebar =====
  $(document).on('click', '.nav-icon-btn[title="Giỏ hàng"], .nav-icon-btn[title="Gi\\u1ecf h\\00e0ng"]', function (e) {
    e.preventDefault();
    openCart();
  });

  // Also bind to the shopping bag icon directly
  $(document).on('click', '.nav-icon-btn .fa-shopping-bag', function (e) {
    e.preventDefault();
    e.stopPropagation();
    openCart();
  });

  function openCart() {
    $('#cartSidebar').addClass('open');
    $('#cartOverlay').addClass('show');
    $('body').css('overflow', 'hidden');
  }

  function openWishlist() {
    renderWishlist();
    $('#wishlistSidebar').addClass('open');
    $('#cartOverlay').addClass('show');
    $('body').css('overflow', 'hidden');
  }

  $(document).on('click', '#cartCloseBtn, #wishlistCloseBtn, #cartOverlay', function () {
    $('#cartSidebar').removeClass('open');
    $('#wishlistSidebar').removeClass('open');
    $('#cartOverlay').removeClass('show');
    $('body').css('overflow', '');
  });

  // ===== Cart Item Qty +/- =====
  $(document).on('click', '.cart-qty-plus', function () {
    var i = $(this).data('index');
    if (cart[i].qty < 10) {
      cart[i].qty++;
      saveCart();
      renderCart();
    }
  });

  $(document).on('click', '.cart-qty-minus', function () {
    var i = $(this).data('index');
    if (cart[i].qty > 1) {
      cart[i].qty--;
      saveCart();
      renderCart();
    }
  });

  // ===== Remove Cart Item =====
  $(document).on('click', '.cart-item-remove', function () {
    var i = $(this).data('index');
    var removed = cart.splice(i, 1)[0];
    saveCart();
    renderCart();
    showToast('Đã xóa khỏi giỏ hàng', removed.name, 'remove');
  });

  // ===== Checkout =====
  $(document).on('click', '#btnCheckout', function () {
    if (cart.length === 0) return;
    var total = 0;
    cart.forEach(function (item) { total += item.price * item.qty; });
    
    // Update modal amounts
    $('#checkoutSubtotal').text(formatPrice(total));
    $('#checkoutTotal').text(formatPrice(total));

    // Close sidebar
    $('#cartSidebar').removeClass('open');
    $('#cartOverlay').removeClass('show');
    $('body').css('overflow', '');

    // Show modal
    $('#checkoutModal').modal('show');
  });

  // ===== Checkout Modal Payment Toggle =====
  $(document).on('change', 'input[name="paymentMethod"]', function() {
    $('.payment-details').slideUp(200);
    if (this.value === 'cod') {
      $('#detailsCOD').slideDown(200);
    } else if (this.value === 'bank') {
      $('#detailsBank').slideDown(200);
    } else if (this.value === 'card') {
      $('#detailsCard').slideDown(200);
    }
  });

  // ===== Confirm Order =====
  $(document).on('click', '#btnConfirmOrder', function () {
    // Basic validation
    var name = $.trim($('#checkoutName').val());
    var phone = $.trim($('#checkoutPhone').val());
    var address = $.trim($('#checkoutAddress').val());
    if (!name || !phone || !address) {
      showToast('Thiếu thông tin', 'Vui lòng điền đầy đủ thông tin giao hàng.', 'remove');
      return;
    }

    // Hide modal
    $('#checkoutModal').modal('hide');

    // Save Order to LocalStorage (per-user)
    var total = 0;
    cart.forEach(function (item) { total += item.price * item.qty; });
    var orderId = 'OWL' + Math.floor(100000 + Math.random() * 900000);
    var date = new Date().toLocaleDateString('vi-VN');
    var paymentMethod = $('input[name="paymentMethod"]:checked').val();
    var userEmail = localStorage.getItem('owleraEmail') || 'guest';
    
    var order = {
      id: orderId,
      date: date,
      total: total,
      items: cart.slice(),
      method: paymentMethod,
      status: 'Đang xử lý'
    };
    
    var orderKey = 'owleraOrders_' + userEmail;
    var orders = JSON.parse(localStorage.getItem(orderKey) || '[]');
    orders.unshift(order); // Add to top
    localStorage.setItem(orderKey, JSON.stringify(orders));

    // Success Toast
    showToast('Đặt hàng thành công!', 'Đơn hàng ' + orderId + ' đang được xử lý.', 'success');
    
    // Clear cart
    cart = [];
    saveCart();
    renderCart();
  });

  // ===== Product Detail Page: Override buy/cart/wishlist =====
  $(document).on('click', '#btnAddCart', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var params = new URLSearchParams(window.location.search);
    var productId = params.get('id') || '1';
    var qty = parseInt($('#qtyInput').val()) || 1;
    addToCart(productId, qty);
  });

  $(document).on('click', '#btnBuyNow', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var params = new URLSearchParams(window.location.search);
    var productId = params.get('id') || '1';
    var qty = parseInt($('#qtyInput').val()) || 1;
    addToCart(productId, qty);
    openCart();
  });

  $(document).on('click', '#btnWishlist', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var params = new URLSearchParams(window.location.search);
    var productId = params.get('id') || '1';
    toggleWishlist(productId);

    // Update heart icon on detail page
    if (wishlist.indexOf(productId) > -1) {
      $(this).find('i').removeClass('far').addClass('fas');
      $(this).css('color', '#e74c3c');
    } else {
      $(this).find('i').removeClass('fas').addClass('far');
      $(this).css('color', '');
    }
  });

  // ===== Wishlist page from nav icon =====
  $(document).on('click', '.nav-icon-btn[title="Yêu thích"]', function (e) {
    e.preventDefault();
    openWishlist();
  });

  // ===== Initialize on page load =====
  updateCartBadge();
  updateWishlistBadge();
  renderCart();

  // Delay to let other scripts render first
  setTimeout(function () {
    updateWishlistUI();
  }, 300);

  // ===== Render Orders =====
  function renderOrders() {
    var $container = $('#ordersListContainer');
    $container.empty();

    var userEmail = localStorage.getItem('owleraEmail') || 'guest';
    var orderKey = 'owleraOrders_' + userEmail;
    var orders = JSON.parse(localStorage.getItem(orderKey) || '[]');
    if (orders.length === 0) {
      $container.html('<div class="text-center p-5"><i class="far fa-box-open" style="font-size: 3rem; color: var(--border); margin-bottom: 15px;"></i><p class="text-muted">Bạn chưa có đơn hàng nào.</p><button onclick="window.location.href=\'products.html\'" class="btn btn-owlera mt-3">Mua sắm ngay</button></div>');
      return;
    }

    orders.forEach(function(order) {
      var methodStr = order.method === 'cod' ? 'Thanh toán khi nhận hàng' : (order.method === 'bank' ? 'Chuyển khoản ngân hàng' : 'Thẻ Tín dụng / Ghi nợ');
      
      var itemsHTML = '';
      order.items.forEach(function(item) {
        itemsHTML += '<div class="d-flex align-items-center mb-2">' +
                       '<img src="' + item.img + '" alt="' + item.name + '" style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px; border: 1px solid var(--border); margin-right: 10px;">' +
                       '<div style="flex-grow: 1;">' +
                         '<div style="font-size: 0.85rem; font-weight: 500; color: var(--text-dark);">' + item.name + '</div>' +
                         '<div style="font-size: 0.75rem; color: var(--text-muted);">' + formatPrice(item.price) + ' x ' + item.qty + '</div>' +
                       '</div>' +
                     '</div>';
      });

      var html = '<div class="order-card mb-4" style="background: var(--white); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">' +
                   '<div class="order-header d-flex justify-content-between align-items-center" style="background: var(--light-bg); padding: 12px 20px; border-bottom: 1px solid var(--border);">' +
                     '<div><span style="font-weight: 600; color: var(--primary);">Đơn hàng #' + order.id + '</span> <span style="font-size: 0.8rem; color: var(--text-muted); margin-left: 10px;">' + order.date + '</span></div>' +
                     '<span class="badge" style="background: #e1f5fe; color: #0288d1; padding: 5px 10px; border-radius: 20px; font-weight: 500;">' + order.status + '</span>' +
                   '</div>' +
                   '<div class="order-body p-3">' +
                     itemsHTML +
                   '</div>' +
                   '<div class="order-footer d-flex justify-content-between align-items-center" style="padding: 12px 20px; border-top: 1px dashed var(--border); background: #fafafa;">' +
                     '<div style="font-size: 0.8rem; color: var(--text-muted);"><i class="fas fa-wallet mr-1"></i> ' + methodStr + '</div>' +
                     '<div style="font-weight: 600; color: var(--accent); font-size: 1.1rem;">' + formatPrice(order.total) + '</div>' +
                   '</div>' +
                 '</div>';
      $container.append(html);
    }
    );
  }

  // Expose globally
  window.renderOrders = renderOrders;

});
