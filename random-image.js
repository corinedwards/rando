document.addEventListener("DOMContentLoaded", function() {
  const randomNumber = Math.floor(Math.random() * 10); // 0 to 9
  const imgElement = document.getElementById('random-image');
  if (imgElement) {
    imgElement.src = `https://raw.githubusercontent.com/corinedwards/rando/main/img0${randomNumber}.png`;
  }
});
