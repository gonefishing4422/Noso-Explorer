      const url = "https://nosostats.com:49443/api/mynodes";

      // Make a GET request to the API endpoint
      fetch(url)
        .then(response => response.json()) // Convert response to JSON
        .then(data => {
          // Extract the unique lines based on unique IP addresses
          const uniqueLines = [];
          const uniqueIPs = new Set();
          for (let line of data) {
            if (!uniqueIPs.has(line["3.IP"])) {
              uniqueLines.push(line);
              uniqueIPs.add(line["3.IP"]);
            }
          }

          // Build the HTML table rows
          let tableRows = '';
          for (let line of uniqueLines) {
            tableRows += `<tr><td>${line["0.Status"]}</td><td>${line["1.SN"]}</td><td>${line["2.Address"]}</td><td>${line["3.IP"]}</td><td>${line["4.Height"]}</td><td>${line["5.Wallet Version"]}</td></tr>`;
          }

          // Insert the table rows into the HTML table body
          document.getElementById('uniqueLines').innerHTML = tableRows;
        })
        .catch(error => console.error(error)); // Handle errors