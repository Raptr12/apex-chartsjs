var options = {
    chart: {
      height: 350,
      type: "bar"
    },
    annotations: {
      yaxis: [
        {
          y: "South Korea",
          borderColor: "#FEB019",
          offsetX: -430,
          offsetY: -15,
          label: {
            textAnchor: "start",
            position: "left",
            borderColor: "#fff",
            offsetX: -200,
            offsetY: -1,
            style: {
              fontSize: "10px",
              color: "#333"
            },
            text: "Label A"
          }
        },
        {
          y: "Netherlands",
          borderColor: "#FEB019",
          offsetX: -430,
          offsetY: -15,
          label: {
            textAnchor: "start",
            position: "left",
            borderColor: "#fff",
            offsetX: -200,
            offsetY: -1,
            style: {
              fontSize: "10px",
              color: "#333"
            },
            text: "Label B"
          }
        },
        {
          y: "United States",
          borderColor: "#FEB019",
          offsetX: -430,
          offsetY: -15,
          label: {
            textAnchor: "start",
            position: "left",
            borderColor: "#fff",
            offsetX: -200,
            offsetY: -1,
            style: {
              fontSize: "10px",
              color: "#333"
            },
            text: "Label C"
          }
        }
      ]
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    // series: [
    //   {
    //     data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    //   }
    // ],
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany"
      ]
    },
    yaxis: {
      labels: {
        minWidth: 200,
        maxWidth: 200
      }
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();