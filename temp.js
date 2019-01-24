if ($("#total-sales-amount").length) {
    let request = new XMLHttpRequest();
    request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {

            var object = JSON.parse(this.response);



        }
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/totalsales", true);
    request.send();
}





















































// Filter tickets click event
$("#dropdownMenuDate1").on("click", function () {
    $(".dropdown-item").on("click", function () {
      sortingTickets($(this).attr("data-year"));
      console.log($(this).attr("data-year"));
    })
  })


  //Dropdown menu
  if ($("#dropdownYears").length) {
    let request = new XMLHttpRequest();
    request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {

        var object = JSON.parse(this.response);

        let years = object.years;

        years.forEach(year => {
          $("#dropdownYears").append(`<a class="dropdown-item" data-year="${year}" href="#">${year}</a>`);
        });

      }
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/tickets", true);
    request.send();

  }


  function sortingTickets(year) {

    let request = new XMLHttpRequest();
    let yearMatch = new Array();
    let i = 0;

    request.onload = function () {

      if (this.readyState == 4 && this.status == 200) {
        var object = JSON.parse(this.response);
        let allTickets = object.tickets;
        


        // Creates a array with all tickets that matches the selected year
        allTickets.forEach(ticket => {

          let date = new Date(ticket.date);
          let ticketYear = date.getFullYear();

          if (ticketYear == year) {
            yearMatch.push(ticket);
            console.log(`${ticketYear} | ${year}`);
            console.log(ticket);
          }
        });
        // Clears the table
        $('#ticket-table-body').html("");

        // Adds the matched tickets to the table
          yearMatch.forEach(element => {
          let matches = tickets[i].fullname.match(/\b(\w)/g);
          let shortName = matches.join('');


          let addTicket = `<tr>
                          <td class="pl-0">
                          <div class="icon-rounded-primary icon-rounded-md">
                          <h4 class="font-weight-medium">${shortName}</h4>
                          </div>
                          </td>
                          <td>
                          <p class="mb-0">${tickets[i].fullname}</p>
                          <p class="text-muted mb-0">${tickets[i].city}</p>
                          </td>
                          <td>
                          <p class="mb-0">${tickets[i].date}</p>
                          <p class="text-muted mb-0"> ${tickets[i].time}</p>
                          </td>
                          <td>
                          <p class="mb-0">${tickets[i].project}</p>
                          <p class="text-muted mb-0">${tickets[i].status}</p>
                          </td>
                          </tr>`;

          i++;
          $('#ticket-table-body').append(addTicket);
        });
      }
      // Clears the array so user can filter again.
      yearMatch = [];
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/tickets", true);
    request.send();
  }
















// Sort Ticket Table
function sortTable(year) {
    let request = new XMLHttpRequest();

    request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            let ticketsInfo = JSON.parse(this.response);
            let tickets = ticketsInfo.tickets;
            let sortMatch = new Array();
            let i = 0;

            // Creates a array with all tickets that matches the selected year
            tickets.forEach(element => {

                let date = new Date(element.date);
                let ticketYear = date.getFullYear();

                if (ticketYear == year) {
                    sortMatch.push(element);
                    console.log(`${ticketYear} | ${year}`);
                }
            });

            // Clears the table
            $('#ticket-table').html("");

            // Adds the matched tickets to the table
            sortMatch.forEach(element => {
                let matches = tickets[i].fullname.match(/\b(\w)/g);
                let shortName = matches.join('');


                let tempTicket = `<tr>
                            <td class="pl-0">
                            <div class="icon-rounded-primary icon-rounded-md">
                            <h4 class="font-weight-medium">${shortName}</h4>
                            </div>
                            </td>
                            <td>
                            <p class="mb-0">${tickets[i].fullname}</p>
                            <p class="text-muted mb-0">${tickets[i].city}</p>
                            </td>
                            <td>
                            <p class="mb-0">${tickets[i].date}</p>
                            <p class="text-muted mb-0"> ${tickets[i].time}</p>
                            </td>
                            <td>
                            <p class="mb-0">${tickets[i].project}</p>
                            <p class="text-muted mb-0">${tickets[i].status}</p>
                            </td>
                            </tr>`;

                counter++;
                $('#ticket-table').append(tempTicket);
            });
        }

        // Clears the array so user can filter again.
        sortMatch = [];
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/tickets", true);
    request.send();
}

// Filter tickets click event
$("#dropdownMenuDate1").on("click", function () {
    $(".dropdown-item").on("click", function () {
        sortTable($(this).attr("data-year"));
    })
});





function sortingTickets(year) {

    let request = new XMLHttpRequest();

    request.onload = function () {

        if (this.readyState == 4 && this.status == 200) {
            let allTickets = JSON.parse(this.response);
            let tickets = allTickets.tickets;
            let yearMatch = new Array();
            let i = 0;

            // Creates a array with all tickets that matches the selected year
            tickets.forEach(ticket => {

                let date = new Date(ticket.date);
                let ticketYear = date.getFullYear();

                if (ticketYear == year) {
                    yearMatch.push(ticket);
                    console.log(`${ticketYear} | ${year}`);
                }
            });
            // Clears the table
            $('#ticket-table').html("");

            // Adds the matched tickets to the table
            yearMatch.forEach(element => {
                let matches = tickets[i].fullname.match(/\b(\w)/g);
                let shortName = matches.join('');


                let addTicket = `<tr>
                              <td class="pl-0">
                              <div class="icon-rounded-primary icon-rounded-md">
                              <h4 class="font-weight-medium">${shortName}</h4>
                              </div>
                              </td>
                              <td>
                              <p class="mb-0">${tickets[i].fullname}</p>
                              <p class="text-muted mb-0">${tickets[i].city}</p>
                              </td>
                              <td>
                              <p class="mb-0">${tickets[i].date}</p>
                              <p class="text-muted mb-0"> ${tickets[i].time}</p>
                              </td>
                              <td>
                              <p class="mb-0">${tickets[i].project}</p>
                              <p class="text-muted mb-0">${tickets[i].status}</p>
                              </td>
                              </tr>`;

                i++;
                $('#ticket-table').append(addTicket);
            });
        }
        // Clears the array so user can filter again.
        yearMatch = [];
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/tickets", true);
    request.send();
}
       