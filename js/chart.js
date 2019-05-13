google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawLineChart1);
function drawLineChart1() {
    var options = {
        //title: 'Budget and Revenue in tourism',
        legend: { position: 'bottom' },
        hAxis: {title: 'Year'},
        vAxis: {title: 'Millions Baht (Budget), Ten Thousands Millions Baht (Revenue)'},
        colors: ['#f9cceb', '#ccebf9']   
    };

    var chart = new google.visualization.LineChart(document.getElementById('linechart1'));

    $.get("./data/linechart1.csv", function(csvString) {
        var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
        var data = google.visualization.arrayToDataTable(arrayData);
        chart.draw(data, options);
    });
}