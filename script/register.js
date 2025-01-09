const dataUsers = [];


//Form Register
const buttonRegister = document.getElementById("btn-register");
buttonRegister.addEventListener("click", checkData);

function checkData() {
  const name = document.getElementById("form-input-username").value;
  const password = document.getElementById("form-input-password").value;
  const email = document.getElementById("form-input-email").value;

  const user = dataUsers.some((user) => user.email === email);

  if(name === "" || password === "" || email === ""){
    alert("Complete the fields")
  }else if (user) {
    alert("This user already exists");
    clearInputs();
  } else {
    let user = {
      id: dataUsers.length + 1,
      username: name,
      password: password,
      email: email,
    };
    dataUsers.push(user);
    console.log("new user", user, " array ", dataUsers);
    alert("Registered !");
  }
}

//Limpiar todos los campos
function clearInputs() {
  document.getElementById("#form-input-username").value = "";
  document.getElementById("#form-input-password").value = "";
  document.getElementById("#form-input-email").value = "";
}
