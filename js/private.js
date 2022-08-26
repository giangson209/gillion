
$(document).ready(function(){
    $('.slide-real').slick({
        autoplay:false,
        arrow:false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: { 
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: { 
                    slidesToShow: 2,
                }
            },
            { 
                breakpoint: 575, 
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: false,
                }
            }
        ],
    });
    $('.slide-aan').slick({
        autoplay:false,
        arrow:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<a href="javascript:void(0)" class="arr-left"><img src="images/arr-left.png" class="img-fluid" alt=""></a>',
        nextArrow: '<a href="javascript:void(0)" class="arr-right"><img src="images/arr-right.png" class="img-fluid" alt=""></a>',
        responsive: [
            {
                breakpoint: 1023,
                settings: { 
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: { 
                    slidesToShow: 2,
                }
            },
            { 
                breakpoint: 575, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
    });

    $('.slide-team').slick({
        autoplay:false,
        arrow:false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false, 
        prevArrow: '',
        nextArrow: '',
        responsive: [
            {
                breakpoint: 1023,
                settings: { 
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: { 
                    slidesToShow: 2,
                }
            },
            { 
                breakpoint: 575, 
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: false,
                }
            }
        ],
    });

    $('.tab-top a').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tab-top a').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    })

    $('.btn-bar a').click(function(){
        $('html, .header-menu').addClass('active');
    })
    $('.btn-close-menu a').click(function(){
        $('html, .header-menu').removeClass('active');
    })

    $('.box-scroll-icon a').click(function(e){
      e.preventDefault();
      var target = $($(this).attr('href'));
      if(target.length){
        var scrollTo = target.offset().top;
        $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
      }
    });
})

