/**open and close menu for phone and desktop */
function openmenu() {
    document.getElementById('menu').style.width = '100%';
    document.getElementById('log').style.marginLeft = '300px';
}

function closenmenu() {
    document.getElementById('log').style.p = 'fixed'; //ido this code coz when i do fixed position didint work
    document.getElementById('menu').style.width = '0';
    document.getElementById('log').style.marginLeft = '0';
}

function openmenu2() {
    document.getElementById('menu').style.width = '30%';
    document.getElementById('log').style.marginLeft = '300px';
}
/** chande mode of  page */
function changemode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
/******validate name */
function validatename() {
    let nam = document.forms["form"]["name"].value;
    if (nam == "" || nam.length < 3 || nam.length > 10) {
        document.getElementById("result1").innerText = "Name must be more than three and less than ten characters";

    }
}
/*** validate email*/
var uemail = document.forms["form"]["email"].value;

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (!uemail.match(mailformat)) {
    document.getElementById("result2").innerText = "You have entered an invalid email address!";
}
/**move card */
function movecard() {
    document.getElementsByName('card').style.transform = 'rotate(45 deg)';
}