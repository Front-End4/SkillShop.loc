// scripts

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        // numVisible: 3
    });
    instances.set(3);

});

$(document).ready(function () {
    $('input#input_text, textarea#textarea2').characterCounter();
});