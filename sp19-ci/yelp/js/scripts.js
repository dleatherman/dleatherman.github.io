(function () {

   const APIKEY = 'FEuK4rFmlXBBurWrQGQAxdd5nQJTJb_tYwBWvaEB-KO-MWu3oPkP0kskdaSqF1YN1VjpHp64qTZDP_MnNy8yHMyTRLDKwIlO7j1Vk2DQeWYFWHOJMIQZb9KSdBvDXHYx',
      clientId = 'MqXedadiqpI-Mz2S0VzlnA',
      proxy = 'https://cors-anywhere.herokuapp.com/';

   const getYelpInfo = (event) => {

      if (event) {
         event.preventDefault();
      }

      fetch(`${proxy}https://api.yelp.com/v3/categories/hotdogs&apikey=${APIKEY}`,{
         headers: {
           'Authorization': 'Bearer ' + APIKEY,
         }
      })
         .then(response => response.json())
         .catch(error => console.error(error));
   };
   
   getYelpInfo();

}());