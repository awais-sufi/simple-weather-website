// NOTE: For production, move this to a backend server to protect your API key
const apiKey = "3126c774c9a21f096c49e688ca8b0903";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  try {
    // Show loading state
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "none";
    document.querySelector(".loading").style.display = "block";

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (!response.ok) {
      if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error p").textContent = "Invalid city name";
      } else {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error p").textContent =
          "Unable to fetch weather data. Please try again.";
      }
      return;
    }

    const data = await response.json();

    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    // Convert m/s to km/h (OpenWeather returns wind speed in m/s)
    document.querySelector(".wind").textContent =
      Math.round(data.wind.speed * 3.6) + " km/h";

    // Update weather icon based on condition
    const weatherCondition = data.weather[0].main;
    const iconMap = {
      Clouds: "images/clouds.png",
      Clear: "images/clear.png",
      Rain: "images/rain.png",
      Drizzle: "images/drizzle.png",
      Mist: "images/mist.png",
      Snow: "images/snow.png",
      Thunderstorm: "images/rain.png",
      Fog: "images/mist.png",
      Haze: "images/mist.png",
      Dust: "images/mist.png",
      Sand: "images/mist.png",
      Ash: "images/mist.png",
      Squall: "images/wind.png",
      Tornado: "images/wind.png",
    };

    weatherIcon.src = iconMap[weatherCondition] || "images/clear.png";
    weatherIcon.alt = weatherCondition + " weather icon";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  } catch (error) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".error p").textContent =
      "Network error. Please check your connection.";
  } finally {
    // Hide loading state
    document.querySelector(".loading").style.display = "none";
  }
}

// Search on button click
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// Search on Enter key press
searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
