    const ctx = document.getElementById('popcoins').getContext('2d');
    const data = {
      labels: [
        'Master Nodes',
        'Project Funds',
        'Proof of Participation on Work'
      ],
      datasets: [{
        label: 'Coins Distribution',
        data: [21.5, 5, 23.5],
        backgroundColor: ['#e1c945', '#64591e', '#af9c35'],
        borderColor: 'black',
        borderWidth: 2
      }]
    };
    const options = {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              var label = context.label || '';

              if (label) {
                label += ': ';
              }
              if (context.parsed && context.parsed > 0) {
                label += context.parsed + '%';
              }
              return label;
            }
          }
        },
        datalabels: {
          display: false
        }
      },
      maintainAspectRatio: false,
      responsive: true,
      layout: {
        padding: 5
      }
    };
    const popcoins = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: options
    });