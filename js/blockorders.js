fetch('https://nosostats.com:49443/api/24hOrdersAmounts')
  .then(response => response.json())
  .then(data => {
    const ctx = document.getElementById('blockorders').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(item => item[0]), // block height as x-axis labels
        datasets: [{
          label: 'Orders',
          backgroundColor: '#fbe04d',
          data: data.map(item => item[1]), // ordersonblock values as y-axis data
        }]
      },
      options: {
        scales: {
          xAxes: [{
            ticks: {
              display: false, // set display to false to hide x-axis labels
            },
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: ''
            }
          }]
        }
      }
    });
  })
  .catch(error => console.error(error));
