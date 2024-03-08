const baseURL = "https://rushdr82.github.io/wdd230/";
const linksURL = "https://rushdr82.github.io/wdd230/data/links.json";
let unorderedList = document.querySelector("#activity-links");
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    //displayLinks(data);
}
getLinks();