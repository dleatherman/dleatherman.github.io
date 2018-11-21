
// Runs after all content is loaded on the page
// (function (inView) {

//   const doSomething = function () {
//     console.log('did something');
//   };

//   inView('#section-2')
//     .on('enter', doSomething)
//   // .on('enter', el => {
//   //   el.style.backgroundColor = 'blue';
//   // })

// })(inView);

// does the same thing as the above ^^
window.onload = function () {

  const doSomething = function () {
    console.log('did something');
  };

  inView('#section-2')
    .on('enter', el => {

      el.className = 'active';

      // c key for circle
      const circle = document.createElement('div');
      circle.className = 'circle';
      circle.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
      circle.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
      // Random animation duration between 0-10s
      circle.style.animationDuration = Math.floor(Math.random() * 10) + 's';
      el.appendChild(circle);

      el.style.backgroundColor = 'blue';
    })
    .on('exit', el => {
      // alert('GONE');
      el.className = '';
      el.style.backgroundColor = 'lemonchiffon';
    })

  // Global offset for all inview elements
  inView.offset({
    bottom: 100
  })

  inView('#section-3 p')
    .on('enter', el => {
      el.className = 'active blue';
    })
    .on('exit', el => {
      el.className = '';
    })

};