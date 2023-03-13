        fetch('https://nosostats2.nosofish.xyz:49443/api/qMnOverLast144')
            .then(response => response.json())
            .then(data => {
                const labels = data.map(entry => entry[0]);
                const values = data.map(entry => entry[1]);

                const ctx = document.getElementById('mn24').getContext('2d');
                const mn24 = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'qMn Over Last 144 Blocks',
                            data: values,
                            backgroundColor: 'transparent',
                            borderColor: '#fbe04d',
                            borderWidth: 2,
                            pointRadius: 0
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        },
                        backgroundColor: '#222222'
                    }
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });