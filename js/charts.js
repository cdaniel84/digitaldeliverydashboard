//load in packages for tree, line, and donut charts
google.load('visualization', '1', {
    'packages': ['corechart','treemap', 'line']
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
            ['Status', 'Value'],
            ['Sumbitted',     10],
            ['In Review',      6],
          ]);

          var options2 = {
            legend: {position: 'bottom'},
            backgroundColor: '#F2F2F2',
            title: 'ideas_donut',
            titlePosition: 'none',
            pieHole: 0.5,
            'chartArea': {'width': '100%', 'height': '80%'},
            pieSliceTextStyle: {color: 'black', fontName: 'Helvetica', fontSize: 20, bold: 'true'},
            pieSliceText: 'value',
            fontSize: 14,
            slices: {
            0: { color: '#66CC66' },
            1: { color: '#FFCC33' },
            2: { color: '#CC3300'}}
          }; 

            var ideas = new google.visualization.PieChart(document.getElementById('ideas'));
            ideas.draw(data2, options2);   
  
  
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
            title: 'Dummies',
            titlePosition: 'none',
            pieHole: 0.55,
            'chartArea': {'width': '100%', 'height': '80%'},
            pieSliceTextStyle: {color: 'black', fontName: 'Helvetica', fontSize: 1, bold: 'true'},
            pieSliceText: 'value',
            fontSize: 14,
            slices: {
            0: { color: 'darkgrey' },
            1: { color: 'darkgrey' },
            2: { color: 'darkgrey'}}
          }; 

            var dummies = new google.visualization.PieChart(document.getElementById('dummies'));
            dummies.draw(data3, options3);
  
                // PRODUCT UPDATES - WEL DONUT CHART 1
          var data4 = google.visualization.arrayToDataTable([
            ['Status', 'Value'],
            ['Delayed',     35],
            ['On Track',      60],
            ['Descoped',  5],
          ]);

          var options4 = {
            legend: {position: 'none'},
            backgroundColor: '#F2F2F2',
            title: 'WEL',
            titlePosition: 'none',
            pieHole: 0.55,
            'chartArea': {'width': '100%', 'height': '80%'},
            pieSliceTextStyle: {color: 'black', fontName: 'Helvetica', fontSize: 16, bold: 'true'},
            pieSliceText: 'value',
            fontSize: 14,
            slices: {
            0: { color: '#FFCC33' },
            1: { color: '#66CC66' },
            2: { color: '#CC3300'}}
          }; 

            var wel = new google.visualization.PieChart(document.getElementById('wel'));
            wel.draw(data4, options4);
  
        //PRODUCT UPDATES - WILEYPLUS DONUT CHART 3
          var data5 = google.visualization.arrayToDataTable([
            ['Status', 'Value'],
            ['Delayed',     20],
            ['On Track',      75],
            ['Descoped',  5],
          ]);

          var options5 = {
            legend: {position: 'none'},
            backgroundColor: '#F2F2F2',
            title: 'WileyPLUS',
            titlePosition: 'none',
            pieHole: 0.55,
            'chartArea': {'width': '100%', 'height': '80%'},
            pieSliceTextStyle: {color: 'black', fontName: 'Helvetica', fontSize: 16, bold: 'true'},
            pieSliceText: 'value',
            fontSize: 14,
            slices: {
            0: { color: '#FFCC33' },
            1: { color: '#66CC66' },
            2: { color: '#CC3300'}}
          }; 

            var wileyplus = new google.visualization.PieChart(document.getElementById('wileyplus'));
            wileyplus.draw(data5, options5);
  
                // PRODUCT UPDATES - WPLS DONUT CHART 4
          var data6 = google.visualization.arrayToDataTable([
            ['Status', 'Value'],
            ['Delayed',     20],
            ['On Track',      80],
            ['Descoped',  0],
          ]);

          var options6 = {
            legend: {position: 'none'},
            backgroundColor: '#F2F2F2', 
            title: 'WPLS',
            titlePosition: 'none',
            pieHole: 0.55,
            'chartArea': {'width': '100%', 'height': '80%'},
            pieSliceTextStyle: {color: 'black', fontName: 'Helvetica', fontSize: 16, bold: 'true'},
            pieSliceText: 'value',
            fontSize: 14,
            slices: {
            0: { color: '#FFCC33' },
            1: { color: '#66CC66' },
            2: { color: '#CC3300'}}
          }; 

            var wpls = new google.visualization.PieChart(document.getElementById('wpls'));
            wpls.draw(data6, options6);

  //create first line chart - DUMMIES
      var data7 = new google.visualization.DataTable();
      data7.addColumn('number', 'X');
      data7.addColumn('number', 'year 2017');
      data7.addColumn('number', 'year 2016');

      data7.addRows([
        [0,  100, 210],
        [.5, 150, 185],
        [1,  200, 160],
        [1.5,  250,   130],
        [2,  210, 210],
        [2.5,  180, 300],
        [3,   180, 400],
        [3.5,   , 400],
        [4,  , 400],
      ]);

      var options7 = {
       colors:['#66CC66','#3399CC'],      
        backgroundColor: '#F2F2F2',
        legend: {position: 'none'},
        hAxis: {
          ticks: [{v:1, f:'Q1'}, {v:2, f:'Q2'}, {v:3, f:'Q3'}, {v:4, f:'Q4'}],  
          title: '',
          gridlines: {color: 'none'},
          baselineColor: '#3399CC'
        },
        vAxis: {
          ticks: [0,100,200,300,400, 500],           
          title: '',
          gridlines: {color: 'none'},
          baselineColor: '#3399CC'
        },
        lineWidth: 5

      };

      var line = new google.visualization.LineChart(document.getElementById('line'));
      line.draw(data7, options7);
  
  
 //create 2nd line chart - WEL
        var data8 = new google.visualization.DataTable();
      data8.addColumn('number', 'X');
      data8.addColumn('number', 'year 2017');
      data8.addColumn('number', 'year 2016');

      data8.addRows([
        [0,  100, 210],
        [.5, 150, 185],
        [1,  200, 160],
        [1.5,  250,   130],
        [2,  210, 210],
        [2.5,  180, 300],
        [3,   180, 400],
        [3.5,   , 400],
        [4,  , 400],
      ]);

      var options8 = {
       colors:['#66CC66','#3399CC'],      
        backgroundColor: '#F2F2F2',
        legend: {position: 'none'},
        hAxis: {
          ticks: [{v:1, f:'Q1'}, {v:2, f:'Q2'}, {v:3, f:'Q3'}, {v:4, f:'Q4'}],  
          title: '',
          gridlines: {color: 'none'},
          baselineColor: '#3399CC'
        },
        vAxis: {
          ticks: [0,100,200,300,400, 500],           
          title: '',
          gridlines: {color: 'none'},
          baselineColor: '#3399CC'
        },
        lineWidth: 5

      };

      var line2 = new google.visualization.LineChart(document.getElementById('line2'));
      line2.draw(data8, options8);
  
  
  //create 3rd line chart - WILEYPLUS
        var data9 = new google.visualization.DataTable();
      data9.addColumn('number', 'X');
      data9.addColumn('number', 'year 2017');
      data9.addColumn('number', 'year 2016');

      data9.addRows([
        [0,  100, 210],
        [.5, 150, 185],
        [1,  200, 160],
        [1.5,  250,   130],
        [2,  210, 210],
        [2.5,  180, 300],
        [3,   180, 400],
        [3.5,   , 400],
        [4,  , 400],
      ]);

      var options9 = {
       colors:['#66CC66','#3399CC'],      
        backgroundColor: '#F2F2F2',
        legend: {position: 'none'},
        hAxis: {
          ticks: [{v:1, f:'Q1'}, {v:2, f:'Q2'}, {v:3, f:'Q3'}, {v:4, f:'Q4'}],  
          title: '',
          gridlines: {color: 'none'},
          baselineColor: '#3399CC'
        },
        vAxis: {
          ticks: [0,100,200,300,400, 500],           
          title: '',
          gridlines: {color: 'none'},
          baselineColor: '#3399CC'
        },
        lineWidth: 5

      };

      var line3 = new google.visualization.LineChart(document.getElementById('line3'));
      line3.draw(data9, options9);
  
  
  //create 4th chart - WPLS
        var data10 = new google.visualization.DataTable();
      data10.addColumn('number', 'X');
      data10.addColumn('number', 'year 2017');
      data10.addColumn('number', 'year 2016');

      data10.addRows([
        [0,  100, 210],
        [.5, 150, 185],
        [1,  200, 160],
        [1.5,  250,   130],
        [2,  210, 210],
        [2.5,  180, 300],
        [3,   180, 400],
        [3.5,   , 400],
        [4,  , 400],
      ]);

      var options10 = {
       colors:['#66CC66','#3399CC'],      
        backgroundColor: '#F2F2F2',
        legend: {position: 'bottom'},
        hAxis: {
          ticks: [{v:1, f:'Q1'}, {v:2, f:'Q2'}, {v:3, f:'Q3'}, {v:4, f:'Q4'}],  
          title: '',
          gridlines: {color: 'none'},
          baselineColor: '#3399CC'
        },
        vAxis: {
          ticks: [0,100,200,300,400, 500],           
          title: '',
          gridlines: {color: 'none'},
          baselineColor: '#3399CC'
        },
        lineWidth: 5

      };

      var line4 = new google.visualization.LineChart(document.getElementById('line4'));
      line4.draw(data10, options10);
}