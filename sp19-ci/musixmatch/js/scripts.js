(function () {

   const APIKEY = '53f978ba680e6656fa6ae8444295da63',
      proxy = 'https://cors-anywhere.herokuapp.com/',
      artistForm = document.querySelector('#artist__form'),
      artistSelect = document.querySelector('#artist__select'),
      albumListWrapper = document.querySelector('#album__list');

   const getArtistInfo = (event) => {

      event.preventDefault();

      if(!artistSelect.value) {
         window.alert('Please select an artist');
         return;
      }

      fetch(`${proxy}http://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=${artistSelect.value}&s_release_date=desc&g_album_name=1&apikey=${APIKEY}`)
         .then(response => response.json())
         .then(data => {
            if (!data) {
               throw new Error(data.message.header.statusText || 'Unknown Error');
            }
            return data.message.body.album_list;
         })
         .then(albums => {
            let albumList = '<ul>';
            for (let i = 0; i < albums.length; i++) {
               albumList += `<li>${albums[i].album.album_name}</li>`;
            }
            albumList += '</ul>';
            albumListWrapper.innerHTML = albumList;
         })
         .catch(error => console.error(error));
   };

   if(artistForm) {
      artistForm.addEventListener('submit', getArtistInfo);
   }

}());