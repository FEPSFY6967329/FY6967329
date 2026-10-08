google.charts.load("current", { "packages" : ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Task", "Hours per day"],
        ["Work", 8],
        ["Sleep", 8],
        ["Eat", 2],
        ["Study", 4],
        ["Exercise", 2]
    ]);

    var options = {
        title: "My Daily Activities"
    };

    var chart = new google.visualization.PieChart(document.getElementById("chart_div"));
    chart.draw(data, options);
}