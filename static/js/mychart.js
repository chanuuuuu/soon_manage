var config = {
    type: 'line',
    data: {
        labels: ['월','화','수','목','금','토','일'],
        datasets: [{
            label: '찬우',
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            data: [0,1,2,3,4,5,6],
            fill: false,
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: '요일별 시청자 수'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: '요일'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: '시청자수'
                }
            }]
        }
    }
};

window.onload = function() {
  var ctx = document.getElementById('canvas').getContext('2d');
  window.myLine = new Chart(ctx, config);
};

document.getElementById('chartbutton').addEventListener('click', function() {
    //색깔 랜더마이징.
    var colorName = colorNames[config.data.datasets.length % colorNames.length];
    var newColor = window.chartColors[colorName];
    var myname = streamer_list[0];
    var newDataset = {
        //라벨은 현재 dataset의 길이 번째로 설정한다.
        label: myname,
        backgroundColor: newColor,
        borderColor: newColor,
        data: [],
        fill: false
    };
    
    // 현재 길이만큼 가져온다. 
    for (var index = 0; index < config.data.labels.length; ++index) {
        newDataset.data.push(data_dict[myname][index]);
    }

    config.data.datasets.push(newDataset);
    window.myLine.update();
    window.myLine2.update();
});