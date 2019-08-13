$('.burger').on('click', function () {
    // if ($('div').hasClass('close') == true) {
    //     $('aside').animate({
    //         right: '-300px',
    //     }, {
    //         duration: 500,
    //         specialEasing: {
    //             right: "linear",
    //         }
    //     });
    // } else {
    //     $('aside').animate({
    //         right: 0,
    //     }, {
    //         duration: 500,
    //         specialEasing: {
    //             right: "linear",
    //         }
    //     });
    // }
    $('.burger').toggleClass("active");
})