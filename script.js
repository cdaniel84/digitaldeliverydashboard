google.load('visualization', '1', {
    'packages': ['corechart']
});
google.load('visualization', '1', {
    'packages': ['treemap']
});


google.setOnLoadCallback(drawChart);

function drawChart() {

                        // Create the data table.        
        var data = google.visualization.arrayToDataTable([
          ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
          ['Projects',    null,                 0,                               0],
          ['Prototype',   'Projects',             0,                               0],
          ['POC',    'Projects',             0,                               0],
          ['Discovery',      'Projects',             0,                               0],
          ['On Hold', 'Projects',             0,                               0],
          ['Pilot',    'Projects',             0,                               0],
          ['Prototype 1',    'Prototype',            11,                              5],
          ['Prototype 2',       'Prototype',            52,                              10],
          ['POC 1',    'POC',             42,                              100],
          ['POC 2',   'POC',             31,                              90],
          ['Discovery 1',     'Discovery',               36,                              55],
          ['Discovery 2',     'Discovery',               20,                              50],
          ['Discovery 3',     'Discovery',               40,                              63],
          ['Pilot 1',     'Pilot',             21,                              50],
          ['On Hold 1',     'On Hold',             21,                              5],          
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
            // Create the data table.
          var data2 = google.visualization.arrayToDataTable([
            ['Status', 'Percent'],
            ['Sumbitted',     60],
            ['In Review',      40],
  //          ['Descoped',  5],
          ]);

          var options2 = {
            legend: {position: 'bottom'},
            backgroundColor: '#F2F2F2',
            title: 'WileyPLUS',
            titlePosition: 'none',
            pieHole: 0.4,
            pieSliceTextStyle: {color: 'black', fontName: 'Helvetica', fontSize: 16}, 
            fontSize: 14,
            slices: {
            0: { color: '#66CC66' },
            1: { color: '#FFCC33' },
            2: { color: '#CC3300'}}
          }; 

            var chart2 = new google.visualization.PieChart(document.getElementById('donutchart'));
            chart2.draw(data2, options2);   
        
}