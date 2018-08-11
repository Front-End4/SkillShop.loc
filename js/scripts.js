// scripts

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        // numVisible: 3
    });
    instances.set(3);
  });