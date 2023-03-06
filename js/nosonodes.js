      const url = "https://nosostats.com:49443/api/nodeListS";
// Make a GET request to the API endpoint
fetch(url)
  .then(response => response.json()) // Convert response to JSON
  .then(data => {
    // Extract the unique lines based on unique IP addresses
    const uniqueLines = [];
    const uniqueIPs = new Set();
    for (let line of data.data) {
      if (!uniqueIPs.has(line.nodeIp)) {
        uniqueLines.push(line);
        uniqueIPs.add(line.nodeIp);
      }
    }

    // Build the HTML table rows
    let tableRows = '';
    tableRows += `<tr><th>Node Address</th><th>Node IP Address</th><th>Node Listening Port</th><th>Country</th><th>Region</th><th>Node Uptime</th><th>Latitude</th><th>Longitude</th></tr>`;
    for (let line of uniqueLines) {
      tableRows += `<tr><td><a href="http://nosostats.ddns.net:49001/api/addressbasic/${line.nodeAddress}" target=”_blank”>${line.nodeAddress}</a></td><td>${line.nodePort}</td><td>${line.nodeIp}</td><td>${line.countryAbbreviation}</td><td>${line.city}</td><td>${line.continuouslyActive}</td><td>${line.latitude}</td><td>${line.longitude}</td></tr>`;
    }

    // Insert the table rows into the HTML table body
    document.getElementById('uniqueLines').innerHTML = tableRows;
  })
  .catch(error => console.error(error)); // Handle errors  
  

    tableRows += `<tr><th>City</th><th>Continuously Active</th><th>Country Abbreviation</th><th>Latitude</th><th>Longitude</th><th>Node Address</th><th>Node IP</th><th>Node Port</th></tr>`;
    for (let line of uniqueLines) {
      tableRows += `<tr><td><a href="http://nosostats.ddns.net:49001/api/addressbasic/${line.nodeAddress}" target=”_blank”>${line.nodeAddress}</a></td><td>${line.nodePort}</td><td>${line.nodeIp}</td><td>${line.countryAbbreviation}</td><td>${line.city}</td><td>${line.continuouslyActive}</td><td>${line.latitude}</td><td>${line.longitude}</td></tr>`;
    }
    
   
