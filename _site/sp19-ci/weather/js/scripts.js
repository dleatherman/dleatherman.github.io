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
         `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${APIKEY}&q=11215`, {
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
         `http://dataservice.accuweather.com/currentconditions/v1/${loc}?apikey=${APIKEY}`, {
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
            if (data) {
               formattedData += `${data[0].WeatherText}`;
            } else {
               formattedData += 'No data!';
            }
            weatherWrapper.innerHTML = formattedData;
         })
         .catch(error => console.error(error))
   }

   getLocationInfo();

}());