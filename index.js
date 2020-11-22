$(document).ready(function(){

    // Banner Owl Carousel
$("#banner-area .owl-carousel").owlCarousel({
    dots: true,
    items: 1
    });
    // Top sale owl carousel
$("#top-sale .owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 3
        },
        1000:{
            items: 5
        } 
    }
 });
//Isotope filters
var $grid = $(".grid").isotope({
    itemSelector:'.grid-item',
    layoutMode:'fitRows'
});
 //Filter items on button click
 $(".button-group").on("click","button",function(){
     var filterValue=$(this).attr('data-filter');
     $grid.isotope({filter:filterValue});
 })

 // New phones owl carousel
$("#new-phones .owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 3
        },
        1000:{
            items: 5
        } 
    }
 });

$("#blogs .owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 3
        },
    }
})


});