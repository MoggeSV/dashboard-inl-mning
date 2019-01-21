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




//tickets
if ($("#tickets-table").length) {
    let request = new XMLHttpRequest();
    request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {

            var object = JSON.parse(this.response);

            let allTickets = object.tickets;

            allTickets.forEach(ticket => {

                let ticketText = `
        <tr>
        <td class="pl-0">
          <div class="icon-rounded-primary icon-rounded-md">
            <h4 class="font-weight-medium">AL</h4>
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




<tr>
    <td class="pl-0">
        <div class="icon-rounded-primary icon-rounded-md">
            <h4 class="font-weight-medium">AL</h4>
        </div>
    </td>
    <td>
        <p class="mb-0">Alta Lucas</p>
        <p class="text-muted mb-0">Connecticut</p>
    </td>
    <td>
        <p class="mb-0">31 Aug 2018</p>
        <p class="text-muted mb-0">9:30 am</p>
    </td>
    <td>
        <p class="mb-0">6770 Verner Burgs</p>
        <p class="text-muted mb-0">View on map</p>
    </td>
    <td class="pr-0">
        <i class="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
    </td>
</tr>



    <tr>
        <td class="pl-0">
            <div class="icon-rounded-info icon-rounded-md">
                <h4 class="font-weight-medium">TS</h4>
            </div>
        </td>
        <td>
            <p class="mb-0">Teresa Shaw</p>
            <p class="text-muted mb-0">Florida</p>
        </td>
        <td>
            <p class="mb-0">13 May 2018</p>
            <p class="text-muted mb-0">10:30 am</p>
        </td>
        <td>
            <p class="mb-0">1300 Gideon Divide Apt. 400</p>
            <p class="text-muted mb-0">Start session</p>
        </td>
        <td class="pr-0">
            <i class="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
        </td>
    </tr>
    <tr>
        <td class="pl-0">
            <div class="icon-rounded-danger icon-rounded-md">
                <h4 class="font-weight-medium">RU</h4>
            </div>
        </td>
        <td>
            <p class="mb-0">Rosa Underwood</p>
            <p class="text-muted mb-0">North Dakota</p>
        </td>
        <td>
            <p class="mb-0">02 Jan 2018</p>
            <p class="text-muted mb-0">11:00 am</p>
        </td>
        <td>
            <p class="mb-0">9576 Rempel Extension</p>
            <p class="text-muted mb-0">End session</p>
        </td>
        <td class="pr-0">
            <i class="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
        </td>
    </tr>
    <tr>
        <td class="pl-0">
            <div class="icon-rounded-warning icon-rounded-md">
                <h4 class="font-weight-medium">VR</h4>
            </div>
        </td>
        <td>
            <p class="mb-0">Vilson Rowa</p>
            <p class="text-muted mb-0">Densar</p>
        </td>
        <td>
            <p class="mb-0">05 Nov 2018</p>
            <p class="text-muted mb-0">02:30 am</p>
        </td>
        <td>
            <p class="mb-0">1072 Orion Expansion</p>
            <p class="text-muted mb-0">On Way</p>
        </td>
        <td class="pr-0">
            <i class="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
        </td>
    </tr>
    <tr>
        <td class="pl-0">
            <div class="icon-rounded-info icon-rounded-md">
                <h4 class="font-weight-medium">TS</h4>
            </div>
        </td>
        <td>
            <p class="mb-0">Teresa Shaw</p>
            <p class="text-muted mb-0">Florida</p>
        </td>
        <td>
            <p class="mb-0">13 May 2018</p>
            <p class="text-muted mb-0">10:30 am</p>
        </td>
        <td>
            <p class="mb-0">1300 Gideon Divide Apt. 400</p>
            <p class="text-muted mb-0">Start session</p>
        </td>
        <td class="pr-0">
            <i class="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
        </td>
    </tr>


  //updates


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




<li>
    <h6>User confirmation</h6>
    <p class="mt-2">Tonight's the night. And it's going to happen again and again. It has to happen.
                        I'm thinking two circus clowns dancing. </p>
    <p class="text-muted mb-4">
        <i class="mdi mdi-clock-outline"></i>
        7 months ago.
                      </p>
</li>



    <li>
        <h6>Continuous evaluation</h6>
        <p class="mt-2">And it's going to happen again and again. It has to happen. I'm thinking two
                        circus clowns dancing. Tonight's the night. </p>
        <p class="text-muted mb-4">
            <i class="mdi mdi-clock-outline"></i>
            7 months ago.
                      </p>
    </li>
    <li>
        <h6>Promotion</h6>
        <p class="mt-2">It has to happen. I'm thinking two circus clowns dancing. Tonight's the night.
                      </p>
        <p class="text-muted">
            <i class="mdi mdi-clock-outline"></i>
            7 months ago.
                      </p>
    </li>




if ($("#invoice-table").length) {
    let request = new XMLHttpRequest();
    request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {

            var object = JSON.parse(this.response);

            let allInvoices = object.invoices;

            allInvoices.forEach(update => {
                let invoiceText = `
                        <tr>
                          <td>${update.invoicenumber}</td>
                          <td>${update.customer}</td>
                          <td>${update.shipping}</td>
                          <td class="font-weight-bold">${update.totalprice}</td>
                          <td>${update.customerprice}</td>
                          <td>
                            <div class="badge badge-success badge-fw">${update.status}</div>
                          </td>
                        </tr>
                    `

                $("#invoice-table").append(invoiceText);
            });

        }
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/openinvoices", true);
    request.send();
}








<tr>
    <td>50014</td>
    <td>David Grey</td>
    <td>Italy</td>
    <td class="font-weight-bold">$6300</td>
    <td>$2100</td>
    <td>
        <div class="badge badge-success badge-fw">Progress</div>
    </td>
</tr>






    <tr>
        <td>50015</td>
        <td>Stella Johnson</td>
        <td>Brazil</td>
        <td class="font-weight-bold">$4500</td>
        <td>$4300</td>
        <td>
            <div class="badge badge-warning badge-fw">Open</div>
        </td>
    </tr>
    <tr>
        <td>50016</td>
        <td>Marina Michel</td>
        <td>Japan</td>
        <td class="font-weight-bold">$4300</td>
        <td>$6440</td>
        <td>
            <div class="badge badge-danger badge-fw">On hold</div>
        </td>
    </tr>
    <tr>
        <td>50017</td>
        <td>John Doe</td>
        <td>India</td>
        <td class="font-weight-bold">$6400</td>
        <td>$2200</td>
        <td>
            <div class="badge badge-success badge-fw">Progress</div>
        </td>
    </tr>
    <tr>
        <td>50015</td>
        <td>Stella Johnson</td>
        <td>Brazil</td>
        <td class="font-weight-bold">$4500</td>
        <td>$4300</td>
        <td>
            <div class="badge badge-warning badge-fw">Open</div>
        </td>
    </tr>
    <tr>
        <td>50014</td>
        <td>David Grey</td>
        <td>Italy</td>
        <td class="font-weight-bold">$6300</td>
        <td>$2100</td>
        <td>
            <div class="badge badge-success badge-fw">Progress</div>
        </td>
    </tr>