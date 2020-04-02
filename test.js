const rp = require('request-promise');
const $ = require('cheerio');

const zawody = ["Programista", "Sprzedawca", "Spawacz", "Nauczyciel", "Kierowca"]
const lokalizacje = ["%c5%9bl%c4%85skie;r,13", "mazowieckie;r,7", "lubelskie;r,3", "%c5%9bwi%c4%99tokrzyskie;r,12", "zachodniopomorskie;r,16", "warmi%c5%84sko-mazurskie%3br%2c14", "podlaskie;r,11", "kujawsko-pomorskie;r,2", "wielkopolskie;r,15", "lubuskie;r,4", "%c5%82%c3%b3dzkie%3br%2c5", "dolno%c5%9bl%c4%85skie%3br%2c1", "opolskie;r,8", "ma%c5%82opolskie%3br%2c6", "podkarpackie;r,10", "pomorskie;r,9"]



console.log(lokalizacje.length)
const url = 'https://www.pracuj.pl/praca/polska;ct,1';


const seeJobs =  () => { 

  zawody.forEach( zawod => {

    lokalizacje.forEach( lokalizacja => {
  
      const url = `https://www.pracuj.pl/praca/${zawod};kw/${lokalizacja}`;
      
      try {
         rp(url)
        .then( function(html){
          //success!
          const oferty = $('.results-header__offer-count-text-number', html).text();
          console.log(`W ${lokalizacja} potrzenych jest ${oferty} pracowników, w zawodzie: ${zawod}`)
        
        })
      } catch (error) {
        
      }

    
    
    });
    
  });

  
}

seeJobs()


