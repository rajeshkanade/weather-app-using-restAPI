

// api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&appid=



// api.openweathermap.org/data/2.5/forecast/daily?lat=18.5204&lon=18.5204&appid=1b68f58002f0e4048af301a0d7240961



let FindWeather = document.getElementById("FindWeather");

let city_name = document.getElementById("city_name");
let country_name = document.getElementById("country");
let tempreture = document.getElementById("tempreture");
let humadity = document.getElementById("humadity");
let windSpeed = document.getElementById("windSpeed");
let windDir = document.getElementById("windDir");
let day = document.getElementById("day");
let dateMonth = document.getElementById("dateMonth");

let SecondDay = document.getElementById("SecondDay");
let thirdDay = document.getElementById("thirdDay");
let fourthDay = document.getElementById("fourthDay");
let fifthDay = document.getElementById("fifthDay");
let sixthDay = document.getElementById("sixthDay");
let seventhDay = document.getElementById("seventhDay");

let MinsecondTemp = document.getElementById("minsecondTemp");
let MinthirdTemp = document.getElementById("minthirdTemp");
let MinfourthTemp = document.getElementById("minfourthTemp");
let MinfifthTemp = document.getElementById("minfifthTemp");
let MinsixthTemp = document.getElementById("minsixthTemp");
let MinseventhTemp = document.getElementById("minseventhTemp");

let firstWeather = document.getElementById("firstWeather");
let secondWeather = document.getElementById("secondWeather");
let thirdWeather = document.getElementById("thirdWeather");
let fourthWeather = document.getElementById("fourthWeather");
let fifthWeather = document.getElementById("fifthWeather");
let sixthWeather = document.getElementById("sixthWeather");
let seventhWeather = document.getElementById("seventhWeather");

let noInput = document.getElementById("noInput");
let inputMessage = document.getElementById("inputMessage")
let progress = document.getElementById("progress");
document.getElementById("closeAlert").addEventListener('click',()=>{
  noInput.style.visibility = "hidden";
  progress.classList.remove("progress-bar")
})


function getWindDirection(degree) {
  if (degree > 337.5) return "N";
  if (degree > 292.5) return "NW";
  if (degree > 247.5) return "West";
  if (degree > 202.5) return "SW";
  if (degree > 157.5) return "S";
  if (degree > 122.5) return "SE";
  if (degree > 67.5) return "E";
  if (degree > 22.5) return "NE";
  return "N";
}

function getDay(date) {
  let dateObj = new Date(date);
  let day = dateObj.toLocaleDateString("en-US", { weekday: "long" });
  return day;
}

function getDateMonth(date) {
  let dateObj = new Date(date);
  let day = dateObj.getDate();
  let month = dateObj.toLocaleString("en-US", { month: "long" });

  return `${day} ${month}`;
}

function getWeatherDetails(weather) {
//   console.log(weather);

  const weatherImages = {
    Sunny: "./images/icon-1.svg",
    "Overcast clouds": "./images/icon-2.svg",
    "Scattered clouds": "./images/icon-3.svg",
    "Clear Sky": "./images/icon-1.svg",
    "Few clouds": "./images/icon-5.svg",
    "Heavy rain": "./images/icon-14.svg",
    "Broken clouds": "./images/icon-3.svg",
    "Thunderstorm with rain": "./images/icon-11.svg",
    "Thunderstorm with heavy rain": "./images/icon-11.svg",
    "Thunderstorm": "./images/icon-12.svg",
    "Moderate rain" : "./images/icon-13.svg",
  };
  return `<img src='${weatherImages[weather]}' alt=''>`;
}



const setWeather = async (city) =>{

 

    let api = ""
    myCity = String(city).trim();
    if(myCity.toLowerCase() == "bhenda" || myCity.toLowerCase() == "kukana" || myCity.toLowerCase() == "newasa")
            {
             api = `https://api.weatherbit.io/v2.0/forecast/daily?city=ahmednagar&lang=en&key=f874a7e1533d44e695fc8662ee317468`;
            }
        else{
             api = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&lang=en&key=f874a7e1533d44e695fc8662ee317468`;
        }

  try {
    let response = await fetch(api);
    let data = await response.json();
    // console.log(data);
    let objData = data;
    console.log(objData);

    myCity.toLowerCase() == "bhenda" || myCity.toLowerCase() == "kukana" || myCity.toLowerCase() == "newasa" ? city_name.textContent = city : city_name.textContent = objData.city_name;
    
    country_name.textContent = objData.country_code;

    tempreture.innerHTML = `${objData.data[0].temp}<sup>o</sup>C`;
    humadity.textContent = `${objData.data[0].rh}%`;
    windSpeed.textContent = `${objData.data[0].wind_spd}km/hr`;

    let dirNo = objData.data[0].wind_dir;
    let direction = getWindDirection(dirNo);
    windDir.textContent = direction;

    let dateString = objData.data[0].datetime;
    let dayString = getDay(dateString);
    day.textContent = dayString;

    let dateAndMonth = getDateMonth(dateString);
    dateMonth.innerText = dateAndMonth;

    let alldays = objData.data.map((val, index) => {
      return val.datetime;
    });
    let days = alldays.map((val) => {
      return getDay(val);
    });

    // console.log(days)
    SecondDay.textContent = days[1];
    thirdDay.textContent = days[2];
    fourthDay.textContent = days[3];
    fifthDay.textContent = days[4];
    sixthDay.textContent = days[5];
    seventhDay.textContent = days[6];

    // let day2 = getDay()

    let getAllTemp = objData.data.map((val) => {
      return val.temp;
    });
    // console.log(getAllTemp)
    secondTemp.innerHTML = `${getAllTemp[1]}<sup>o</sup>C`;
    thirdTemp.innerHTML = `${getAllTemp[2]}<sup>o</sup>C`;
    fourthTemp.innerHTML = `${getAllTemp[3]}<sup>o</sup>C`;
    fifthTemp.innerHTML = `${getAllTemp[4]}<sup>o</sup>C`;
    sixthTemp.innerHTML = `${getAllTemp[5]}<sup>o</sup>C`;
    seventhTemp.innerHTML = `${getAllTemp[6]}<sup>o</sup>C`;

    let getAllMinTemp = objData.data.map((val) => {
      return val.min_temp;
    });
    // console.log(getAllMinTemp);

    MinsecondTemp.innerHTML = `${getAllMinTemp[1]}<sup>o</sup>`;
    MinthirdTemp.innerHTML = `${getAllMinTemp[2]}<sup>o</sup>`;
    MinfourthTemp.innerHTML = `${getAllMinTemp[3]}<sup>o</sup>`;
    MinfifthTemp.innerHTML = `${getAllMinTemp[4]}<sup>o</sup>`;
    MinsixthTemp.innerHTML = `${getAllMinTemp[5]}<sup>o</sup>`;
    MinseventhTemp.innerHTML = `${getAllMinTemp[6]}<sup>o</sup>`;

    let getAllWeather = objData.data.map((val) => {
      return val.weather.description;
    });

    // console.log(getAllWeather);

    let weather1 = getAllWeather[0];
    let weather2 = getAllWeather[1];
    let weather3 = getAllWeather[2];
    let weather4 = getAllWeather[3];
    let weather5 = getAllWeather[4];
    let weather6 = getAllWeather[5];
    let weather7 = getAllWeather[6];
    // console.log(weather6)
    // console.log(weather7)
    console.log(weather1)

    firstWeather.innerHTML = getWeatherDetails(weather1) 
    secondWeather.innerHTML = getWeatherDetails(weather2) 
    thirdWeather.innerHTML = getWeatherDetails(weather3) 
    fourthWeather.innerHTML = getWeatherDetails(weather4) 
    fifthWeather.innerHTML = getWeatherDetails(weather5) 
    sixthWeather.innerHTML = getWeatherDetails(weather6) 
    seventhWeather.innerHTML = getWeatherDetails(weather7) 

  } catch (e) {
    console.log("result not found...!", e);
    noInput.style.visibility = "visible";
    let message = "Please Enter Valid  City Name ";
    inputMessage.innerHTML =  message ;
    progress.classList.add("progress-bar")
    setTimeout(hideMessage , 3000);

  }

}





document.addEventListener("DOMContentLoaded", async () => {
    let cityName = document.getElementById("cityName");
    cityName.value = ""
  let city = "pune";
  setWeather(city);
});


noInput.style.visibility = "hidden";

const hideMessage = () => {
  progress.classList.remove("progress-bar")
  noInput.style.visibility = "hidden";
}



FindWeather.addEventListener("click", async (event)=>{
    event.preventDefault();
    
     let cityName = document.getElementById("cityName").value;
     if(cityName == ""){
      noInput.style.visibility = "visible";
      let message = "Please Enter the City Name ";
      inputMessage.innerHTML =  message ;
      progress.classList.add("progress-bar")
      setTimeout(hideMessage , 3000);
     }
     else{
       await setWeather(cityName)
       }
      cityName = document.getElementById("cityName");

    cityName.value = "";
})
// const checkWeather = () =>{
//     let city_name = document.getElementById("city_name")
// }

// let check = document.getElementById("check");

// check.addEventListener("click", checkWeather)
