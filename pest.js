// Function to get query parameter by name from the URL
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}
// Function to get the pest name from the URL path
function getPestFromPath() {
  const pathSegments = window.location.pathname.split("/");
  // Assuming the pest name is always the last segment before the query string
  return pathSegments[pathSegments.length - 2]; // Second to last part of the path
}
// Function to convert ae → ä, ue → ü, oe → ö
function restoreGermanCharacters(str) {
  return str
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü")
    .replace(/oe/g, "ö")
    .replace(/Ae/g, "Ä")
    .replace(/Ue/g, "Ü")
    .replace(/Oe/g, "Ö");
}
// Get postal code and city from URL
const postalCode = getQueryParam("postalCode");
const city = getQueryParam("city");
let pest = restoreGermanCharacters(getPestFromPath()); // Extract pest name from the URL path
pest = pest.charAt(0).toUpperCase() + pest.slice(1);

// If city and postal code exist in the URL, update the content of the <h2> elements
if (postalCode && city) {
  document.getElementById(
    "hb-process-city-postal"
  ).textContent = `in ${postalCode}, ${city}`;
  document.getElementById(
    "hb-city-postal"
  ).textContent = `in ${postalCode}, ${city}`;
  document.getElementById(
    "hb-content-city-postal"
  ).textContent = `Ihr Kammerjäger in ${postalCode} ${city} gegen ${pest}`;
} else {
  // Handle the case where postalCode or city are not provided in the URL (optional)
  document.getElementById("hansbasel-content-container").style.display = "none";
}
