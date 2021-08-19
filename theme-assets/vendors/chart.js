const data = {
    labels: [
      'Team',
      'Masternodes',
      'Project Reserve',
      'Crowd Sale',
      'Burn'
    ],
    datasets: [
        {
            label: 'My First Dataset',
            data: [18, 5, 25, 40, 12],
            backgroundColor: [
                'rgb(229, 57, 53)',
                'rgb(142, 36, 170)',
                'rgb(57, 73, 171)',
                'rgb(67, 160, 71)',
                'rgb(253, 216, 53)'
            ],
            hoverOffset: 4
        }
    ]
  };
  
const config = {
    type: 'pie',
    data: data,
  };

let myChart = new Chart(document.getElementById('myChart'), config);