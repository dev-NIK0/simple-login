import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { userLogin } from "../services/userService";
import { FcApproval } from "react-icons/fc";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [token, setToken] = useState(null);

  const [logged, setLogged] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError(true);
      return;
    }

    try {
      const data = await userLogin({ email, password });
      if (!data) {
        throw new Error("Error , no hay data en el login");
      }
      setToken(data.token);
    } catch (error) {
      console.log("Error del catch login ", error);
    }
    setLogged(true);
    setError(false);
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    setTimeout(() => {
      if (logged) {
        console.log("logged", logged);
        navigate("/dashboard");
      }
    }, 3000);
  }, [logged, navigate]);

  return (
    <div class="h-screen w-screen flex justify-center items-center bg-gray-600">
      {!logged ? (
        <form
          onSubmit={handleSubmit}
          class="flex flex-col items-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 w-150"
        >
          <div class="mb-10 flex flex-col">
            <label class="text-center mb-5">Email</label>
            <input
              class="w-70 rounded-lg bg-white"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength="15"
            />
          </div>
          <div class="mb-10 flex flex-col">
            <label class="text-center mb-5">Password</label>
            <input
              class="w-70 rounded-lg bg-white"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength="5"
              maxLength="15"
            />
          </div>
          <div class="text-center">
            <input
              class="bg-blue-500 shadow-lg shadow-blue-500/50 px-5 border-2 border-transparent hover:border-white border-solid rounded-xl"
              type="submit"
              value="Login"
            />
          </div>
          {error && <p>Todos los campos son obligatorios.</p>}
        </form>
      ) : (
        <div class="text-center">
          <FcApproval class="w-50 h-100" /> <br />
          <h1 class="font-mono text-2xl italic font-stretch-condensed">
            Logged !
          </h1>
        </div>
      )}
    </div>
  );
}

export default Login;
