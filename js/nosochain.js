fetch('https://nosostats.com:49443/api/last143V2')
	.then(response => response.json())
	.then(data => {
		const tableBody = document.querySelector('#nosochain tbody');

		data.forEach(item => {
			const row = document.createElement('tr');
			row.innerHTML = `
				<td class="priority-1"><a href="blocklookup.html?blocknumber=${item[0]}">${item[0]}</a></td>
				<td class="priority-2">${item[1]}</td>
				<td class="priority-3">${item[2]}</td>
				<td class="priority-4">${item[3]}</td>
				<td class="priority-5">${item[4]}</td>
				<td class="priority-6">${item[5]}</td>
				<td class="priority-7">${item[6]}</td>
				<td class="priority-8">${item[7]}</td>
				<td class="priority-8">${item[8]}</td>
				<td class="priority-8">${item[9]}</td>
				<td class="priority-8">${item[10]}</td>
			`;
			tableBody.appendChild(row);
		});
	})
	.catch(error => console.error(error));

// Update the table every 10 seconds
setInterval(() => {
    fetch('https://nosostats.com:49443/api/last143V2')
	.then(response => response.json())
	.then(data => {
		const tableBody = document.querySelector('#nosochain tbody');

		// Clear existing rows
		tableBody.innerHTML = '';

		data.forEach(item => {
			const row = document.createElement('tr');
			row.innerHTML = `
				<td class="priority-1"><a href="blocklookup.html?blocknumber=${item[0]}">${item[0]}</a></td>
				<td class="priority-2">${item[1]}</td>
				<td class="priority-3">${item[2]}</td>
				<td class="priority-4">${item[3]}</td>
				<td class="priority-5">${item[4]}</td>
				<td class="priority-6">${item[5]}</td>
				<td class="priority-7">${item[6]}</td>
				<td class="priority-8">${item[7]}</td>
				<td class="priority-8">${item[8]}</td>
				<td class="priority-8">${item[9]}</td>
				<td class="priority-8">${item[10]}</td>
			`;
			tableBody.appendChild(row);
		});
	})
	.catch(error => console.error(error));
}, 10000);
