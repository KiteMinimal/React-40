var img = document.querySelector('img');
var body = document.querySelector('body');
var hole = document.querySelector('.hole');
var moveX = 0;
var moveY = 0;

// Set initial styles for image positioning
img.style.position = 'absolute';
img.style.left = '0px';
img.style.top = '0px';

body.addEventListener("keydown", function (dets) {
  if (dets.key === 'ArrowLeft') {
    moveX -= 10;
  } else if (dets.key === 'ArrowRight') {
    moveX += 10;
  } else if (dets.key === 'ArrowUp') {
    moveY -= 10;
  } else if (dets.key === 'ArrowDown') {
    moveY += 10;
  }

  img.style.left = moveX + 'px';
  img.style.top = moveY + 'px';

  checkCollision();
});

function checkCollision() {
  // Get bounding boxes for the image and hole
  const imgRect = img.getBoundingClientRect();
  const holeRect = hole.getBoundingClientRect();

  // Check if the image is inside the hole
  if (
    imgRect.left >= holeRect.left &&
    imgRect.right <= holeRect.right &&
    imgRect.top >= holeRect.top &&
    imgRect.bottom <= holeRect.bottom
  ) {
    img.style.opacity = 0; // Make the image disappear
  } else {
    img.style.opacity = 1; // Make the image visible
  }
}
