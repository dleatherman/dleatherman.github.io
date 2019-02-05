(function (inView) {


  inView('.absolute__window')
    .on('enter', function (el) {
      el.classList += ' active';
      console.log(el);
    });

})(inView);
