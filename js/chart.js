google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawLineChart1);
google.charts.setOnLoadCallback(drawLineChart2);
google.charts.setOnLoadCallback(drawScatter);
google.charts.setOnLoadCallback(drawAreaChart1);

function drawLineChart1() {
    var options = {
        //title: 'Budget and Revenue in tourism',
        legend: { position: 'bottom' },
        hAxis: {title: 'Year'},
        vAxis: {title: 'Million Baht (Budget), Ten Thousand Million Baht (Revenue)'},
        colors: ['#f9cceb', '#ccebf9']   
    };

    var chart = new google.visualization.LineChart(document.getElementById('linechart1'));

    $.get("./data/linechart1.csv", function(csvString) {
        var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
        var data = google.visualization.arrayToDataTable(arrayData);
        chart.draw(data, options);
    });
}

function drawLineChart2() {
    var options = {
        legend: { position: 'bottom' },
        hAxis: {title: 'Year'},
        vAxis: {title: 'Million Baht'},
        colors: ['#ccebf9']   
    };

    var chart = new google.visualization.LineChart(document.getElementById('linechart2'));

    $.get("./data/linechart2.csv", function(csvString) {
        var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
        var data = google.visualization.arrayToDataTable(arrayData);
        chart.draw(data, options);
    });

    /*var data = google.visualization.arrayToDataTable([
        ['year', 'revenue'],
        ["2012-Q1",29898.48],
        ["2012-Q2",21810.84],
        ["2012-Q3",15925.68],
        ["2012-Q4",32136.65],
    ]);
    chart.draw(data, options);*/
}

function drawScatter() {
    var options = {
        legend: 'none',
        hAxis: {title: 'Revenue (Million Baht)'},
        vAxis: {title: 'Visitors'},
        colors: ['#ccebf9'],
        trendlines: {
            0: {
              type: 'linear',
              color: '#f9cceb',
            }
        }   
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('scatter'));

    $.get("./data/scatter.csv", function(csvString) {
        var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
        var data = google.visualization.arrayToDataTable(arrayData);
        chart.draw(data, options);
    });
}

function drawAreaChart1() {
    var options = {
        isStacked: true,
        legend: { position: 'bottom' },
        hAxis: {title: 'Year'},
        vAxis: {title: 'Million Baht'},
        colors: ['#f9cceb', '#ccebf9']   
    };

    var chart = new google.visualization.AreaChart(document.getElementById('area1'));

    $.get("./data/area1.csv", function(csvString) {
        var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
        var data = google.visualization.arrayToDataTable(arrayData);
        chart.draw(data, options);
    });
}
//test
