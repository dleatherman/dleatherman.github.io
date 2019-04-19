(function () {

   const APIKEY = '64qH9OEmqEJNZRg5WIIp3eI1qfgUYT6G';

   // Specify what happens when someone searches
   // Make the API call, e is the form submit object
   const getWeatherInfo = e => {

      if (e) {
         e.preventDefault();
      }

      // Add in the value from the form
      fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey${APIKEY}&q=New York`)
         // convert it to readable data
         .then(response => response.json())
         // do something with the data
         .then(data => {
            // set up a variable we can add more things into it and eventually add the value in the page
            if (data) {
               console.log(data);
            }
         })
         .catch(error => console.error(error))
   }

   getWeatherInfo();

}());