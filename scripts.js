$(function () {
  /* PAGE LOADER */
  if (document.readyState === 'complete') {
    setTimeout(function () {
      $('#page-loader').addClass('hidden');
    }, 200);
  }

  $(window).on('load', function () {
    setTimeout(function () {
      $('#page-loader').addClass('hidden');
    }, 600);
  });

  setTimeout(function () {
    $('#page-loader').addClass('hidden');
  }, 2000);

  /* MOBILE MENU */
  $('#hamburger').on('click', function () {
    $(this).toggleClass('open');
    $('#nav-menu').toggleClass('active');
    $(this).attr('aria-expanded', $(this).hasClass('open'));
  });

  $('#nav-menu a').on('click', function () {
    if ($(window).width() <= 768) {
      $('#nav-menu').removeClass('active');
      $('#hamburger').removeClass('open').attr('aria-expanded', 'false');
    }
  });

  /* FAQ ACCORDION */
  $('.faq-question').on('click', function () {
    const $item = $(this).closest('.faq-item');
    const $icon = $(this).find('.faq-icon');

    if ($item.hasClass('active')) {
      $item.removeClass('active');
      $icon.text('+');
    } else {
      $('.faq-item').removeClass('active');
      $('.faq-icon').text('+');
      $item.addClass('active');
      $icon.text('−');
    }
  });

  /* STORIES CAROUSEL */
  if ($('#storiesCarousel').length) {
    $('#storiesCarousel').owlCarousel({
      loop: true,
      margin: 12,
      nav: false,
      dots: true,
      autoplay: false,
      responsive: {
        0: { items: 1 },
        768: { items: 2 }
      }
    });
  }

  /* DOCTORS CAROUSEL */
  if ($('#doctorsCarousel').length) {
    $('#doctorsCarousel').owlCarousel({
      loop: true,
      margin: 16,
      nav: false,
      dots: true,
      autoplay: false,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        992: { items: 3 }
      }
    });
  }

  /* HOSPITALS CAROUSEL */
  if ($('#hospitalsCarousel').length) {
    $('#hospitalsCarousel').owlCarousel({
      loop: true,
      margin: 16,
      nav: false,
      dots: true,
      autoplay: false,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        992: { items: 3 }
      }
    });
  }

  /* ANCHOR TABS ACTIVE STATE */
  function updateActiveTab() {
    var scrollPos = $(window).scrollTop() + 140;
    $('.tabs-list a').each(function () {
      var target = $($(this).attr('href'));
      if (target.length) {
        if (
          target.offset().top <= scrollPos &&
          target.offset().top + target.outerHeight() > scrollPos
        ) {
          $('.tabs-list a').removeClass('active');
          $(this).addClass('active');
        }
      }
    });
  }

  $(window).on('scroll', updateActiveTab);
  updateActiveTab();

  /* FADE UP OBSERVER */
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          $(entry.target).addClass('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    $('.fade-up').addClass('visible');
  }

  /* FLAG DROPDOWN */
  $('.selected-lang').on('click', function (e) {
    e.stopPropagation();
    $('.language-dropdown').toggleClass('active');
  });

  $('.lang-menu li img').on('click', function () {
    $('#selectedFlag').attr('src', $(this).attr('src'));
    $('.language-dropdown').removeClass('active');
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.language-dropdown').length) {
      $('.language-dropdown').removeClass('active');
    }
  });
});