$(document).ready(() => {
    'use strict';

    $('#number-second').mask('+375 (99) 999-99-99');
    $('#number-main').mask('+375 (99) 999-99-99');

    $('#team-category').slick({
        infinite: true,
        dots: true,
        centerMode: true,
        slidesToShow: 3,
        focusOnSelect: true,
        variableWidth: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
        ]
    });

    arrowBack.onclick = function() {
        window.scrollTo(pageXOffset, 0);
    };

    window.addEventListener('scroll', function() {
        arrowBack.hidden = (pageYOffset < document.documentElement.clientHeight);
    });

    new WOW({
        animateClass: 'animate__animated'
    }).init();

    $('.advice').click(() => {
        $('#reservation-container').css('display', 'flex');
    });

    $('#reservation-cancel-close, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close') {
            $('#reservation-container').hide();
        }
    });

    document.getElementById('myBtn').onclick = function () {
        let dots = document.getElementById("dots");
        let more = document.getElementById("more");
        let myBtn = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            myBtn.innerHTML = "Читать весь отзыв";
            more.style.display = "none";
        } else {
            dots.style.display = "none";
            myBtn.innerHTML = "Скрыть";
            more.style.display = "inline";
        }
    }

    document.getElementById('myBtn1').onclick = function () {
        let dots = document.getElementById("dots1");
        let more = document.getElementById("more1");
        let myBtn = document.getElementById("myBtn1");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            myBtn.innerHTML = "Читать весь отзыв";
            more.style.display = "none";
        } else {
            dots.style.display = "none";
            myBtn.innerHTML = "Скрыть";
            more.style.display = "inline";
        }
    }

    document.getElementById('myBtn2').onclick = function () {
        let dots = document.getElementById("dots2");
        let more = document.getElementById("more2");
        let myBtn = document.getElementById("myBtn2");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            myBtn.innerHTML = "Читать весь отзыв";
            more.style.display = "none";
        } else {
            dots.style.display = "none";
            myBtn.innerHTML = "Скрыть";
            more.style.display = "inline";
        }
    }

    document.getElementById('myBtn3').onclick = function () {
        let dots = document.getElementById("dots3");
        let more = document.getElementById("more3");
        let myBtn = document.getElementById("myBtn3");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            myBtn.innerHTML = "Читать весь отзыв";
            more.style.display = "none";
        } else {
            dots.style.display = "none";
            myBtn.innerHTML = "Скрыть";
            more.style.display = "inline";
        }
    }

    $('#reserve-button-main').click(() => {
        $('.reserve-error').hide();

        let name = $('#name-main');
        let number = $('#number-main');

        name.css('border-color', 'rgb(46, 41, 95)');
        number.css('border-color', 'rgb(46, 41, 95)');


        let hasError = false;

        if (!name.val().match(/^[a-zA-Z]/)) {
            name.siblings('.reserve-error').show();
            name.css('border-color', 'red');
            hasError = true;
        }
        if (!number.val()) {
            number.siblings('.reserve-error').show();
            number.css('border-color', 'red');
            hasError = true;
        }

        if (!hasError) {
            $.ajax({
                // type: 'post',
                // url: 'mail.php',
                // data: 'name=' + name.val() + '&data=' + data.val() + '&number=' + number.val() + '&haircut=' + haircut.val() + '&barber=' + barber.val() + '&time=' + time.val(),
                success: () => {
                    $('#reservation-sent').show().css('display', 'flex');
                    $('#reservation-container').hide();
                    $('#reservation-cancel-close-second, #reservation-sent').click((e) => {
                        if (e.target.id === 'reservation-sent' || e.target.id === 'reservation-cancel-close-second') {
                            $('#reservation-sent').hide();
                        }
                    });
                },
                error: () => {
                    $('#reservation-container').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, с нами по номеру телефона.');
                }
            })
        }
    });

    let menuOpen = $('.header .container');

    $('#burger').click(() => {
        menuOpen.toggleClass('menu-open');
    });

    $('.header .menu ul li').click(() => {
        menuOpen.removeClass('menu-open');

    });

    $('.menu-close').click(() => {
        menuOpen.removeClass('menu-open');
    });

    // $('input selector').removeAttr('autofocus');


    $('#reserve-button').click(() => {
        $('.reserve-error').hide();

        let name1 = $('#name-second');
        let number1 = $('#number-second');

        name1.css('border-color', 'rgb(46, 41, 95)');
        number1.css('border-color', 'rgb(46, 41, 95)');


        let hasError = false;

        if (!name1.val().match(/^[a-zA-Z]/)) {
            name1.siblings('.reserve-error').show();
            name1.css('border-color', 'red');
            hasError = true;
        }
        if (!number1.val()) {
            number1.siblings('.reserve-error').show();
            number1.css('border-color', 'red');
            hasError = true;
        }

        if (!hasError) {
            $.ajax({
                // type: 'post',
                // url: 'mail.php',
                // data: 'name=' + name.val() + '&data=' + data.val() + '&number=' + number.val() + '&haircut=' + haircut.val() + '&barber=' + barber.val() + '&time=' + time.val(),
                success: () => {
                    $('#reservation-sent').show().css('display', 'flex');
                    $('#reservation-cancel-close-second, #reservation-sent').click((e) => {
                        if (e.target.id === 'reservation-sent' || e.target.id === 'reservation-cancel-close-second') {
                            $('#reservation-sent').hide();
                        }
                    });
                },
                error: () => {
                    $('#reservation-container').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, с нами по номеру телефона.');
                }
            })
        }
    });

});