(function($) {
  'use strict';
  $(function() {

    if ($("#greetingMessage").length) {
      let request = new XMLHttpRequest();
      request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        
        var object = JSON.parse(this.response);
  
        let firstname = object.firstname;
        let lastname = object.lastname;

          $("#greetingMessage").text("Hi, " + firstname + " " + lastname);
      }
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/user", true);
    request.send();
    }
    
    $("#logoutButton").click(function () {
      window.location.replace("login.html");
    });
    
    
    if ($("#total-sales-amount").length) {
      let request = new XMLHttpRequest();
      request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        
        var object = JSON.parse(this.response);

        $("#total-sales-amount").text(`${object.amount} ${object.currency}`);
        $("#total-sales-period").text(`${object.period}`);

      }
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/totalsales", true);
    request.send();
    }
    
    if ($("#total-purchases-amount").length) {
      let request = new XMLHttpRequest();
      request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        
        var object = JSON.parse(this.response);

        $("#total-purchases-amount").text(`${object.amount} ${object.currency}`);
        $("#total-purchases-period").text(`${object.period}`);

      }
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/totalpurchases", true);
    request.send();
    }

    if ($("#total-orders-amount").length) {
      let request = new XMLHttpRequest();
      request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        
        var object = JSON.parse(this.response);

        $("#total-orders-amount").text(`${object.amount} ${object.currency}`);
        $("#total-orders-period").text(`${object.period}`);

      }
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/totalorders", true);
    request.send();
    }

    if ($("#total-growth-amount").length) {
      let request = new XMLHttpRequest();
      request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        
        var object = JSON.parse(this.response);

        $("#total-growth-amount").text(`${object.amount} ${object.currency}`);
        $("#total-growth-period").text(`${object.period}`);

      }
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/totalgrowth", true);
    request.send();
    }


    if ($("#downloadId").length) {
      let request = new XMLHttpRequest();
      request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        
        var object = JSON.parse(this.response);
  
        let download = object.downloads;
        let sales = object.försäljning;
        let users = object.users;
        let growth = object.growth;
  
        $("#downloadId").text(download);
        $("#purchasesId").text(sales);
        $("#usersId").text(users);
        $("#growthId").text(growth);
      }
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/salesreportoverview", true);
    request.send();
    }

    if ($("#offlineNumber").length) {
      let request = new XMLHttpRequest();
      request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        
        var object = JSON.parse(this.response);
  
          let offline = object.offline;
          let online = object.online;
        
          $("#offlineNumber").text(offline);
          $("#onlineNumber").text(online);
  
      }
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/downloads", true);
    request.send();
    }






    if ($("#total-sales-chart").length) {

      let request = new XMLHttpRequest();
      request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        
        let object = JSON.parse(this.response);

        let days = object.labels;
        let labelService = object.datasets[0].label;
        let dataService = object.datasets[0].data;
        let labelProducts = object.datasets[1].label;
        let dataProducts = object.datasets[1].data;
        let revenue = object.revenue;
        let returns = object.returns;
        let queries = object.queries;
        let invoices = object.invoices;

        $("#total-revenue").html(revenue);
        $("#total-returns").html(returns);
        $("#total-queries").html(queries);
        $("#total-invoices").html(invoices);
        var areaData = {
          labels: days,
          datasets: [
            {
              data: dataService,
              backgroundColor: [
                'rgba(61, 165, 244, .0)'
              ],
              borderColor: [
                'rgb(61, 165, 244)'
              ],
              borderWidth: 2,
              fill: 'origin',
              label: labelService
            },
            {
              data: dataProducts,
              backgroundColor: [
                'rgba(241, 83, 110, .0)'
              ],
              borderColor: [
                'rgb(241, 83, 110)'
              ],
              borderWidth: 2,
              fill: 'origin',
              label: labelProducts
            }
          ]
        };
        var areaOptions = {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            filler: {
              propagate: false
            }
          },
          scales: {
            xAxes: [{
              display: true,
              ticks: {
                display: true,
                padding: 20,
                fontColor:"#000",
                fontSize: 14
              },
              gridLines: {
                display: false,
                drawBorder: false,
                color: 'transparent',
                zeroLineColor: '#eeeeee'
              }
            }],
            yAxes: [{
              display: true,
              ticks: {
                display: true,
                autoSkip: false,
                maxRotation: 0,
                stepSize: 100,
                fontColor: "#000",
                fontSize: 14,
                padding: 18,
                stepSize: 100000,
                callback: function(value) {
                  var ranges = [
                      { divider: 1e6, suffix: 'M' },
                      { divider: 1e3, suffix: 'k' }
                  ];
                  function formatNumber(n) {
                      for (var i = 0; i < ranges.length; i++) {
                        if (n >= ranges[i].divider) {
                            return (n / ranges[i].divider).toString() + ranges[i].suffix;
                        }
                      }
                      return n;
                  }
                  return formatNumber(value);
                }
              },
              gridLines: {
                drawBorder: false
              }
            }]
          },
          legend: {
            display: false
          },
          tooltips: {
            enabled: true
          },
          elements: {
            line: {
              tension: .37
            },
            point: {
              radius: 0
            }
          }
        }
        var revenueChartCanvas = $("#total-sales-chart").get(0).getContext("2d");
        var revenueChart = new Chart(revenueChartCanvas, {
          type: 'line',
          data: areaData,
          options: areaOptions
        });

      }
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/totalsaleschart", true);
    request.send();
    }

      
    

    if ($("#users-chart").length) {

      let request = new XMLHttpRequest();
      request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        
        var object = JSON.parse(this.response);

        let labels = object.labels;
        let data = object.datasets[0].data;
        let dataLabel = object.datasets[0].label;
        let users = object.users;
        let growth = object.growth;

        $("#usersTotal").text(users);
        $("#difference").text(growth);
  
        var areaData = {
          labels: labels,
          datasets: [{
              data: data,
              backgroundColor: [
                '#e0fff4'
              ],
              borderWidth: 2,
              borderColor: "#00c689",
              fill: 'origin',
              label: dataLabel
            }
          ]
        };
        var areaOptions = {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            filler: {
              propagate: false
            }
          },
          scales: {
            xAxes: [{
              display: false,
              ticks: {
                display: true
              },
              gridLines: {
                display: false,
                drawBorder: false,
                color: 'transparent',
                zeroLineColor: '#eeeeee'
              }
            }],
            yAxes: [{
              display: false,
              ticks: {
                display: true,
                autoSkip: false,
                maxRotation: 0,
                stepSize: 100,
                min: 0,
                max: 300
              },
              gridLines: {
                drawBorder: false
              }
            }]
          },
          legend: {
            display: false
          },
          tooltips: {
            enabled: true
          },
          elements: {
            line: {
              tension: .35
            },
            point: {
              radius: 0
            }
          }
        }
        var salesChartCanvas = $("#users-chart").get(0).getContext("2d");
        var salesChart = new Chart(salesChartCanvas, {
          type: 'line',
          data: areaData,
          options: areaOptions
        });
  
      }
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/userschart", true);
    request.send();
    }



      
    

    if ($("#projects-chart").length) {


    let request = new XMLHttpRequest();
    request.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      
      var object = JSON.parse(this.response);

      let procent = object.procent;
      let growth = object.growth;
      let labels = object.labels;
      let data = object.datasets[0].data;
      let dataLabel = object.datasets[0].label;


      $("#procentNumber").text(procent);
      $("#growthNumber").text(growth);

      var areaData = {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: [
              '#e5f2ff'
            ],
            borderWidth: 2,
            borderColor: "#3da5f4",
            fill: 'origin',
            label: dataLabel
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: true
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 100,
              min: 0,
              max: 300
            },
            gridLines: {
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: .05
          },
          point: {
            radius: 0
          }
        }
      }
      var salesChartCanvas = $("#projects-chart").get(0).getContext("2d");
      var salesChart = new Chart(salesChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });

    }
  }
  request.open("GET", "https://fe18.azurewebsites.net/api/projectschart", true);
  request.send();
  }




     
    

    if ($('#offlineProgress').length) {
      var bar = new ProgressBar.Circle(offlineProgress, {
        color: '#000',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: true,
          style : {
            color : "#fff",
            position: 'absolute',
            left: '40%',
            top: '50%'
          }
        },
        svgStyle: {
          width: '90%'
        },
        from: {
          color: '#f1536e',
          width: 6
        },
        to: {
          color: '#f1536e',
          width: 6
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
  
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
  
        }
      });
  
      bar.text.style.fontSize = '1rem';
      bar.animate(.64); // Number from 0.0 to 1.0
    }

    if ($('#onlineProgress').length) {
      var bar = new ProgressBar.Circle(onlineProgress, {
        color: '#000',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: true,
          style : {
            color : "#fff",
            position: 'absolute',
            left: '40%',
            top: '50%'
          }
        },
        svgStyle: {
          width: '90%'
        },
        from: {
          color: '#fda006',
          width: 6
        },
        to: {
          color: '#fda006',
          width: 6
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
  
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
  
        }
      });
  
      bar.text.style.fontSize = '1rem';
      bar.animate(.84); // Number from 0.0 to 1.0
    }

    if ($("#revenue-chart").length) {
      var CurrentChartCanvas = $("#revenue-chart").get(0).getContext("2d");
      var CurrentChart = new Chart(CurrentChartCanvas, {
        type: 'bar',
        data: {
          labels: ["1982","","1993", "", "2003", "", "2013"],
          datasets: [{
              label: 'Europe',
              data: [280000, 90000, 150000, 200000, 50000, 150000, 260000, 150000, 260000],
              backgroundColor: '#405189'
            },
            {
              label: 'Africa',
              data: [250000, 230000, 130000, 160000, 110000, 230000, 50000, 230000, 50000],
              backgroundColor: '#3da5f4'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                drawBorder: false
              },
              ticks: {
                fontColor: "#000",
                display: true,
                fontStyle: 400,
                fontSize: 14,
                stepSize: 100000,
                callback: function(value) {
                  var ranges = [
                      { divider: 1e6, suffix: 'M' },
                      { divider: 1e3, suffix: 'k' }
                  ];
                  function formatNumber(n) {
                      for (var i = 0; i < ranges.length; i++) {
                        if (n >= ranges[i].divider) {
                            return (n / ranges[i].divider).toString() + ranges[i].suffix;
                        }
                      }
                      return n;
                  }
                  return formatNumber(value);
                }
              }
            }],
            xAxes: [{
              stacked: false,
              categoryPercentage: .5,
              barPercentage: 1,
              ticks: {
                beginAtZero: true,
                fontColor: "#000",
                display: true,
                fontSize: 14
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: true
              },
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }

 if ($("#tickets-table").length) {
  let request = new XMLHttpRequest();
  request.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    
    var object = JSON.parse(this.response);

    let allTickets = object.tickets;
    let years = object.years;

    years.forEach(year => {
      $("#dropdownYears").append(`<a class="dropdown-item" href="#">${year}</a>`);
    });

    allTickets.forEach(ticket => {

      var name = ticket.fullname;
      var initials = name.match(/\b\w/g) || [];
      initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        
      let ticketText = `
      <tr>
      <td class="pl-0">
        <div class="icon-rounded-primary icon-rounded-md">
          <h4 class="font-weight-medium">${initials}</h4>
        </div>
      </td>
      <td>
        <p class="mb-0">${ticket.fullname}</p>
        <p class="text-muted mb-0">${ticket.city}</p>
      </td>
      <td>
        <p class="mb-0">${ticket.date}</p>
        <p class="text-muted mb-0">${ticket.time}</p>
      </td>
      <td>
        <p class="mb-0">${ticket.project}</p>
        <p class="text-muted mb-0">${ticket.status}</p>
      </td>
      <td class="pr-0">
        <i class="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
      </td>
    </tr>`;

      $("#tickets-table").append(ticketText);

    });

  }
}
request.open("GET", "https://fe18.azurewebsites.net/api/tickets", true);
request.send();
}

if ($("#invoice-Table").length) {
  let request = new XMLHttpRequest();
  request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {

          var object = JSON.parse(this.response);

          let allInvoices = object.invoices;

          allInvoices.forEach(update => {

            let color;
            switch (update.status) {
              case "Öppen":
                color = "badge-success"
                break;
            case "Pågående":
            color = "badge-warning"
            break;

            case "Tillfälligt stoppad":
            color = "badge-danger"
            break;
              default:
              color = "badge-warning"
                break;
            }

              let invoiceText = `
                      <tr>
                        <td>${update.invoicenumber}</td>
                        <td>${update.customer}</td>
                        <td>${update.shipping}</td>
                        <td class="font-weight-bold">${update.totalprice}</td>
                        <td>${update.customerprice}</td>
                        <td>
                          <div class="badge ${color} badge-fw">${update.status}</div>
                        </td>
                      </tr>
                  `
                  

              $("#invoice-Table").append(invoiceText);
          });

      }
  }
  request.open("GET", "https://fe18.azurewebsites.net/api/openinvoices", true);
  request.send();
}





if ($("#updatesBox").length) {
  let request = new XMLHttpRequest();
  request.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    
    var object = JSON.parse(this.response);

    let allUpdates = object.updates;
    
    allUpdates.forEach(update => {
        let updateText = `
                  <li>
                    <h6>${update.title}</h6>
                    <p class="mt-2">${update.description}</p>
                    <p class="text-muted mb-4">
                      <i class="mdi mdi-clock-outline"></i>
                      ${update.time}
                    </p>
                  </li>`

                  $("#updatesBox").append(updateText);
    });

  }
}
request.open("GET", "https://fe18.azurewebsites.net/api/updates", true);
request.send();
}



    if ($("#distribution-chart").length) {
      
      let request = new XMLHttpRequest();
      request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        
        var object = JSON.parse(this.response);


        let labels = object.labels;
        let data = object.datasets[0].data;
        let city = object.datasets[0].city;
  
        var areaData = {
          labels: labels,
          datasets: [{
              data: data,
              backgroundColor: [
                "#3da5f4", "#f1536e", "#fda006"
              ],
              borderColor: "rgba(0,0,0,0)"
            }
          ]
        };
        var areaOptions = {
          responsive: true,
          maintainAspectRatio: true,
          segmentShowStroke: false,
          cutoutPercentage: 72,
          elements: {
            arc: {
                borderWidth: 4
            }
          },      
          legend: {
            display: false
          },
          tooltips: {
            enabled: true
          },
          legendCallback: function(chart) { 
            var text = [];
            text.push('<div class="distribution-chart">');
            let counter = 0;
            city.forEach(cityName => {
              text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[counter] + '"></div>');
              text.push("<p>" + cityName + "</p>");
              text.push('</div>');
              counter++;
            });
            text.push('</div>');
            return text.join("");
          },
        }
        var distributionChartPlugins = {
          beforeDraw: function(chart) {
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;
        
            ctx.restore();
            var fontSize = .96;
            ctx.font = "600 " + fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#000";
        
            var text = "70%",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
        
            ctx.fillText(text, textX, textY);
            ctx.save();
          }
        }
        var distributionChartCanvas = $("#distribution-chart").get(0).getContext("2d");
        var distributionChart = new Chart(distributionChartCanvas, {
          type: 'doughnut',
          data: areaData,
          options: areaOptions,
          plugins: distributionChartPlugins
        });
        document.getElementById('distribution-legend').innerHTML = distributionChart.generateLegend();
        
  
      }
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/distributionchart", true);
    request.send();
    }





      
      
    




    if ($("#sale-report-chart").length) {

      let request = new XMLHttpRequest();
    request.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      
      var object = JSON.parse(this.response);

      let labels = object.labels;
      let dataLabel = object.datasets[0].label;
      let data = object.datasets[0].data;


      var CurrentChartCanvas = $("#sale-report-chart").get(0).getContext("2d");
      var CurrentChart = new Chart(CurrentChartCanvas, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
              label: dataLabel,
              data: data,
              backgroundColor: ["#3da5f4","#e0f2ff","#3da5f4","#e0f2ff","#3da5f4","#e0f2ff","#3da5f4","#e0f2ff","#3da5f4","#e0f2ff","#3da5f4"]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                drawBorder: false
              },
              ticks: {
                fontColor: "#000",
                display: true,
                padding: 20,
                fontSize: 14,
                stepSize: 10000,
                callback: function(value) {
                  var ranges = [
                      { divider: 1e6, suffix: 'M' },
                      { divider: 1e3, suffix: 'k' }
                  ];
                  function formatNumber(n) {
                      for (var i = 0; i < ranges.length; i++) {
                        if (n >= ranges[i].divider) {
                            return (n / ranges[i].divider).toString() + ranges[i].suffix;
                        }
                      }
                      return n;
                  }
                  return "$" + formatNumber(value);
                }
              }
            }],
            xAxes: [{
              stacked: false,
              categoryPercentage: .6,
              ticks: {
                beginAtZero: true,
                fontColor: "#000",
                display: true,
                padding: 20,
                fontSize: 14
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: true
              },
              barPercentage: .7
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });





      

    }
  }
  request.open("GET", "https://fe18.azurewebsites.net/api/salereportchart", true);
  request.send();
  }




     
    

  });
})(jQuery);