var modal = document.getElementById("reg-modal");

var btn = document.getElementById("reg-mod");

var rm_close = document.getElementById("rm-close");

btn.onclick = function() {
    modal.classList.remove('d-none')
    
}

rm_close.onclick = function() {
    modal.classList.add('d-none')
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.add('d-none');
  }
}

$(document).ready(function() {
    $("#all-c").click(function() {
        $(".ac-slide").slideToggle(100, 'linear');
    });
});
document.getElementById('all-c').addEventListener('click', function(){
    document.getElementById('ac-slide').style.visibility = 'visible';
})


$('.sec3-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
