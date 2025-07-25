# 🌤️ Weather App

A simple and responsive weather app built using **HTML**, **CSS**, and **JavaScript**, powered by the **OpenWeather API** to display real-time weather data for any city.

---

## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ View temperature, weather conditions, humidity, wind speed
- 📷 Weather icons based on live conditions
- ❌ Error handling for invalid cities or network issues
- 🔁 Option to refresh data
- 📱 Fully responsive design for all screen sizes

---

## 🛠️ Technologies Used

- **HTML5** – Markup structure
- **CSS3** – Styling and layout
- **JavaScript (ES6)** – Logic, API requests, and DOM manipulation
- **[OpenWeather API](https://openweathermap.org/api)** – Real-time weather data

---

## 🧠 How It Works

1. User enters a city in the input field.
2. JavaScript makes a `fetch()` call to OpenWeather API.
3. The response is parsed and displayed on the screen.
4. Displays temperature, humidity, weather condition, wind speed, and an icon.
5. Handles invalid city names or fetch errors gracefully.

---

## 🔑 Add Your API Key

1. Sign up at [OpenWeather](https://openweathermap.org/api)  
2. Go to your dashboard and copy your **API key**  
3. Open `script.js` and replace the placeholder key:

```javascript
const apiKey = "your_real_api_key_here";


