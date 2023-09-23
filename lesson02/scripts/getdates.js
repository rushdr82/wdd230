let options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
document.getElementById('lastModified').textContent = new Date().toLocaleDateString('en-US', options);

options = { year: 'numeric' };
document.getElementById('currentYear').textContent = new Date().toLocaleDateString('en-US', options);
