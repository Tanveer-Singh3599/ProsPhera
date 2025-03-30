function register() {
    localStorage.setItem("user", document.getElementById("username").value);
    localStorage.setItem("pass", document.getElementById("password").value);
    alert("Registered!");
    window.location.href = "login.html";
}

function login() {
    if (document.getElementById("loginUser").value === localStorage.getItem("user") &&
        document.getElementById("loginPass").value === localStorage.getItem("pass")) {
        alert("Login Successful!");
        window.open("Dashboard.html");
    } else {
        alert("Wrong Username or Password!");
    }
}
