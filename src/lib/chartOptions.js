export const optionsEuro = {
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