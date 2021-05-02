let url = new URLSearchParams(location.search);
let x = url.get('x');
// document.write(x);

const placeX = document.getElementById("placeX");
placeX.textContent = x;