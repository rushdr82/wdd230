// returns the year (four digits)
var currentTime = new Date();
var year = currentTime.getFullYear();
document.getElementById("year").innerHTML = year;

// returns the last modified date (default format)
var lastModified = new Date(document.lastModified); // Convert to Date object if needed
document.getElementById("lastModified").innerHTML = lastModified;

// returns the timestamp for the form (default format)
var timestamp = Date.now(); // Corrected to get the current timestamp