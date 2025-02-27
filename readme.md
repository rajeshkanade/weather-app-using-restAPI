/**
 * This script handles the weather application functionality.
 * It fetches weather data from the Weatherbit API and updates the UI accordingly.
 * 
 * API:
 * - URL: `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&lang=en&key=${key}`
 * 
 * Elements:
 * - FindWeather: Button to trigger weather search.
 * - city_name: Element to display the city name.
 * - country_name: Element to display the country code.
 * - tempreture: Element to display the temperature.
 * - humadity: Element to display the humidity.
 * - windSpeed: Element to display the wind speed.
 * - windDir: Element to display the wind direction.
 * - day: Element to display the current day.
 * - dateMonth: Element to display the current date and month.
 * - SecondDay, thirdDay, fourthDay, fifthDay, sixthDay, seventhDay: Elements to display the days of the week.
 * - MinsecondTemp, MinthirdTemp, MinfourthTemp, MinfifthTemp, MinsixthTemp, MinseventhTemp: Elements to display the minimum temperatures for the week.
 * - firstWeather, secondWeather, thirdWeather, fourthWeather, fifthWeather, sixthWeather, seventhWeather: Elements to display the weather icons for the week.
 * - noInput: Element to display an alert when no input is provided.
 * - inputMessage: Element to display the alert message.
 * - progress: Element to display the progress bar.
 * 
 * Functions:
 * - getWindDirection(degree): Returns the wind direction based on the degree.
 * - getDay(date): Returns the day of the week for a given date.
 * - getDateMonth(date): Returns the date and month for a given date.
 * - getWeatherDetails(weather): Returns the HTML for the weather icon based on the weather description.
 * - setWeather(city): Fetches weather data for the given city and updates the UI.
 * - hideMessage(): Hides the alert message and removes the progress bar.
 * 
 * Event Listeners:
 * - DOMContentLoaded: Sets the default city to "Pune" and fetches its weather data.
 * - FindWeather click: Fetches weather data for the city entered by the user.
 * - closeAlert click: Hides the alert message.
 */