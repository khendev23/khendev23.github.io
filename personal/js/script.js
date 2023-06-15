const box1 = document.querySelector('.box1');
const images = box1.querySelectorAll('.image-container img');

images.forEach(function(image) {
  image.addEventListener('mouseover', function() {
    images.forEach(function(img) {
      img.style.opacity = '0';
    });
    image.style.opacity = '1';
  });
});