
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
      el.style.backgroundColor = 'blue';
    })
    .on('exit', el => {
      el.style.backgroundColor = 'lemonchiffon';
    })

};