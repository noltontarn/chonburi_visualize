google.charts.load('current', {
    'packages':['corechart','geochart', 'controls', 'bar'], 
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawBarChart);
google.charts.setOnLoadCallback(drawLineChart1);
google.charts.setOnLoadCallback(drawLineChart2);
google.charts.setOnLoadCallback(drawScatter);
google.charts.setOnLoadCallback(drawAreaChart1);
google.charts.setOnLoadCallback(drawAreaChart2);
google.charts.setOnLoadCallback(drawRegionsMap);

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function drawBarChart() {
    var options = {
        legend: { position: 'bottom' },
        hAxis: {title: 'Million Baht'},
        vAxis: {title: 'Year', format: ''},
        colors: ['#f9cceb', '#ccebf9'],
        bars: 'horizontal'
    };

    var chart = new google.charts.Bar(document.getElementById('bar'));

    $.get("./data/bar.csv", function(csvString) {
        var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
        var data = google.visualization.arrayToDataTable(arrayData);
        chart.draw(data, google.charts.Bar.convertOptions(options));
    });
}

function drawLineChart1() {
    var options = {
        //title: 'Budget and Revenue in tourism',
        legend: { position: 'bottom' },
        hAxis: {title: 'Year'},
        vAxis: {title: 'Million Baht (Budget), Thousand Million Baht (Revenue)'},
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

function drawAreaChart2() {
    var options = {
        isStacked: true,
        legend: { position: 'bottom' },
        hAxis: {title: 'Year'},
        vAxis: {title: 'Visitors'},
        colors: ['#f9cceb', '#ccebf9']   
    };

    var chart = new google.visualization.AreaChart(document.getElementById('area2'));

    $.get("./data/area2.csv", function(csvString) {
        var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
        var data = google.visualization.arrayToDataTable(arrayData);
        chart.draw(data, options);
    });
}

function drawRegionsMap() {
    
    var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_div'));

    var yearSelector = new google.visualization.ControlWrapper({
        controlType: 'CategoryFilter',
        containerId: 'filter_div',
        options: {
            filterColumnLabel: 'year',
            ui: {
                allowTyping: false,
                allowMultiple: false,
                allowNone: false
            }
        }
    });

    var mapChart = new google.visualization.ChartWrapper({
        chartType: 'GeoChart',
        containerId: 'regions_div',
        options: {
            colorAxis: {colors: ['#d1d4d6', '#ccebf9']}
        }
    });
    
    dashboard.bind(yearSelector, mapChart);

    $.get("./data/geo.csv", function(csvString) {
        var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
        var data = google.visualization.arrayToDataTable(arrayData);
        dashboard.draw(data);
    });
}