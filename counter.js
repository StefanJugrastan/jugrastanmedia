let images = document.querySelectorAll(".gallery-item");
let valueCounters = [];

images.forEach((image) => {
  image.addEventListener("mouseenter", function() {
    console.log("Mouse enter");
    let valueDisplays = image.querySelectorAll(".num");
    let duration = 3000;

    valueDisplays.forEach((valueDisplay, index) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let increment = (endValue - startValue) / (duration / 10);
      console.log(`Start value: ${startValue}, end value: ${endValue}, duration: ${duration}, increment: ${increment}`);
      let counter = setInterval(function () {
        startValue += increment;
        if (startValue >= endValue) {
          valueDisplay.textContent = endValue.toLocaleString() + " views";
          clearInterval(counter);
          console.log(`Final value: ${endValue}`);
        } else {
          valueDisplay.textContent = Math.round(startValue).toLocaleString() + " views";
          console.log(`Current value: ${startValue}`);
        }
      }, 10);

      valueCounters.push(counter);
    });
  });

  image.addEventListener("mouseleave", function() {
    console.log("Mouse leave");
    valueCounters.forEach((counter) => {
      clearInterval(counter);
    });

    valueCounters = [];
  });
});
