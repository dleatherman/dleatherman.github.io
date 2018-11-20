
// Runs after all content is loaded on the page
(function (inView) {


  // .on('exit', el => {
  //   el.style.opacity = 0.5;
  // });

}(inView));

// does the same thing as the above ^^
window.onload = function () {

  const doSomething = function () {
    console.log('did something');
  };

  inView('#section-2 h1')
    .on('enter', doSomething)

};