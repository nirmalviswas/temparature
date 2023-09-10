function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let result;

    if (unit === "celsius") {
        const fahrenheit = (temperatureInput * 9/5) + 32;
        const kelvin = temperatureInput + 273.15;
        result = `${temperatureInput}°C is equal to ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K`;
    } else if (unit === "fahrenheit") {
        const celsius = (temperatureInput - 32) * 5/9;
        const kelvin = (temperatureInput - 32) * 5/9 + 273.15;
        result = `${temperatureInput}°F is equal to ${celsius.toFixed(2)}°C and ${kelvin.toFixed(2)}K`;
    } else if (unit === "kelvin") {
        const celsius = temperatureInput - 273.15;
        const fahrenheit = (temperatureInput - 273.15) * 9/5 + 32;
        result = `${temperatureInput}K is equal to ${celsius.toFixed(2)}°C and ${fahrenheit.toFixed(2)}°F`;
    } else {
        result = "Invalid unit selected";
    }

    document.getElementById("convertedTemperature").textContent = result;
}
