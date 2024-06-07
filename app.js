var currentYear = new Date().getFullYear();

 document.getElementById('copyrightYear').textContent = currentYear;



 var slider = document.getElementById("myRange");
 var output = document.getElementById("demo");
 
 // Parse the initial value to a float
 output.innerHTML = "$" + parseFloat(slider.value).toFixed(2);
 
 slider.oninput = function() {
   // Parse the current slider value to a float
   var value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #3563E9,' + value + '%, #fff ' + value + '%, rgba(144, 163, 191, 1) 10%)'
   output.innerHTML = "$" + parseFloat(this.value).toFixed(2);
 }

