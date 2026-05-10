/* ===================================
   OWLERA - Product Detail JavaScript
   Gallery, Quantity, Buy actions
   =================================== */

$(document).ready(function () {

  // ===== Thumbnail Click → Change Main Image =====
  $(document).on('click', '.detail-thumbnails .thumb', function () {
    var newSrc = $(this).data('img');
    var transformStr = $(this).data('transform') || 'none';
    
    $('#mainProductImg').fadeOut(150, function () {
      $(this).attr('src', newSrc).css('transform', transformStr).fadeIn(150);
    });
    $('.detail-thumbnails .thumb').removeClass('active');
    $(this).addClass('active');
  });

  // ===== Quantity Control =====
  $('#qtyMinus').on('click', function () {
    var val = parseInt($('#qtyInput').val());
    if (val > 1) {
      $('#qtyInput').val(val - 1);
    }
  });

  $('#qtyPlus').on('click', function () {
    var val = parseInt($('#qtyInput').val());
    if (val < 10) {
      $('#qtyInput').val(val + 1);
    }
  });


  // ===== Load product by URL param (simple demo) =====
  var products = {
    '1': { name: 'Owlera Classic Round', category: 'Kính Cận', price: '900.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product1.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính tiêu chuẩn', size: '50-20-140mm', desc: 'Gọng kính Owlera Classic Round với thiết kế sang trọng, phù hợp cho mọi hoàn cảnh. Chất liệu cao cấp siêu nhẹ và bền bỉ.' },
    '2': { name: 'Owlera Titanium Slim', category: 'Kính Cận', price: '1.000.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product2.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính tiêu chuẩn', size: '50-20-140mm', desc: 'Gọng kính Owlera Titanium Slim với thiết kế sang trọng, phù hợp cho mọi hoàn cảnh. Chất liệu cao cấp siêu nhẹ và bền bỉ.' },
    '3': { name: 'Owlera Blue Shield', category: 'Kính Cận', price: '1.100.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product3.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính tiêu chuẩn', size: '50-20-140mm', desc: 'Gọng kính Owlera Blue Shield với thiết kế sang trọng, phù hợp cho mọi hoàn cảnh. Chất liệu cao cấp siêu nhẹ và bền bỉ.' },
    '4': { name: 'Owlera Minimalist', category: 'Kính Cận', price: '1.200.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product4.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính tiêu chuẩn', size: '50-20-140mm', desc: 'Gọng kính Owlera Minimalist với thiết kế sang trọng, phù hợp cho mọi hoàn cảnh. Chất liệu cao cấp siêu nhẹ và bền bỉ.' },
    '5': { name: 'Owlera Clear Vision', category: 'Kính Cận', price: '1.300.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product5.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính tiêu chuẩn', size: '50-20-140mm', desc: 'Gọng kính Owlera Clear Vision với thiết kế sang trọng, phù hợp cho mọi hoàn cảnh. Chất liệu cao cấp siêu nhẹ và bền bỉ.' },
    '6': { name: 'Owlera Office Pro', category: 'Kính Cận', price: '1.400.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product6.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính tiêu chuẩn', size: '50-20-140mm', desc: 'Gọng kính Owlera Office Pro với thiết kế sang trọng, phù hợp cho mọi hoàn cảnh. Chất liệu cao cấp siêu nhẹ và bền bỉ.' },
    '7': { name: 'Owlera Student', category: 'Kính Cận', price: '1.500.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product7.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính tiêu chuẩn', size: '50-20-140mm', desc: 'Gọng kính Owlera Student với thiết kế sang trọng, phù hợp cho mọi hoàn cảnh. Chất liệu cao cấp siêu nhẹ và bền bỉ.' },
    '8': { name: 'Owlera Retro Square', category: 'Kính Cận', price: '1.600.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product8.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính tiêu chuẩn', size: '50-20-140mm', desc: 'Gọng kính Owlera Retro Square với thiết kế sang trọng, phù hợp cho mọi hoàn cảnh. Chất liệu cao cấp siêu nhẹ và bền bỉ.' },
    '9': { name: 'Owlera Hexagon Slim', category: 'Kính Cận', price: '1.700.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product9.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính tiêu chuẩn', size: '50-20-140mm', desc: 'Gọng kính Owlera Hexagon Slim với thiết kế sang trọng, phù hợp cho mọi hoàn cảnh. Chất liệu cao cấp siêu nhẹ và bền bỉ.' },
    '10': { name: 'Owlera Ultra Light', category: 'Kính Cận', price: '1.800.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product10.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính tiêu chuẩn', size: '50-20-140mm', desc: 'Gọng kính Owlera Ultra Light với thiết kế sang trọng, phù hợp cho mọi hoàn cảnh. Chất liệu cao cấp siêu nhẹ và bền bỉ.' },
    '11': { name: 'Owlera Flex Frame', category: 'Kính Cận', price: '1.900.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product11.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính tiêu chuẩn', size: '50-20-140mm', desc: 'Gọng kính Owlera Flex Frame với thiết kế sang trọng, phù hợp cho mọi hoàn cảnh. Chất liệu cao cấp siêu nhẹ và bền bỉ.' },
    '12': { name: 'Owlera Crystal Clear', category: 'Kính Cận', price: '2.000.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product12.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính tiêu chuẩn', size: '50-20-140mm', desc: 'Gọng kính Owlera Crystal Clear với thiết kế sang trọng, phù hợp cho mọi hoàn cảnh. Chất liệu cao cấp siêu nhẹ và bền bỉ.' },
    '13': { name: 'Owlera Night Drive', category: 'Kính Cận', price: '2.100.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product13.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính tiêu chuẩn', size: '50-20-140mm', desc: 'Gọng kính Owlera Night Drive với thiết kế sang trọng, phù hợp cho mọi hoàn cảnh. Chất liệu cao cấp siêu nhẹ và bền bỉ.' },
    '14': { name: 'Owlera Reading', category: 'Kính Cận', price: '2.200.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product14.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính tiêu chuẩn', size: '50-20-140mm', desc: 'Gọng kính Owlera Reading với thiết kế sang trọng, phù hợp cho mọi hoàn cảnh. Chất liệu cao cấp siêu nhẹ và bền bỉ.' },
    '15': { name: 'Owlera Executive', category: 'Kính Cận', price: '2.300.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product15.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính tiêu chuẩn', size: '50-20-140mm', desc: 'Gọng kính Owlera Executive với thiết kế sang trọng, phù hợp cho mọi hoàn cảnh. Chất liệu cao cấp siêu nhẹ và bền bỉ.' },
    '16': { name: 'Owlera Cat-Eye Noir', category: 'Kính Râm', price: '1.200.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product16.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính chống UV', size: '55-18-145mm', desc: 'Kính râm Owlera Cat-Eye Noir với phong cách thời trang, chống tia UV hiệu quả.' },
    '17': { name: 'Owlera Aviator Gold', category: 'Kính Râm', price: '1.250.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product17.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính chống UV', size: '55-18-145mm', desc: 'Kính râm Owlera Aviator Gold với phong cách phi công cổ điển, chống tia UV hiệu quả.' },
    '18': { name: 'Owlera Gradient Square', category: 'Kính Râm', price: '1.300.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product18.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính chống UV', size: '55-18-145mm', desc: 'Kính râm Owlera Gradient Square với tròng kính gradient hiện đại.' },
    '19': { name: 'Owlera Summer Vibes', category: 'Kính Râm', price: '1.350.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product19.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính chống UV', size: '55-18-145mm', desc: 'Kính râm Owlera Summer Vibes hoàn hảo cho mùa hè.' },
    '20': { name: 'Owlera Beach Comber', category: 'Kính Râm', price: '1.400.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product20.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính chống UV', size: '55-18-145mm', desc: 'Kính râm Owlera Beach Comber phong cách biển cả.' },
    '21': { name: 'Owlera Sunset Driver', category: 'Kính Râm', price: '1.450.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product21.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính chống UV', size: '55-18-145mm', desc: 'Kính râm Owlera Sunset Driver chuyên dụng cho lái xe.' },
    '22': { name: 'Owlera Polarized Max', category: 'Kính Râm', price: '1.500.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product22.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính phân cực', size: '55-18-145mm', desc: 'Kính râm Owlera Polarized Max với tròng phân cực cao cấp.' },
    '23': { name: 'Owlera Sport Xtreme', category: 'Kính Râm', price: '1.550.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product23.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính chống UV', size: '55-18-145mm', desc: 'Kính râm Owlera Sport Xtreme thiết kế thể thao.' },
    '24': { name: 'Owlera Classic Wayfarer', category: 'Kính Râm', price: '1.600.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product24.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính chống UV', size: '55-18-145mm', desc: 'Kính râm Owlera Classic Wayfarer với dáng cổ điển.' },
    '25': { name: 'Owlera Round Vintage', category: 'Kính Râm', price: '1.650.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product25.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính chống UV', size: '55-18-145mm', desc: 'Kính râm Owlera Round Vintage phong cách retro.' },
    '26': { name: 'Owlera Oversized Glamour', category: 'Kính Râm', price: '1.700.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product26.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính chống UV', size: '60-18-145mm', desc: 'Kính râm Owlera Oversized Glamour cỡ lớn quyến rũ.' },
    '27': { name: 'Owlera Matrix Style', category: 'Kính Râm', price: '1.750.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product27.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính chống UV', size: '55-18-145mm', desc: 'Kính râm Owlera Matrix Style phong cách tương lai.' },
    '28': { name: 'Owlera Neon Pop', category: 'Kính Râm', price: '1.800.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product28.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính tráng gương', size: '55-18-145mm', desc: 'Kính râm Owlera Neon Pop với tròng tráng gương nổi bật.' },
    '29': { name: 'Owlera Mirrored Silver', category: 'Kính Râm', price: '1.850.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product29.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính tráng gương bạc', size: '55-18-145mm', desc: 'Kính râm Owlera Mirrored Silver với tròng tráng gương bạc cao cấp.' },
    '30': { name: 'Owlera Vintage Rose', category: 'Kính Thời Trang', price: '1.520.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product30.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính thời trang', size: '52-20-140mm', desc: 'Gọng kính thời trang Owlera Vintage Rose phong cách cổ điển.' },
    '31': { name: 'Owlera Luxe Oversize', category: 'Kính Thời Trang', price: '1.540.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product31.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính thời trang', size: '58-20-140mm', desc: 'Gọng kính thời trang Owlera Luxe Oversize cỡ lớn sang trọng.' },
    '32': { name: 'Owlera Clear Frame', category: 'Kính Thời Trang', price: '1.560.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product32.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính thời trang', size: '52-20-140mm', desc: 'Gọng kính thời trang Owlera Clear Frame trong suốt, hiện đại.' },
    '33': { name: 'Owlera Tortoise Shell', category: 'Kính Thời Trang', price: '1.580.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product33.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính thời trang', size: '52-20-140mm', desc: 'Gọng kính thời trang Owlera Tortoise Shell hoa văn mai rùa.' },
    '34': { name: 'Owlera Gold Rim', category: 'Kính Thời Trang', price: '1.600.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product34.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính thời trang', size: '52-20-140mm', desc: 'Gọng kính thời trang Owlera Gold Rim viền vàng quý phái.' },
    '35': { name: 'Owlera Silver Accent', category: 'Kính Thời Trang', price: '1.620.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product35.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính thời trang', size: '52-20-140mm', desc: 'Gọng kính thời trang Owlera Silver Accent điểm nhấn bạc tinh tế.' },
    '36': { name: 'Owlera Pink Panther', category: 'Kính Thời Trang', price: '1.640.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product36.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính thời trang', size: '52-20-140mm', desc: 'Gọng kính thời trang Owlera Pink Panther hồng nữ tính.' },
    '37': { name: 'Owlera Blue Ocean', category: 'Kính Thời Trang', price: '1.660.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product37.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính thời trang', size: '52-20-140mm', desc: 'Gọng kính thời trang Owlera Blue Ocean xanh biển mát mẻ.' },
    '38': { name: 'Owlera Green Forest', category: 'Kính Thời Trang', price: '1.680.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product38.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính thời trang', size: '52-20-140mm', desc: 'Gọng kính thời trang Owlera Green Forest xanh rừng tự nhiên.' },
    '39': { name: 'Owlera Red Ruby', category: 'Kính Thời Trang', price: '1.700.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product39.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính thời trang', size: '52-20-140mm', desc: 'Gọng kính thời trang Owlera Red Ruby đỏ ruby nồng nàn.' },
    '40': { name: 'Owlera Black Diamond', category: 'Kính Thời Trang', price: '1.720.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product40.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính thời trang', size: '52-20-140mm', desc: 'Gọng kính thời trang Owlera Black Diamond đen huyền bí.' },
    '41': { name: 'Owlera White Pearl', category: 'Kính Thời Trang', price: '1.740.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product41.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính thời trang', size: '52-20-140mm', desc: 'Gọng kính thời trang Owlera White Pearl trắng ngọc trai.' },
    '42': { name: 'Owlera Yellow Sun', category: 'Kính Thời Trang', price: '1.760.000₫', oldPrice: '', discount: '', badge: '', img: 'img/product42.png', material: 'Chất liệu cao cấp', lens: 'Tròng kính thời trang', size: '52-20-140mm', desc: 'Gọng kính thời trang Owlera Yellow Sun vàng rực rỡ.' }
  };

  var params = new URLSearchParams(window.location.search);
  var productId = params.get('id') || '1';
  var p = products[productId];

  if (p) {
    document.title = p.name + ' | Owlera – Mắt Kính Cao Cấp';
    $('#detailPageTitle').text(p.name);
    $('#breadcrumbName').text(p.name);
    $('#detailName').text(p.name);
    $('#detailCategory').text(p.category);
    $('#detailPrice').text(p.price);
    $('#mainProductImg').attr('src', p.img).attr('alt', p.name);
    $('#detailDescription p').text(p.desc);
    $('#specMaterial').text(p.material);
    $('#specLens').text(p.lens);
    $('#specSize').text(p.size);

    // Thumbnails: 3 images of the SAME product
    var thumbHtml = '<div class="thumb active" data-img="' + p.img + '" data-transform="none"><img src="' + p.img + '" alt="Mặt trước"></div>';
    thumbHtml += '<div class="thumb" data-img="' + p.img + '" data-transform="scaleX(-1)"><img src="' + p.img + '" alt="Mặt sau" style="transform: scaleX(-1);"></div>';
    thumbHtml += '<div class="thumb" data-img="' + p.img + '" data-transform="rotate(-5deg) scale(1.05)"><img src="' + p.img + '" alt="Góc nghiêng" style="transform: rotate(-5deg) scale(1.05);"></div>';
    $('#thumbnailList').html(thumbHtml);

    if (p.oldPrice) {
      $('#detailOldPrice').text(p.oldPrice).show();
    } else {
      $('#detailOldPrice').hide();
    }

    if (p.discount) {
      $('#detailDiscount').text(p.discount).show();
    } else {
      $('#detailDiscount').hide();
    }

    if (p.badge) {
      $('#detailBadge').text(p.badge).show();
      if (p.badge.includes('%')) {
        $('#detailBadge').css('background', '#e74c3c');
      } else if (p.badge === 'Premium') {
        $('#detailBadge').css('background', '#8e44ad');
      }
    } else {
      $('#detailBadge').hide();
    }
  }

});
