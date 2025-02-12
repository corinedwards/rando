document.addEventListener("DOMContentLoaded", function() {
  const randomNumber = Math.floor(Math.random() * 10); // 0 to 9
  const imgElement = document.getElementById('random-image');
  if (imgElement) {
    imgElement.src = `img0${randomNumber}.png`;
  }
});