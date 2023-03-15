   // Fetch data from the API
    fetch('https://nosostats2.nosofish.xyz:49443/api/newCoinsDistribution')
      .then(response => response.json())
      .then(data => {
        // Extract relevant data from response
        const mnsInNoso = data.mnsInNoso;
        const posInNoso = data.posInNoso;
        const powInNoso = data.powInNoso;

        // Calculate percentages
        const totalBlockReward = 50;
        const mnsPercentage = (mnsInNoso / totalBlockReward) * 100;
        const posPercentage = (posInNoso / totalBlockReward) * 100;
        const powPercentage = (powInNoso / totalBlockReward) * 100;

        // Create pie chart using Chart.js library
        const ctx = document.getElementById('popcoins').getContext('2d');
        const popcoinsChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Projectfunds', 'Masternodes', 'PoPW'],
            datasets: [{
              data: [posPercentage, mnsPercentage, powPercentage],
              backgroundColor: [
                '#fbe04d',
                '#e1c945',
                '#c8b33d'
              ]
            }]
          },
          options: {
            legend: {
              display: false
            }
          }
        });
      })
      .catch(error => console.error(error));