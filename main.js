function computeHeatIndex() {

    let temp = parseFloat(document.getElementById("temp").value);
    let humidity = parseFloat(document.getElementById("humid").value);

    let HI = temp + (0.33 * humidity) - 4;
    let status = "";

    if (HI <= 27) {
        status = "Comfortable / Cool";
    } 
    else if (HI <= 32) {
        status = "Warm";
    } 
    else if (HI <= 37) {
        status = "Hot";
    } 
    else if (HI <= 41) {
        status = "Very Hot / Caution";
    } 
    else {
        status = "Extreme Heat / Danger";
    }

    alert("Heat Index: " + HI.toFixed(1) + "°C\nStatus: " + status);
}

// Instructions toggle
function showInstructions() {
    document.getElementById("note").innerHTML =
        "Enter temperature (°C) and humidity (%), then click CHECK to see the heat index and status.";
}
