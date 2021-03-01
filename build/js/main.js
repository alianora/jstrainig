console.log('test');

$(document).ready(function () {
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

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    var addr = $('.address').text();
    $(function () {

        var embed = "<iframe class='iframe' width='581' height='401' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?&amp;q=" + encodeURIComponent(addr) + "&amp;output=embed'></iframe>";

        $('.map-frame').html(embed);
    });

    $(".set > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".content")
                .slideUp(200);
            $(".set > a i")
                .removeClass("accordion-up")
                .addClass("accordion-down");
        } else {
            $(".set > a i")
                .removeClass("accordion-up")
                .addClass("accordion-down");
            $(this)
                .find("i")
                .removeClass("accordion-down")
                .addClass("accordion-up");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this)
                .siblings(".content")
                .slideDown(200);
        }
    });

    $(function () {

        $('li.dropdown > a').on('click', function (event) {

            event.preventDefault();
            $(this).toggleClass('selected');
            $(this).parent().find('ul').first().toggle(300);

            $(this).parent().siblings().find('ul').hide(200);

            //Hide menu when clicked outside
            $(this).parent().find('ul').parent().mouseleave(function () {
                var thisUI = $(this);
                $('html').click(function () {
                    thisUI.children(".dropdown-menu").hide();
                    thisUI.children("a").removeClass('selected');

                    $('html').unbind('click');
                });
            });

        });

    });

    $.getJSON( "mock/accordion-content.json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
            console.log(data);
//var set_content =
//             items.push("<div class='set'><a href='javascript:void(0)'><i class='slick-arrow accordion-button accordion-down'></i>"+
//                 + val.title +
//                 + "<table class='sale-data'><tr>" +
//                 + "<td>"+ val.quantity +" шт.</td>" +
//                 + "<td>"+ val.date +"</td>" +
//                 + "<td class='price'><span class='price span>'>"+
//                 + val.price +
//                 + "</span> грн.</td></tr></table></a></div>");

            var content = "<p>" + val.title + "</p>";

            items.push(content);

            console.log(val.title);
            // var tickets_info =
            //     "<div class='content'><div class='tickets'>";
        });

        $( "<div/>", {
            "class": "set",
            html: items.join( "" )
        }).appendTo( "wrap accordion accordion-container" );
    });

});