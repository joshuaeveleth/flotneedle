$(function () {    
    var data1 = GenerateSeries(0);
    var data2 = GenerateSeries(100);
    var data3 = GenerateSeries(200);
    var dataset = [data1, data2, data3];
 
    function GenerateSeries(added){
        var data = [];
        var start = 100 + added;
        var end = 200 + added;
 
        for(i=1;i<=100;i++){        
            var d = Math.floor(Math.random() * (end - start + 1) + start);        
            data.push([i, d]);
            start++;
            end++;
        }
 
        return data;
    }
 
    var options = {
            series:{
                stack: true,             
                lines: { fill: true }
            },
            legend: {
                position: 'nw',
                labelBoxBorderColor: "#000000",
                container: $("#legendPlaceholder"),
                noColumns: 0
            },
            needle: {
            	on: true
            },
            grid: {
            	hoverable: true
            }
    };
     
    function ToggleSeries(){
 
        $.plot(".graph", dataset, options);  
    }
 
    $("input").change(function(){
        ToggleSeries();
    });
    ToggleSeries();
     
});

	