import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { userRegister } from "../services/userService";
import { LoggedCard } from "../components/LoggedCard";
import Dashboard from "./Dashboard";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [token,setToken] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await userRegister({ username, email, password });

      if (!data) {
        throw new Error("Error , no hay data");
      }

      setToken(data.token)
      
      console.log("data: " , data , " data.token" , data.token);
    } catch (error) {
      console.log("Error del catch register ", error);
    }

    if ((username || email || password) === "") {
      setError(true);
      return;
    }

    setUsername("");
    setEmail("");
    setPassword("");

    console.log("Estado error:", error);
  };

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (token) {
        navigate("/dashboard");
      }
    }, 3000);
  }, [token, navigate]);

  return (
    <div class="h-screen w-screen bg-gray-600 flow-root">
      { !token ? ( 
      <form
        onSubmit={handleSubmit}
        class="mt-20 mx-auto w-200 h-180 bg-red-300 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        <h2 class="text-center p-10">Account Information</h2>
        <div class="text-center m-20">
          <section class="m-10">
            <label>Email</label>
            <br />
            <input
              class="bg-white rounded-xl text-center"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>
          <section class="m-10">
            <label>Username</label>
            <br />
            <input
              class="bg-white rounded-xl text-center"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              minLength="5"
              maxLength="10"
            />
          </section>
          <section class="m-10">
            <label>Password</label>
            <br />
            <input
              class="bg-white rounded-xl text-center"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength="7"
              maxLength="15"
            />
          </section>
        </div>
        {error && <p>Todos los campos son obligatorios.</p>}
        <div class="text-center">
          <input
            class=" bg-blue-500 shadow-lg shadow-blue-500/50 px-5 border-2 border-transparent hover:border-white border-solid rounded-xl"
            type="submit"
            value="Register"
          />
        </div>
      </form>
      ) : (<Dashboard />)}
    </div>
  );
}

export default Register;
