(function () {

   const APIKEY = '64qH9OEmqEJNZRg5WIIp3eI1qfgUYT6G',
         weatherWrapper = document.querySelector('#weather__wrapper');

   // Specify what happens when someone searches
   // Make the API call, e is the form submit object
   const getLocationInfo = e => {

      let locationKey;

      if (e) {
         e.preventDefault();
      }

      fetch(
         `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKEY}&q=Brooklyn%2C%20NY`, {
            mode: 'cors'
         })
         .then(response => {
            if (!response.ok) {
               throw new Error(response.statusText || 'Unknown Error');
            } else {
               return response.json();
            }
         })
         .then(data => {
            if (data.length > 0) {
               return data[0].Key;
            }
         })
         .then(key => {
            getWeatherInfoForLocation(key);
         })
         .catch(error => console.error(error))
   }

   const getWeatherInfoForLocation = loc => {

      let formattedData = '';

      fetch(
         `http://dataservice.accuweather.com/currentconditions/v1/${loc}?apikey=${APIKEY}&details=true`, {
            mode: 'cors'
         })
         .then(response => {
            if (!response.ok) {
               throw new Error(response.statusText || 'Unknown Error');
            } else {
               return response.json();
            }
         })
         .then(data => {
            let speed = data[0].Wind.Speed.Imperial.Value;
            if (data) {
               formattedData += `${speed} mph`;
               document.body.classList += 'animated';
               document.body.setAttribute('style', `-webkit-animation-duration: ${speed}s`);
               document.body.setAttribute('style', `-moz-animation-duration: ${speed}s`);
               document.body.setAttribute('style', `animation-duration: ${speed}s`);
            } else {
               formattedData += 'No data!';
            }
            weatherWrapper.innerHTML = formattedData;
         })
         .catch(error => console.error(error))
   }

   getLocationInfo();

}());