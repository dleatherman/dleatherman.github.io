const filters = document.getElementById('filters').getElementsByTagName('a');
// #filters a { //styles }
const images = document.getElementById('images').getElementsByTagName('li');
// #images li { //styles }

// iterates over all the filters, and adds an event listener for a click
// when clicked, runs the function filterImages(data-filter)
for (let i = 0; i < filters.length; i++) {
   const filter = filters[i];
   filter.addEventListener('click', function(event) {
      event.preventDefault();
      // console.log('click', event.target.getAttribute('data-filter'));
      filterImages(event.target.getAttribute('data-filter'));
   });
};

function filterImages(filterClass) {
   // testing connection between click and filterImages
   // console.log('filterImages', filterClass);
   for (let i = 0; i < images.length; i++) {
      // hide all images that don't have the filter class
      // ! point is a negative of what follows
      if (!images[i].classList.contains(filterClass)) {
         images[i].classList.add('hide');
      } else {
         images[i].classList.remove('hide');
      }
   }
};