jQuery(document).ready(function($) {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 120) {
            $("body").addClass("header-sticky");
        } 
        else {
            $("body").removeClass("header-sticky");
        }          
    }); 
    $('body').on('click', '.menu-toggle', function(event) {
        $(this).toggleClass('open');
        $('header').toggleClass('open');
    });
    $('body').on('click', '.welcome p', function(event) {
        $('.welcome ul').toggleClass('d-block');
    });
    $('body').on('click', 'header .menu-has-children', function(event) {
        $(this).toggleClass('open');
    });
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, else we gonna set it if we can.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');
    });

    $(".card-slider").slick({
        infinite: true,
        autoplay: true,   
        dots:false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll:1,
        centerMode: false,
        appendArrows: $(".small-arrow"),

        prevArrow: '<button class="product-prev"></button>',
        nextArrow: '<button class="product-next"></button>',
    });

    $(".partner-card-slider").slick({
        infinite: true,
        autoplay: true,   
        dots:false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll:1,
        centerMode: false,
        appendArrows: $(".partner-small-arrow"),

        prevArrow: '<button class="product-prev"></button>',
        nextArrow: '<button class="product-next"></button>',
    });
})
