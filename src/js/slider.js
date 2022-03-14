function consultant_slider(){
    var owl = $("#consultant-slider");
    owl.owlCarousel({
        loop: true ,
        margin: 15,
        navigation: true,
        items: 5,
        smartSpeed: 1000,
        dots: true,
        autoplay: true,
        center: true,
        autoplayTimeout: 2000,
        dotsEach: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            767: {
                items: 3
            },
            992: {
                items: 5
            },
            1920: {
                items: 5
            }
        }
    });
}
consultant_slider();


function clients_preview(){
    var owl = $("#preview-slider");
    owl.owlCarousel({
        loop: true ,
        margin: 75 ,
        navigation: true,
        items: 3 ,
        smartSpeed: 1000,
        dots: true,
        autoplay: true,
        center: true,
        autoplayTimeout: 2000,
        dotsEach: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            767: {
                items: 2
            },
            992: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });
}
clients_preview();