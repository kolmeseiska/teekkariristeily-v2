// set the date we're counting down to
var target_date = new Date("19:00:00 Mar 3, 2016").getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown =  document.getElementById("timer");
var days_span = document.createElement("SPAN");
days_span.className = 'date-el';
countdown.appendChild(days_span);
var hours_span = document.createElement("SPAN");
hours_span.className = 'date-el';
countdown.appendChild(hours_span);
var minutes_span = document.createElement("SPAN");
minutes_span.className = 'date-el';
countdown.appendChild(minutes_span);
var secs_span = document.createElement("SPAN");
secs_span.className = 'date-el';
countdown.appendChild(secs_span);
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value.
  
    days_span.innerHTML = '<span class="date-el">' + days + '</span>' + ' päivää ';
    hours_span.innerHTML = '<span class="date-el">' + hours + '</span>' + ' tuntia ';
    minutes_span.innerHTML = '<span class="date-el">' + minutes + '</span>' + ' minuuttia ';
    secs_span.innerHTML = '<span class="date-el">' + seconds + '</span>' + ' sekunttia ';
    
  
    //countdown.innerHTML = days + "d, " + hours + "h, "
   // + minutes + "m, " + seconds + "s";  
 
}, 1000);