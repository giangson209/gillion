
$(document).ready(function(){
    $('.slide-real').slick({
        autoplay:false,
        arrow:false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
    });
    $('.slide-aan').slick({
        autoplay:false,
        arrow:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<a href="javascript:void(0)" class="arr-left"><img src="images/arr-left.png" class="img-fluid" alt=""></a>',
        nextArrow: '<a href="javascript:void(0)" class="arr-right"><img src="images/arr-right.png" class="img-fluid" alt=""></a>',
    });
})

