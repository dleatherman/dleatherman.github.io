// 1. Tie into the keyup event listener
// 2. Display the keycode of the key pressed

(function () {

  let counter = 0;

  // Save this for later use
  const originalHTML = document.body.innerHTML;
  let messageWrapper = document.getElementById('message');

  document.onclick = function (event) {
    event.preventDefault();
    document.body.innerHTML = originalHTML;
    messageWrapper = document.getElementById('message');
  }

  document.onkeydown = function (event) {
    // Prevents the space bar from scrolling down when pressed
    if (event.keyCode === 32) {
      event.preventDefault();
    }
  }

  document.onkeyup = function (event) {
    const keyCodePressed = event.keyCode;

    const coordinates = helpers.generateCoordinates();

    messageWrapper.innerText = keyCodePressed + ' : ' + event.key;

    if (keyCodePressed === 13) {
      // Figure out how to append a div with a
      // message into the coordinateWrapper
      const enterMessageDiv = document.createElement('div');
      enterMessageDiv.innerText = 'You pressed the enter key!';
      messageWrapper.appendChild(enterMessageDiv);

    } else if (keyCodePressed === 67) {

      // c key for circle
      const circle = document.createElement('div');
      circle.className = 'circle';
      // circle.style.left = coordinates.x + 'px;'; // same as next
      circle.style.left = `${coordinates.x}px`; // string notation
      circle.style.top = `${coordinates.y}px`;
      circle.style.backgroundColor = helpers.generateRandomColorString();
      document.body.appendChild(circle);

    } else if (keyCodePressed === 68) {

      const degreesRotation = Math.floor(Math.random() * 360);

      // i key for image
      const dog = document.createElement('img');
      dog.className = 'dog';
      dog.src = `img/doge.png`;
      dog.style.left = `${coordinates.x}px`;
      dog.style.top = `${coordinates.y}px`;
      dog.style.transform = `-webkit-rotate(${degreesRotation}deg)`;
      dog.style.transform = `rotate(${degreesRotation}deg)`;
      document.body.appendChild(dog);

    } else if (keyCodePressed === 65) {
      // a for animated
      helpers.removeClass('animated');
      document.body.classList.add('animated');

    } else if (keyCodePressed === 80) {
      const degreesRotation = Math.floor(Math.random() * 360);

      // p for prompt phrase
      const phrase = document.createElement('h3');
      phrase.className = 'phrase';
      phrase.style.left = `${coordinates.x}px`;
      phrase.style.top = `${coordinates.y}px`;
      phrase.innerText = getPhrase();
      phrase.style.color = helpers.generateRandomColorString(false);
      phrase.style.transform = `rotate(${degreesRotation}deg)`;
      document.body.appendChild(phrase);

    } else if (keyCodePressed === 32) {
      // Space bar randomly changes background color of the body
      helpers.removeClass('animated');
      document.body.style.backgroundColor = helpers.generateRandomColorString();
    }

    counter++;
    // always keeps the message on top of other elements
    messageWrapper.style.zIndex = counter;
  }

  const getPhrase = function () {
    const exclamations = ['Wow!', 'Neat!', 'Incredible!', 'JavaScript rules!', 'Bravo!', 'Fantastic!', 'Creative Computing'];
    const index = Math.floor(Math.random() * exclamations.length);
    return exclamations[index];
  }

  setInterval(function () {
    messageWrapper.style.color = helpers.generateRandomColorString(false);
  }, 1000);

  // This object contains helper functions
  const helpers = {

    removeClass: (cssClass) => {
      if (document.body.classList.contains(cssClass)) {
        document.body.classList.remove(cssClass);
      }
    },

    generateCoordinates: () => {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      return { x, y };
    },

    // helpers.generateRandomColorString()
    generateRandomColorString: (alpha = true) => {
      // random RBG values
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      // fully opaque if `false` is passed to function
      let a = 1;
      if (alpha) {
        a = Math.random();
      }

      return `rgba(${r},${g},${b},${a})`;
    }

  }

}());