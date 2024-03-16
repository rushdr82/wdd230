const memberEntry = document.querySelector('#members');
const directory = 'data/members.json';
const businessHighlight = document.querySelector('#business-highlight');

function displayBusinessHighlight(members) {
    const htmlContent = `
        <div class="business">
            <h2>${members.name}</h2>
            <img src="${members.image}" alt="${members.name} Logo">
            <p><strong>Address:</strong> ${members.address.street}, ${members.address.city}, ${members.address.state}, ${members.address.zip}</p>
            <p><strong>Phone:</strong> ${members.phone}</p>
            <p><strong>Website:</strong> <a href="http://${members.website}" target="_blank">${members.website}</a></p>
            <p><strong>Founded:</strong> ${data.founded}</p>
        </div>
    `;
    businessHighlight.innerHTML = htmlContent;
}

// Assuming 'memberEntry' contains the JSON data for the business
displayBusinessHighlight(memberEntry);