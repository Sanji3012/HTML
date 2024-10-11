 function moveRandomEl(elm) {
      // Set the position as absolute to move freely
      elm.style.position = "absolute";

      // Random positions between 5% and 95% of the screen width and height
      elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
      elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
    }

    // Select the element that will move randomly
    const moveRandom = document.querySelector("#move-random");

    // Move the element when the mouse enters (hover effect)
    moveRandom.addEventListener("mouseenter", function (e) {
      moveRandomEl(e.target);
    });

    // Optional: Move the element when clicked
    moveRandom.addEventListener("click", function (e) {
      moveRandomEl(e.target);
    });