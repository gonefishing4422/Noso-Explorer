      const orderId = window.location.search.split('=')[1];
      if (orderId) {
        fetch(`https://nosostats2.nosofish.xyz:49443/api/orderFinder/${orderId}`)
          .then(response => response.json())
          .then(data => {
            const order = data.data.order;
            const orderProperties = Object.keys(order);
            const table = document.querySelector('#order-table');
            table.innerHTML = ''; // clear table
            orderProperties.forEach(prop => {
              const row = table.insertRow();
              const headerCell = row.insertCell();
              const valueCell = row.insertCell();
              headerCell.textContent = prop;

		if (prop === 'receiver') {
		  const link = document.createElement('a');
		  link.textContent = order[prop];
		  link.href = `addresslookup.html?addresslookup=${order[prop]}`;
		  valueCell.appendChild(link);
		} else {
		  valueCell.textContent = order[prop];
		}
            });
          })
          .catch(error => console.error(error));
      }