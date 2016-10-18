$(document).ready(function () {

    // variables
    var $header_top = $('.header-top');
    var $nav = $('nav');

    // toggle menu
    $header_top.find('a').on('click', function () {
        $(this).parent().toggleClass('open-menu');
    });

    // fullpage customization
    $('#fullpage').fullpage({
        sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
        sectionSelector: '.vertical-scrolling',
        slideSelector: '.horizontal-scrolling',
        navigation: true,
        slidesNavigation: true,
        css3: true,
        controlArrows: false,
        anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
        menu: '#menu',

        afterLoad: function (anchorLink, index) {
            $header_top.css('background', 'rgba(0, 47, 77, .4)');
            $nav.css('background', 'rgba(0, 47, 77, .25)');
            //            if (index == 5) {
            //                $('#fp-nav').hide();
            //            }
        },

        onLeave: function (index, nextIndex, direction) {
            if (index == 5) {
                $('#fp-nav').show();
            }
        },

       /* afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            if (anchorLink == 'fifthSection' || anchorLink == 'firstSection' || anchorLink == 'secondSection' || anchorLink == 'thirdSection' || anchorLink == 'forthSection') {
                //$.fn.fullpage.setAllowScrolling(false, 'up');
                $header_top.css('background', 'transparent');
                $nav.css('background', 'transparent');
                //$(this).css('background', '#374140');
                //$(this).find('h2').css('color', 'white');
                //$(this).find('h3').css('color', 'white');
                $(this).find('p').css({
                //    'color': '#DC3522',
                //    'opacity': 1,
                //    'transform': 'translateY(0)'
                });
                //var bredd = $(window).width()/2;
                //bredd = bredd + bredd*2*slideIndex;
                //$("div.scroll-icon").css('left', bredd);
            }
        },*/

        onSlideLeave: function (anchorLink, index, slideIndex, direction) {
            if (anchorLink == 'fifthSection' && slideIndex == 0) {
                $.fn.fullpage.setAllowScrolling(true, 'up');
                $header_top.css('background', 'rgba(0, 47, 77, .3)');
                $nav.css('background', 'rgba(0, 47, 77, .25)');
            }
        }
    });
});
