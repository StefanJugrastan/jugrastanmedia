const gifs = document.querySelectorAll('.gifs');

gifs.forEach(gif => {
  gif.addEventListener('mouseover', () => {
    gif.load();
    gif.play();
  });
  
  gif.addEventListener('mouseleave', () => {
    gif.pause();
  });
});
