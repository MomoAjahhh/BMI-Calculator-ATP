document.getElementById("btn").addEventListener("click", function() {
  var height_val = document.getElementById('height').value; // in cm
  var weight_val = document.getElementById('weight').value; // in kg

  // Convert height from cm to m
  var height_in_m = height_val / 100;

  // Calculate BMI
  var bmi = weight_val / (height_in_m * height_in_m);

  // Round BMI to 2 decimal places
  var bmio = bmi.toFixed(2);

  //
  var tb = "terlau berat";
  var nn = "normal";
  var tk = "terlalu kurus";
  var ob = "obesitas";

  if (bmio < 18.5) {
    document.getElementById("result").innerHTML = "Your BMI is terlalu kurus" + bmio;
  } else if (bmio >= 18.5 && bmio <= 24.9) {
    document.getElementById("result").innerHTML = "Your BMI is normal " + bmio;
  } else if (bmio >= 25 && bmio <= 29.9) {
    document.getElementById("result").innerHTML = "Your BMI is erlau berat" + bmio;
  } else if (bmio >= 30) {
    document.getElementById("result").innerHTML = "Your BMI is obesitas bolo" + bmio;
  }

});
