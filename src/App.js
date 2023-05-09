import './App.css';
import ReactApexChart from 'react-apexcharts'
import React, { useState } from 'react';

function App() {

  const [state] = useState({
    
    series: [
      {
        name: "CIF (USD)",
        data: [13.23, 12.83, 8.07, 11.55]
      },
      {
        name: "Peso Neto (Kgs)",
        data: [8.59, 9.17, 6.24, 7.88]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        toolbar: {
          show: true
        }
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Panama Imports',
        align: 'center'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'], 
          opacity: 0.5
        },
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ['2018', '2019', '2020', '2021'],
        title: {
          text: 'Year'
        }
      },
      yaxis: [
        {
          title: {
            text: 'CIF (USD)',
            min: 0,
            max: 15,
          },
          axisBorder: {
            show: true,
            color: '#77B6EA'
          },
        },
        {
          opposite: true,
          title: {
            text: 'Peso Neto (Kgs)',
            min: 0,
            max: 10,
          },
          axisBorder: {
            show: true,
            color: '#545454'
          },
        }
      ],
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    },
  })
  const [state1] = useState({
    series: [{
      data: [2940000, 1382000, 1236000, 860124, 561252, 548149, 465394, 370991, 239980, 231207, 203921, 196679, 186292,  140736, 132049]
    }],
    options: {
      chart: {
        height: 380,
        type: 'bar',
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '100%',
          barHeight: '100%',
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: 'top'
          },
        }
      },
      colors: [ '#33b2df', 
                '#546E7A', 
                '#d4526e', 
                '#13d8aa', 
                '#A5978B', 
                '#2b908f', 
                '#f9a3a4', 
                '#90ee7e',
                '#f48024', 
                '#69d2e7',
                '#FF5733',
                '#33FFC1',
                '#3383FF',
                '#FF3399',
                '#5233FF'
              ],
      dataLabels: {
        enabled: true,
        distributed: true,
        position: 'top',
        offsetX: 60,
        style: {
          colors: ['#DFDFDF']
        },
        formatter: function (val) {
          var val = Math.abs(val)
          if (val >= 1000000) {
            val = (val / 1000000).toLocaleString("en-US", {maximumFractionDigits: 2}) + ' M'
          }
          else if (val >= 1000) {
            val = (val / 1000).toLocaleString("en-US", {maximumFractionDigits: 2})+ ' K'
          }
          return val
        },
        background : {
          enabled: true,
          foreColor: ['#5F5F5F'],
          padding: 4,
          opacity: 1,
          borderRadius: 2,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      title: {
        text: 'Panama Imports - Top Countries',
        align: 'center'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'], 
          opacity: 0.5
        },
      },
      xaxis: {
        categories: [ 'Estados Unidos de América', 
                      'China (Continental)', 
                      'Zonas Libres de Petróleo (Panamá)', 
                      'Zona Libre de Colón (Panamá)', 
                      'México', 
                      'Zonas Francas (Panamá)', 
                      'Costa Rica',
                      'Colombia', 
                      'Guatemala', 
                      'España',
                      'Brasil',
                      'Japón',
                      'Alemania',
                      'Argentina',
                      'Corea del Sur'
        ],
        labels: {
          formatter: function (val) {
            var val = Math.abs(val)
            if (val >= 1000000) {
              val = (val / 1000000).toLocaleString("en-US", {maximumFractionDigits: 2}) + ' M'
            }
            else if (val >= 1000) {
              val = (val / 1000).toLocaleString("en-US", {maximumFractionDigits: 2})+ ' K'
            }
            return val
          },
        }
      },
      yaxis: {
        labels: {
          show: true
        }
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'left',
        floating: false,
        offsetY: 0,
        offsetX: -5
      }
    },
  })
  const [state2] = useState({
    series: [{
      data: [2940000, 1382000, 1236000, 860124, 561252, 548149, 465394, 370991, 239980, 231207, 203921, 196679, 186292,  140736, 132049]
    }],
    options: {
      chart: {
        height: 380,
        type: 'bar',
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '60%',
          barHeight: '100%',
          distributed: true,
          horizontal: false,
          dataLabels: {
            position: 'top'
          },
        }
      },
      colors: [ '#33b2df', 
                '#546E7A', 
                '#d4526e', 
                '#13d8aa', 
                '#A5978B', 
                '#2b908f', 
                '#f9a3a4', 
                '#90ee7e',
                '#f48024', 
                '#69d2e7',
                '#FF5733',
                '#33FFC1',
                '#3383FF',
                '#FF3399',
                '#5233FF'
              ],
      dataLabels: {
        enabled: true,
        distributed: true,
        position: 'top',
        offsetY: -30,
        style: {
          colors: ['#DFDFDF']
        },
        formatter: function (val) {
          return val
        },
        background : {
          enabled: true,
          foreColor: ['#5F5F5F'],
          padding: 4,
          opacity: 1,
          borderRadius: 2,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      title: {
        text: 'Panama Imports - Top Countries',
        align: 'center'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'], 
          opacity: 0.5
        },
      },
      xaxis: {
        categories: [ 'Estados Unidos de América', 
                      'China (Continental)', 
                      'Zonas Libres de Petróleo (Panamá)', 
                      'Zona Libre de Colón (Panamá)', 
                      'México', 
                      'Zonas Francas (Panamá)', 
                      'Costa Rica',
                      'Colombia', 
                      'Guatemala', 
                      'España',
                      'Brasil',
                      'Japón',
                      'Alemania',
                      'Argentina',
                      'Corea del Sur'
        ],
      },
      yaxis: {
        labels: {
          show: true
        }
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'left',
        floating: false,
        offsetY: 0,
        offsetX: -5
      }
    },
  })
  // In this section i tried applyin the method .toLocaleString() after I
  // received the series and then apply it into the array but for some reason
  // the returned value "val" in the array did not recieved any formatter.
  //
  //
  // const seriesWithLocale = state1.series.map(obj => ({
  //   ...obj, data: obj.data.map(val => {
  //     if (val >= 1000000) {
  //       return (val / 1000000).toLocaleString("en-US")+ " M";
  //     } 
  //     else if (val >= 1000) {
  //       return (val / 1000).toLocaleString("en-US")+ " K";
  //     } 
  //     else {
  //       return val.toLocaleString("en-US");
  //     }
  //   })
  // }));

  return (
    <div className="App">
      <h1>React Apex Chart</h1>

      <br/>
      <br/>
      <div>
        
      </div>
      <div class="container">
      <ReactApexChart 
        options={state.options} 
        series={state.series} 
        type="line" 
        height={380}
        width={950}/>
        <br/>
        <br/>
        <ReactApexChart 
        options={state1.options} 
        series={state1.series} 
        type="bar" 
        height={500}
        width={950}/>
        <br/>
        <br/>
        <ReactApexChart 
        options={state2.options} 
        series={state2.series} 
        type="bar" 
        height={500}
        width={950}/>
      </div>
    </div>
  );
}


export default App;
