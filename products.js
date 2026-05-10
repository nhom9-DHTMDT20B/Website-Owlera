/* ===================================
   OWLERA - Products Page JavaScript
   Filter & Sort functionality
   =================================== */

$(document).ready(function () {

  var params = new URLSearchParams(window.location.search);
  var urlCategory = params.get('category');
  var urlSearch = params.get('search');
  var activeCategory = urlCategory || 'all';
  var activePrice = 'all';
  var searchQuery = urlSearch ? urlSearch.toLowerCase() : '';

  function removeAccents(str) {
    if (!str) return '';
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
  }

  var normalizedSearch = removeAccents(searchQuery);
  var searchTerms = [normalizedSearch];
  var synonyms = {
    'kinh mat': 'kinh ram'
  };
  for (var key in synonyms) {
    if (normalizedSearch.indexOf(key) > -1) {
      searchTerms.push(synonyms[key]);
    }
  }

  // ===== Category Filter (Sidebar) =====
  $('#categoryFilter .filter-link').on('click', function (e) {
    e.preventDefault();
    $('#categoryFilter .filter-link').removeClass('active');
    $(this).addClass('active');
    activeCategory = $(this).data('filter');
    $('#mobileCategoryFilter').val(activeCategory);
    
    // Update Page Header Title
    var title = $(this).data('title');
    if (title) {
      $('#pageHeaderTitle').text('Danh Sách ' + title);
      document.title = title + ' | Owlera – Mắt Kính Cao Cấp';
    }
    
    filterProducts();
  });

  // ===== Price Filter (Sidebar) =====
  $('#priceFilter .filter-link').on('click', function (e) {
    e.preventDefault();
    $('#priceFilter .filter-link').removeClass('active');
    $(this).addClass('active');
    activePrice = $(this).data('price');
    filterProducts();
  });

  // ===== Mobile Category Dropdown =====
  $('#mobileCategoryFilter').on('change', function () {
    activeCategory = $(this).val();
    var $activeLink = $('#categoryFilter .filter-link[data-filter="' + activeCategory + '"]');
    
    $('#categoryFilter .filter-link').removeClass('active');
    $activeLink.addClass('active');
    
    var title = $activeLink.data('title');
    if (title) {
      $('#pageHeaderTitle').text('Danh Sách ' + title);
      document.title = title + ' | Owlera – Mắt Kính Cao Cấp';
    }
    
    filterProducts();
  });

  // ===== Card Category Link Click =====
  $(document).on('click', '.card-category-link', function (e) {
    e.preventDefault();
    var filter = $(this).data('filter');
    // Trigger the click on the sidebar link so it updates everything (active state, title, filter)
    var $targetLink = $('#categoryFilter .filter-link[data-filter="' + filter + '"]');
    if ($targetLink.length) {
      $targetLink.click();
      // Scroll to the top of the products grid for better UX
      $('html, body').animate({
        scrollTop: $('#productsGrid').offset().top - 150
      }, 500);
    }
  });

  // ===== Sort =====
  $('#sortSelect').on('change', function () {
    sortProducts($(this).val());
  });

  // ===== Filter Function =====
  function filterProducts() {
    var visibleCount = 0;

    $('.product-col').each(function () {
      var category = $(this).data('category');
      var price = parseInt($(this).data('price'));
      
      var matchCategory = (activeCategory === 'all' || category === activeCategory);
      var matchPrice = true;
      var matchSearch = true;

      if (activePrice === 'under1m') {
        matchPrice = price < 1000000;
      } else if (activePrice === '1m-2m') {
        matchPrice = price >= 1000000 && price <= 2000000;
      } else if (activePrice === 'over2m') {
        matchPrice = price > 2000000;
      }

      if (searchQuery) {
        var productName = removeAccents($(this).data('name') ? $(this).data('name').toLowerCase() : '');
        var productCategory = removeAccents($(this).find('.product-category').text().toLowerCase());
        
        matchSearch = false;
        for (var i = 0; i < searchTerms.length; i++) {
          if (productName.indexOf(searchTerms[i]) > -1 || productCategory.indexOf(searchTerms[i]) > -1) {
            matchSearch = true;
            break;
          }
        }
      }

      if (matchCategory && matchPrice && matchSearch) {
        $(this).fadeIn(300);
        visibleCount++;
      } else {
        $(this).fadeOut(200);
      }
    });

    $('#visibleCount').text(visibleCount);

    if (visibleCount === 0) {
      $('#noResults').fadeIn(300);
    } else {
      $('#noResults').fadeOut(200);
    }
  }

  // ===== Sort Function =====
  function sortProducts(sortBy) {
    var $grid = $('#productsGrid');
    var $items = $grid.children('.product-col').get();

    $items.sort(function (a, b) {
      switch (sortBy) {
        case 'price-asc':
          return $(a).data('price') - $(b).data('price');
        case 'price-desc':
          return $(b).data('price') - $(a).data('price');
        case 'name-asc':
          return $(a).data('name').localeCompare($(b).data('name'));
        default:
          return 0;
      }
    });

    $.each($items, function (i, el) {
      $grid.append(el);
    });
  }

  // ===== Initialize on page load =====
  if (urlCategory) {
    var $activeLink = $('#categoryFilter .filter-link[data-filter="' + urlCategory + '"]');
    if ($activeLink.length) {
      $('#categoryFilter .filter-link').removeClass('active');
      $activeLink.addClass('active');
      $('#mobileCategoryFilter').val(urlCategory);
      
      var title = $activeLink.data('title');
      if (title) {
        $('#pageHeaderTitle').text('Danh Sách ' + title);
        document.title = title + ' | Owlera – Mắt Kính Cao Cấp';
      }
    }
  }

  if (urlSearch) {
    $('#pageHeaderTitle').text('Kết quả tìm kiếm cho: "' + urlSearch + '"');
    document.title = 'Tìm kiếm: ' + urlSearch + ' | Owlera';
    $('#clearSearchBtn').show();
  }

  if (urlCategory || urlSearch) {
    filterProducts();
  }

});
