/!* ARRAY METHODS */

//Question 1 : Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all) :


//! a. Get all the countries from Asia continent /region using Filter function :

//Step 1 : Create a XHR Object
var Request = new XMLHttpRequest();

//Step 2 : Opening a Connection to the Server
Request.open("GET","https://restcountries.com/v3.1/all",true)

//Step 3 : Initiating a bridge to the Server / Sending a Request
Request.send();

//Step 4 : Server Response
Request.onload = function(){
    var data = Request.response;
    //console.log(data);
    var Result = JSON.parse(data);
    //console.log(Result);

    var Asia_Reg = Result.filter((country) => country.region === "Asia");
    Asia_Reg.map((country) => console.log(country.name));
}

/*-----------------------------------------------------------------------------*/

//! b. Get all the countries with a population of less than 2 lakhs using Filter function : 


var Request1 = new XMLHttpRequest();
Request1.open("GET","https://restcountries.com/v3.1/all",true)
Request1.send();
Request1.onload = function(){
    var data1 = Request1.response;
    //console.log(data1);
    var Result1 = JSON.parse(data1);
    //console.log(Result1);

    var population_Res = Result1.filter((x)=>x.population<200000);
    population_Res.map((ele)=>console.log(ele.name.common));
}

/*-----------------------------------------------------------------------------*/

//! c. Print the following details name, capital, flag, using forEach function :


var Request2 = new XMLHttpRequest();
Request2.open("GET","https://restcountries.com/v3.1/all",true)
Request2.send();
Request2.onload = function(){
    var data2 = Request2.response;
    //console.log(data2);
    var Result2 = JSON.parse(data2);
    //console.log(Result2);

    var Details = Result2.forEach((element) =>console.log(`Name : ${element.name.common}, Capital : ${element.capital}, Flag : ${element.flag}`));
}

/*-----------------------------------------------------------------------------*/

//! d. Print the total population of countries using reduce function :


var Request3 = new XMLHttpRequest();
Request3.open("GET","https://restcountries.com/v3.1/all",true)
Request3.send();
Request3.onload = function(){
    var data3 = Request3.response;
    //console.log(data3);
    var Result3 = JSON.parse(data3);
    //console.log(Result3);

    var TotalPopulation = Result3.reduce((acc,cv)=>{
        return acc+cv.population
    },0)
    console.log(TotalPopulation);
}
    

/*-----------------------------------------------------------------------------*/

//! e. Print the country that uses US dollars as currency.


var Request4 = new XMLHttpRequest();
Request4.open("GET","https://restcountries.com/v3.1/all",true)
Request4.send();
Request4.onload = function(){
    var data4 = Request4.response;
    //console.log(data4);
    var Result4 = JSON.parse(data4);
    //console.log(Result4);

    const countriesWithUSD = Result4.filter(country =>
        country.currencies && country.currencies.USD
      ).map(country => country.name.common);
    
      if (countriesWithUSD.length > 0) {
        console.log("Countries that use US dollars as currency: " + countriesWithUSD.join(", "));
      } else {
        console.log("No countries found that use US dollars as currency.");
      }
}