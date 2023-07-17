// script.js

// Get all the gallery images
const galleryImages = document.querySelectorAll('#gallery img');

// Add click event listeners to each image
galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    // Create a lightbox overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // Create the enlarged image
    const enlargedImage = document.createElement('img');
    enlargedImage.src = image.src;
    enlargedImage.alt = image.alt;

    // Append the enlarged image to the overlay
    overlay.appendChild(enlargedImage);

    // Append the overlay to the body
    document.body.appendChild(overlay);

    // Remove the overlay when clicked
    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
});
