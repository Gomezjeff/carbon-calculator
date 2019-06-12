export const optionsEuro = {
    tooltips: {
        mode: 'label',
        callbacks: {
            label: function (tooltipItem, data) {
                let label = data.datasets[tooltipItem.datasetIndex].label;
                let value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                return [`${label}: €${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`];
            },
        },
    },
    maintainAspectRatio: false,
    legend: {
        labels: {
            usePointStyle: true,
        },
    },
    scales: {
        yAxes: [{
            ticks: {
                callback: function(value, index, values) {
                    value = value.toString();
                    value = value.split(/(?=(?:...)*$)/);
                    value = value.join(',');
                    return '€' + value
                }
            }
        }]
    }
}

export const options = {
    tooltips: {
        mode: 'label',
        callbacks: {
            label: function (tooltipItem, data) {
                let label = data.datasets[tooltipItem.datasetIndex].label;
                let value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                return [`${label}: ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} tons CO\u2082`];
            },
        },
    },
    maintainAspectRatio: false,
    legend: {
        labels: {
            usePointStyle: true,
        },
    },
    scales: {
        yAxes: [{
            ticks: {
                callback: function(value, index, values) {
                    value = value.toString();
                    value = value.split(/(?=(?:...)*$)/);
                    value = value.join(',');
                    return value
                }
            },
            stacked: true
        }]
    }
}