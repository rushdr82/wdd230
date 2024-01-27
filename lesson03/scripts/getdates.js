// returns the year (four digits)
var currentTime = new Date();
var year = currentTime.getFullYear();
document.getElementById("year").innerHTML = year;

// returns the last modified date (default format)
var lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;