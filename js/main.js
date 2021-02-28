$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 90) {
            $('.header').addClass('header-shrink');
        } else {
            $('.header').removeClass('header-shrink');
        }
    })


    $('.feature-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,

            },
            1000: {
                items: 3
            }
        }
    })

    $('.appshot__carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,

            },
            1000: {
                items: 3
            }
        }
    })

    $('.testimonial__box').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,

            },
            1000: {
                items: 3
            }
        }
    })

    $('.team__box').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,

            },
            1000: {
                items: 3
            }
        }
    })

    function toggleIcon(e) {
        $(e.target)
            .prev('.accordion__icon')
            .find(".show")
            .toggleClass('glyphicon-plus glyphicon-minus');
    }
    $('.accordion__icon').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);

    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    })


    //theme toggle



    $('.toggle-theme').on('click', function () {
        $('body').toggleClass('dark');
        if ($('body').hasClass('dark')) {
            $('.toggle__icon').removeClass('fa-moon');
            $('.toggle__icon').addClass('fa-sun');
            localStorage.setItem('shala-theme', 'dark');
        } else {
            $('.toggle__icon').removeClass('fa-sun');
            $('.toggle__icon').addClass('fa-moon');
            localStorage.setItem('shala-theme', 'light');
        }
    })



})

$(document).ready(function () {
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function () {
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
});