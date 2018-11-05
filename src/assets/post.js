import $ from 'jquery'
/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Top Slider
5. Init Vid Slider
6. Init Events Slider
7. Init Grid
******************************/
export default function () {
  $(document).ready(function () {
    var header = $('.header')
    var menuActive = false
    var menu = $('.menu')
    var burger = $('.hamburger')

    setHeader()

    $(window).on('resize', function () {
      setHeader()
    })

    $(document).on('scroll', function () {
      setHeader()
    })

    initMenu()
    initTopSlider()
    initVidSlider()
    initEventsSlider()
    initGrid()

    function setHeader () {
      if ($(window).scrollTop() > 100) {
        header.addClass('scrolled')
      } else {
        header.removeClass('scrolled')
      }
    }

    function initMenu () {
      if ($('.menu').length) {
        if ($('.hamburger').length) {
          burger.on('click', function () {
            if (menuActive) {
              closeMenu()
            } else {
              openMenu()

              $(document).one('click', function cls (e) {
                if ($(e.target).hasClass('menu_mm')) {
                  $(document).one('click', cls)
                } else {
                  closeMenu()
                }
              })
            }
          })
        }
      }
    }

    function openMenu () {
      menu.addClass('active')
      menuActive = true
    }

    function closeMenu () {
      menu.removeClass('active')
      menuActive = false
    }

    function initTopSlider () {
      if ($('.sidebar_slider_top').length) {
        var topSlider = $('.sidebar_slider_top')

        topSlider.owlCarousel({
          items: 1,
          loop: true,
          autoplay: false,
          smartSpeed: 1200,
          dots: true,
          dotsContainer: '.custom_dots_top',
          nav: false
        })

        if ($('.custom_prev_top').length) {
          $('.custom_prev_top').on('click', function () {
            topSlider.trigger('prev.owl.carousel')
          })
        }

        if ($('.custom_next_top').length) {
          $('.custom_next_top').on('click', function () {
            topSlider.trigger('next.owl.carousel')
          })
        }

        if ($('.custom_dot_top').length) {
          $('.custom_dot_top').on('click', function (ev) {
            var dot = $(ev.target)
            $('.custom_dot_top').removeClass('active')
            dot.addClass('active')
            topSlider.trigger('to.owl.carousel', [$(this).index(), 300])
          })
        }

        topSlider.on('changed.owl.carousel', function (event) {
          $('.custom_dot_top').removeClass('active')
          $('.custom_dots_top li')
            .eq(event.page.index)
            .addClass('active')
        })
      }
    }

    function initVidSlider () {
      if ($('.sidebar_slider_vid').length) {
        var vidSlider = $('.sidebar_slider_vid')

        vidSlider.owlCarousel({
          items: 1,
          loop: true,
          autoplay: false,
          smartSpeed: 1200,
          dots: true,
          dotsContainer: '.custom_dots_vid',
          nav: false
        })

        if ($('.custom_prev_vid').length) {
          $('.custom_prev_vid').on('click', function () {
            vidSlider.trigger('prev.owl.carousel')
          })
        }

        if ($('.custom_next_vid').length) {
          $('.custom_next_vid').on('click', function () {
            vidSlider.trigger('next.owl.carousel')
          })
        }

        if ($('.custom_dot_vid').length) {
          $('.custom_dot_vid').on('click', function (ev) {
            var dot = $(ev.target)
            $('.custom_dot_vid').removeClass('active')
            dot.addClass('active')
            vidSlider.trigger('to.owl.carousel', [$(this).index(), 300])
          })
        }

        vidSlider.on('changed.owl.carousel', function (event) {
          $('.custom_dot_vid').removeClass('active')
          $('.custom_dots_vid li')
            .eq(event.page.index)
            .addClass('active')
        })
      }
    }

    function initEventsSlider () {
      if ($('.sidebar_slider_events').length) {
        var vidSlider = $('.sidebar_slider_events')

        vidSlider.owlCarousel({
          items: 1,
          loop: true,
          autoplay: false,
          smartSpeed: 1200,
          dots: true,
          dotsContainer: '.custom_dots_events',
          nav: false
        })

        if ($('.custom_prev_events').length) {
          $('.custom_prev_events').on('click', function () {
            vidSlider.trigger('prev.owl.carousel')
          })
        }

        if ($('.custom_next_events').length) {
          $('.custom_next_events').on('click', function () {
            vidSlider.trigger('next.owl.carousel')
          })
        }

        if ($('.custom_dot_events').length) {
          $('.custom_dot_events').on('click', function (ev) {
            var dot = $(ev.target)
            $('.custom_dot_events').removeClass('active')
            dot.addClass('active')
            vidSlider.trigger('to.owl.carousel', [$(this).index(), 300])
          })
        }

        vidSlider.on('changed.owl.carousel', function (event) {
          $('.custom_dot_events').removeClass('active')
          $('.custom_dots_events li')
            .eq(event.page.index)
            .addClass('active')
        })
      }
    }

    function initGrid () {
      setTimeout(function () {
        $('.grid').masonry({
          itemSelector: '.grid-item',
          columnWidth: '.card_small_with_image',
          gutter: 30
        })
      }, 500)
    }
  })
}
