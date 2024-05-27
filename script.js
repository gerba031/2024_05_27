// za sada unosimo ispravne vrijednosti za email. i password

const correct_usermail = "mojemail@.com";
const correct_passwd = "123456a";

function login() {
    let useremail = document.getElementById("useremail").value;
    let userpassword = document.getElementById("password").value;

    console.log("try to login with ${useremail}/${userpassword}");

    if (!usermail || !userpassword) {
        alert("niste unijeli podatke za prijavu");
        return;
    }

    if (useremail === correct_usermail) {
        if (userpassword === correct_passwd) {
            console.log("correct credentials")
        }
    }

}

function register() {
    window.location = "/register.html";
}

function generatePassword() {

    let regUserPasswdElem = document.getElementById("regUserPassword");
    let regUserPasswdRepElem = document.getElementById("regUserPasswordRepeat");

    //generate random pass
    let rndPasswd = getRandomString();
    console.log("Generated Random Passwd" + rndPasswd);
    regUserPasswdElem.value = rndPasswd;
    regUserPasswdRepElem.value = rndPasswd;

}

function getRandomString() {
    return Math.random().toString(36).slice(2, 10);
}

function regCancelbtn() {
    window.location = "login.html";

}

function regLoginBtn() {
    let regUserMail = document.getElementById("regUserMail").value;
    let regUserPassword = document.getElementById("regUserPassword").value;
    let regUserPasswordRep = document.getElementById("regUserPasswordRepeat").value;
}

if (!regUserMail || !regUserPassword || !regUserPasswordRep) {
    alert("Niste unijeli podatke za registraciju/prijavu");
    return;
}

if (regUserPassword !== regUserPasswordRep) {
    alert("unesena lozinka i ponovljena lozinka se ne poklapaju");

}
