(function () {

   const APIKEY = 'a41a282508e00d0a4751ef1fbde67511',
      proxy = 'https://cors-anywhere.herokuapp.com/',
      currencyForm = document.querySelector('#fixer__form'),
      fromCurrency = document.querySelector('#currency__from'),
      toCurrency = document.querySelector('#currency__to'),
      fromAmount = document.querySelector('#from__amount');

   const getFixerRates = (event) => {

      if (event) {
         event.preventDefault();
      }

      fetch(`http://data.fixer.io/api/latest?access_key=${APIKEY}`)
         .then(response => response.json())
         .then(data => {
            const exchangeRates = data.rates;

            // Convert to Euros by dividing value / fromCurrency rate
            // Convert to currency by multiplying Euro value by toCurrency rate

            // console.log(exchangeRates[fromCurrency.value]);
            // console.log(exchangeRates[toCurrency.value]);
            console.log(fromCurrency.value, toCurrency.value, fromAmount.value);
         })
         .catch(error => console.error(error));
   };

   if (fixer__form) {
      fixer__form.addEventListener('submit', getFixerRates);
   }

}());