window.onload = function () {
    var today = new Date();
    var dayOfWeek = today.getDay();
    // If it's Monday (1), Tuesday (2), or Wednesday (3)
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        document.getElementById('banner').style.display = 'block';
    } else { document.getElementById('banner').style.display = 'none'; }
    //console.log(dayOfWeek);
};