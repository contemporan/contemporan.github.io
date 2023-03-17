var slidePosition = 1;
SlideShow(0, slidePosition);
SlideShow(1, slidePosition);

setInterval(() => {
  plusSlides(0, 1);
  plusSlides(1, 1);
}, 6000)

// forward/Back controls
function plusSlides(type, n) {
  SlideShow(type, slidePosition += n);
}

//  images controls
function currentSlide(type, n) {
  SlideShow(type, slidePosition = n);
}

function SlideShow(type, n) {
  var i;
  var slides;
  var circles;


  if (type == 0) {
    slides = document.getElementsByClassName("Containers");
    circles = document.getElementsByClassName("dots");
  } else {
    slides = document.getElementsByClassName("ContainersDiplome");
    circles = document.getElementsByClassName("dotsDiplome");
  }

  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 