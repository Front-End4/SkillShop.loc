// scripts


// Carousel


// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, {
//         // numVisible: 3
//     });
//     instances.set(3);
//   });

// Media

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {});
  });

  $(document).ready(function () {
    $('textarea#textarea2').characterCounter();
    $('.modal').modal();
});
