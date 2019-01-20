$(function () {
   
   var request = new XMLHttpRequest();

    /*request.onload = function () {

        if (this.readyState == 4 && this.status == 200) {
            var user = JSON.parse(this.response);
            console.log(user.firstname);

            var fullname = user.firstname +  " " + user.lastname;
            console.log(fullname);
            console.log(user.city);
        }
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/user", true);
    request.send();*/



    //loopa igenom en array

    request.onload = function () {

        if (this.readyState == 4 && this.status == 200) {
            var object = JSON.parse(this.response);

            for (let i = 0; i < object.updates.length; i++) {
                console.log(object.updates[i].title);
                console.log(object.updates[i].time);

                let title = object.updates[i].title;

                $('#root').append(`<p> ${title}</p>`);
                $('#root').append(object.updates[i].title);

                $("#root").text(`${title}`);
            }
            
        }
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/updates", true);
    request.send();

});





