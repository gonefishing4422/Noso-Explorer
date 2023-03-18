fetch('https://nosostats.com:49443/api/nodeListS')
	.then(response => response.json())
	.then(data => {
		// Extract nodeIp and continuouslyActive values and sort in descending order
		const nodes = data.data.map(node => ({ nodeIp: node.nodeIp, continuouslyActive: node.continuouslyΑctive }));
		nodes.sort((a, b) => b.continuouslyActive - a.continuouslyActive);

		// Select top 10 nodes
		const topNodes = nodes.slice(0, 10);

		// Create chart
		const ctx = document.getElementById('topnodesup').getContext('2d');
		const chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: topNodes.map((node, index) => node.nodeIp),
				datasets: [{
					label: 'Uptime',
					data: topNodes.map(node => node.continuouslyActive),
					backgroundColor: 'rgba(54, 162, 235, 0.5)',
					borderColor: 'rgba(54, 162, 235, 1)',
					borderWidth: 1
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: true,
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true,
							fontSize: 5
						}
					}],
					xAxes: [{
						ticks: {
							fontSize: 5
						}
					}]
				},
				legend: {
					display: false
				},
				title: {
					display: false,
					text: 'Top 15 Continuously Active Nodes'
				}
			}
		});

		// Set minimum width to 300px and use 100% of the available height and width of its div
		const chartDiv = document.getElementById('topnodesup');
		chartDiv.style.minWidth = '300px';
		chartDiv.style.maxWidth = '100%';
		chartDiv.style.height = '200px';
		chartDiv.style.width = '300px';
	})
	.catch(error => console.error(error));
