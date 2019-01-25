// 1. Tie into the keyup event listener
// 2. Display the keycode of the key pressed

let coordinateWrapper = document.getElementById('coordinates');

document.onkeyup = function (event) {
  const keyCodePressed = event.keyCode;
  document.getElementById('message').innerHTML = keyCodePressed;
  if (keyCodePressed === 13) {
    // Generate random between 0 and whatever Math.random is multiplied by
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    console.log(x, y);
    const coordinates = 'x: ' + x + ', y: ' + y;
    coordinateWrapper.innerHTML = coordinates;
    // Figure out how to append a div with a
    // message into the coordinateWrapper
    coordinateWrapper.appendChild(document.createElement('div'));
  }
}

