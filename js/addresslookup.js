const form = document.querySelector('#api-form');
const tableBody = document.querySelector('#table-body');
const spinner = document.querySelector('#spinner');

// Get the value of the "addresslookup" parameter from the URL, if present
const urlParams = new URLSearchParams(window.location.search);
const addresslookupParam = urlParams.get('addresslookup');

// If the "addresslookup" parameter is present, set the value of the addresslookup input field to its value and submit the form
if (addresslookupParam) {
  const addresslookupInput = form.querySelector('#addresslookup');
  addresslookupInput.value = addresslookupParam;
  submitForm();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  submitForm();
});

function submitForm() {
  const inputAddresslookup = form.elements['addresslookup'].value;
  const apiUrl = `https://nosostats2.nosofish.xyz:49443/api/analyzeAddress/${inputAddresslookup}`;

  // Show the spinner while waiting for the API response
  spinner.style.display = 'inline-block';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Clear the existing content of the table body
      tableBody.innerHTML = '';

      // Loop through the data and add a new row for each property
      for (const [key, value] of Object.entries(data)) {
        const row = document.createElement('tr');
        const propCell = document.createElement('td');
        const valueCell = document.createElement('td');

        propCell.textContent = key;

        // Check if the value is a number with 10 or fewer digits - COMBINE WORK IN PROGRESS
        if (/^\d{1,10}$/.test(value)) {
          // If so, create a hyperlink to "https://example.com/number/{value}"
          const link = document.createElement('a');
          link.textContent = value;
          link.href = `blocklookup.html?blocknumber=${value}`;
          valueCell.appendChild(link);
        } else {
          // If not, just display the value
          valueCell.textContent = value;
        }

        row.appendChild(propCell);
        row.appendChild(valueCell);
        tableBody.appendChild(row);
      }

      // Hide the spinner once the content is rendered on the page
      spinner.style.display = 'none';
    })
    .catch(error => console.error(error));
}
