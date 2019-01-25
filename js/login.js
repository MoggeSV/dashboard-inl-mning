$(function () {

    if ($("#loginButton").length) {
        let request = new XMLHttpRequest();

        let emailInput = $("#inputEmail");
        let passwordInput = $("#inputPassword");


        request.onload = function () {
            if (this.readyState == 4 && this.status == 200) {

                var object = JSON.parse(this.response);

                let correctEmail = object.email;
                let correctPassword = object.password;

                $("#loginButton").click(function () {
                    if (emailInput.val() == correctEmail && passwordInput.val() == correctPassword) {
                        window.location.replace("index.html");
                    } else {
                        $('#login-failed').text("Inloggningen misslyckades, Ange ett korrekt användarnamn och lösenord");
                        event.preventDefault();
                    }
                })

            }
        }
        request.open("GET", "https://fe18.azurewebsites.net/api/user", true);
        request.send();
    }












});