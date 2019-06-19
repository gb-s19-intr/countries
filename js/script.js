/*******************************
              DATA
*******************************/

// Original dataset should not be modified
const countries = [
  {name: `Canada`, ppl: 35000000, flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/125px-Flag_of_Canada_%28Pantone%29.svg.png`, wiki: `Canada`}, 
  {name: `Kenya`, ppl: 50000000, flag: `.png`, wiki: ``}, 
  {name: `Australia`, ppl: 150000000, flag: `.png`, wiki: ``}, 
  {name: `Ukraine`, ppl: 30000000, flag: `.png`, wiki: ``}, 
  {name: `Japan`, ppl: 32000000, flag: `.png`, wiki: ``}, 
  {name: `England`, ppl: 90000000, flag: `.png`, wiki: ``},
];

// "push" will adding an extra value to the given array
countries.push ( {name: `Brazil`, ppl: 500000000, flag: `.png`, wiki: ``} );



/*******************************
        HELPER FUNCTIONS
*******************************/

/* getCountryAsHtmlString(): When passed an Object represeting a country, it returns back a formatted HTML view of that data.
Arguments: val = a Country (Object)
Returns: formatted HTML (String) */
const getCountryAsHtmlString = (val) => { 
  return `
    <li>
      <h2>${val.name} <img src="${val.flag}"></h2>
      <div>Population: ${val.ppl}</div>
      <a href="https://en.wikipedia.org/wiki/${val.wiki}">Learn mode</a>
    </li>
  `;
}

// Takes any Array of countries and prints it to the document
const printCountriesToList = (someCountries) => {
  document.getElementById(`allcountries`).innerHTML = someCountries.map( getCountryAsHtmlString ).join( `` );
  // Ideally:
  //  Return true if all was successful
  //  Return false if our map didn't go as planned
}



/*******************************
            FILTERS
*******************************/

const showAllCountriesOver35k = (event) => {
  const bigCountries = countries.filter( country => country.ppl >= 35000000 );
  printCountriesToList( bigCountries );
}

const showAllCountries = (event) => {
  printCountriesToList(countries);
}



/*******************************
    EVENT LISTENERS (ACTIONS)
*******************************/

// ALL LISTENERS (Interface actions)
window.addEventListener(`load`, showAllCountries);
document.getElementById(`btnAll`).addEventListener(`click`, showAllCountries);
document.getElementById(`btn35`).addEventListener(`click`, showAllCountriesOver35k);












/* Take the full set of *countries* (an Array defined above), then...
"filter" will return a NEW array of values from the given Array that match the filter
"map" will return a NEW array of values from the given Array, mapped to a function (HTML)
"join" will return a String of all the HTML Strings (Countries) combined */


/*
// Given an array of countries, return a string of those countries as HTML
const getAllCountriesAsHtml = (ar) => {
  return ar.map( getCountryAsHtmlString ).join(``);
}

// ALL THREE STEPS INTO ONE
const $countries = document.getElementById('allcountries');

// Full set
//$countries.innerHTML = getAllCountriesAsHtml( countries );

// Countries that start with capital U
//$countries.innerHTML = getAllCountriesAsHtml( countries.filter(val => val.name[0] == `U`) );

// Countries with population over 40k
//$countries.innerHTML = getAllCountriesAsHtml( countries.filter(val => val.ppl > 40000000) )

// The first 2 countries
//$countries.innerHTML = getAllCountriesAsHtml( countries.slice(0, 2) );

// Sort descending (make a copy with map first!!)
$countries.innerHTML = getAllCountriesAsHtml( countries.map(val => val).sort((a,b) => b.ppl - a.ppl) );
*/