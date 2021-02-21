console.log('test');

$(document).ready(function (){
    $('.banner').slick();
    $('.slick-prev').addClass('fas fa-chevron-left');
    $('.slick-next').addClass('fas fa-chevron-right');

    $('.premieres-container').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // if ($('.slick-list.draggable').closest('.premieres-container .slick-initialized .slick-slider')) {
    //     $('.slick-list.draggable').addClass('slick-margin');
    // }
});