let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const maxSlides = slides.length;

function showSlide() {
  // Hide all slides
  slides.forEach(slide => slide.style.opacity = 0);
  
  // Show the current slide
  slides[slideIndex].style.opacity = 1;
  
  // Advance to the next slide
  slideIndex++;
  
  // Reset index to 0 if we've reached the end
  if (slideIndex >= maxSlides) {
    slideIndex = 0;
  }
  
  // Repeat every 5 seconds
  setTimeout(showSlide, 5000);
}

// Call showSlide() to start the slideshow
showSlide();
