// Login Home
const buttonLogin = document.getElementById("button-login");
buttonLogin.addEventListener("click", login);
function login(e) {
  e.preventDefault();

  const name = document.getElementById("div-input-login-username").value;
  const password = document.getElementById("div-input-login-password").value;

  if (name === "" || password === "") {
    alert("You have introduce your name or password");
  } else {
    window.location.href = "../content/home.html";
  }
}

