google.load('visualization', '1', {
    'packages': ['corechart']
});
google.load('visualization', '1', {
    'packages': ['treemap']
});
google.setOnLoadCallback(drawChart);
function drawChart() {
	// PROJECTS - TREEMAP    
        var data = google.visualization.arrayToDataTable([ 
          ['ProjectType', 'Parent', 'Volume (size)', 'Status (color)'],
          ['Projects', null, 0, 0],
          ['Prototype',   'Projects', 0,0],
          ['POC', 'Projects', 0, 0],
          ['Discovery', 'Projects', 0, 0],
          ['On Hold', 'Projects', 0, 0],
          ['Pilot', 'Projects', 0, 0],
          ['Prototype 1', 'Prototype', 11, 5],
          ['Prototype 2', 'Prototype', 52, 10],
          ['POC 1', 'POC', 42, 100],
          ['POC 2', 'POC', 31, 90],
          ['Discovery 1', 'Discovery', 36, 55],
          ['Discovery 2', 'Discovery', 20, 50],
          ['Discovery 3', 'Discovery', 40, 63],
          ['Pilot 1', 'Pilot', 21, 50],
          ['On Hold 1', 'On Hold', 21, 5],          
        ]);
            // Instantiate and draw our chart, passing in some options.
        tree = new google.visualization.TreeMap(document.getElementById('chart_div'));
        tree.draw(data, {
          minColor: '#3399CC',
          midColor: '#FFCC33',
          maxColor: '#66CC66',
          headerHeight: 40,
          headerColor: '#f2f2f2',          
          titleTextStyle: {color: '#3399CC', fontName: 'Helvetica', fontSize: 18},
          fontColor: 'black',
          fontFamily: 'Helvetica',
          fontSize: 18
        });  
            // PROJECTS & IDEAS - DONUT CHART
          var data2 = google.visualization.arrayToDataTable([
            ['Status', 'none'],
            ['Submitted',     10],
            ['In Review',      6],
          ]);
          var options2 = {
            legend: {position: 'bottom'},
            backgroundColor: '#F2F2F2',
            title: 'WileyPLUS',
            titlePosition: 'none',
            pieHole: 0.4,
            'chartArea': {'width': '100%', 'height': '80%'},
            pieSliceTextStyle: {color: 'black', fontName: 'Helvetica', fontSize: 20, bold: 'true'},
            pieSliceText: 'value',
            fontSize: 14,
            slices: {
            0: { color: '#66CC66' },
            1: { color: '#FFCC33' },
            2: { color: '#CC3300'}}
          }; 
            var chart2 = new google.visualization.PieChart(document.getElementById('donutchart'));
            chart2.draw(data2, options2);   
  
  
              // DUMMIES DONUT CHART 1 FOR PRODUCT UPDATES
          var data3 = google.visualization.arrayToDataTable([
            ['Status', 'Value'],
            ['Delayed',     33],
            ['On Track',      33],
            ['Descoped',  33],
          ]);
          var options3 = {
            legend: {position: 'none'},
            backgroundColor: '#F2F2F2',
            title: 'WileyPLUS',
            titlePosition: 'none',
            pieHole: 0.45,
            'chartArea': {'width': '100%', 'height': '80%'},
            pieSliceTextStyle: {color: 'black', fontName: 'Helvetica', fontSize: 1, bold: 'true'},
            pieSliceText: 'none',
            fontSize: 14,
            slices: {
            0: { color: 'darkgrey' },
            1: { color: 'darkgrey' },
            2: { color: 'darkgrey'}}
          }; 
            var chart3 = new google.visualization.PieChart(document.getElementById('donutchart2'));
            chart3.draw(data3, options3);
  
                // PRODUCT UPDATES - WEL DONUT CHART 2
          var data4 = google.visualization.arrayToDataTable([
            ['Status', 'none'],
            ['Delayed',     35],
            ['On Track',      60],
            ['Descoped',  5],
          ]);
          var options4 = {
            legend: {position: 'none'},
            backgroundColor: '#F2F2F2',
            title: 'WileyPLUS',
            titlePosition: 'none',
            pieHole: 0.45,
            'chartArea': {'width': '100%', 'height': '80%'},
            pieSliceTextStyle: {color: 'black', fontName: 'Helvetica', fontSize: 16, bold: 'true'},
            pieSliceText: 'none',
            fontSize: 14,
            slices: {
            0: { color: '#FFCC33' },
            1: { color: '#66CC66' },
            2: { color: '#CC3300'}}
          }; 
            var chart4 = new google.visualization.PieChart(document.getElementById('donutchart3'));
            chart4.draw(data4, options4);
  
        //PRODUCT UPDATES - WILEYPLUS DONUT CHART 3
          var data5 = google.visualization.arrayToDataTable([
            ['Status', 'none'],
            ['Delayed',     20],
            ['On Track',      75],
            ['Descoped',  5],
          ]);
          var options5 = {
            legend: {position: 'none'},
            backgroundColor: '#F2F2F2',
            title: 'WileyPLUS',
            titlePosition: 'none',
            pieHole: 0.45,
            'chartArea': {'width': '100%', 'height': '80%'},
            pieSliceTextStyle: {color: 'black', fontName: 'Helvetica', fontSize: 16, bold: 'true'},
            pieSliceText: 'none',
            fontSize: 14,
            slices: {
            0: { color: '#FFCC33' },
            1: { color: '#66CC66' },
            2: { color: '#CC3300'}}
          }; 
            var chart5 = new google.visualization.PieChart(document.getElementById('donutchart4'));
            chart5.draw(data5, options5);
  
                // PRODUCT UPDATES - WPLS DONUT CHART 4
          var data6 = google.visualization.arrayToDataTable([
            ['Status', 'none'],
            ['Delayed',     20],
            ['On Track',      80],
            ['Descoped',  0],
          ]);
          var options6 = {
            legend: {position: 'none'},
            backgroundColor: '#F2F2F2', 
            title: 'WileyPLUS',
            titlePosition: 'none',
            pieHole: 0.45,
            'chartArea': {'width': '100%', 'height': '80%'},
            pieSliceTextStyle: {color: 'black', fontName: 'Helvetica', fontSize: 16, bold: 'true'},
            pieSliceText: 'none',
            fontSize: 14,
            slices: {
            0: { color: '#FFCC33' },
            1: { color: '#66CC66' },
            2: { color: '#CC3300'}}
          }; 
            var chart6 = new google.visualization.PieChart(document.getElementById('donutchart5'));
            chart6.draw(data6, options6);
        
}