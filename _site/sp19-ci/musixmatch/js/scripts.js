(function () {

   const APIKEY = '53f978ba680e6656fa6ae8444295da63';

   window.onload = () => {
      fetch(`https://api.musixmatch.com/ws/1.1/?apiKey=${APIKEY}&artist.search?q_artist=khalid&page_size=5`, {
         mode: 'cors'
      })
         .then(response => {
            console.log(response);
         })
         .catch(error => console.error(error));
   }


}());