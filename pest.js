// Function to get query parameter by name from the URL
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get postal code and city from URL
const postalCode = getQueryParam('postalCode');
const city = getQueryParam('city');

// If city and postal code exist in the URL, update the content of the <h2> elements
if (postalCode && city) {
    document.getElementById('hb-process-city-postal').textContent = `${city}, ${postalCode}`;
    document.getElementById('hb-city-postal').textContent = `${city}, ${postalCode}`;
    document.getElementById('hb-content-city-postal').textContent = `${city}, ${postalCode}`;
} else {
    // Handle the case where postalCode or city are not provided in the URL (optional)
    console.log('City or Postal code missing in the URL.');
}
