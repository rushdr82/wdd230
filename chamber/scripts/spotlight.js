const spotlightEntry = document.querySelector('#spotlight');
const spotlightdirectory = 'data/members.json';

async function getSpotlightData() {
    const response = await fetch(spotlightdirectory);
    const data = await response.json();
    displaySpotlight(data.members);
}

function displaySpotlight(members) {

    // Filter the members to only include Gold or Silver level members
    const goldSilverMembers = members.filter(member => member.level === 'Gold' || member.level === 'Silver');

    // Select a random member from the filtered list
    const randomMember = goldSilverMembers[Math.floor(Math.random() * goldSilverMembers.length)];


    // Create HTML content for the spotlight member
    const memberContent =
        `<div class="business-container">
      <img class="business-logo" src="${randomMember.image}" alt="${randomMember.name}" loading="lazy">
      <div class="business-info">
        <h3>${randomMember.name}</h3>
        <p>${randomMember.address.street}, ${randomMember.address.city}, ${randomMember.address.state} ${randomMember.address.zip}</p>
        <p>${randomMember.phone}</p>
        <p><a href="${randomMember.website}" target="_blank">${randomMember.website}</a></p>
        <p><strong>Member Since:</strong> ${randomMember.founded}</p>
    </div>`;

    // Display the content in the spotlight entry
    spotlightEntry.innerHTML = memberContent;
}

getSpotlightData();
