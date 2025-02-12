document.addEventListener("DOMContentLoaded", function() {
  console.log("Random image script is running!");

  const randomNumber = Math.floor(Math.random() * 10); // 0 to 9
  console.log(`Setting image to: img0${randomNumber}.png`);

  const imgElement = document.getElementById('random-image');

  if (imgElement) {
    imgElement.src = `https://raw.githubusercontent.com/corinedwards/rando/main/img0${randomNumber}.png`;
  }
});



// keep spare path dopwn here
// imgElement.src = `https://raw.githubusercontent.com/corinedwards/rando/main/img0${randomNumber}.png`;
