import { CardHome } from "../components/CardHome";
import { Link } from "react-router";
import { useState } from "react";

function Home() {

  //const [token, setToken] = setToken(null);
  const [isLogged,setLogged] = useState();


  return (
    <div class="h-screen w-screen bg-red-400">
      <nav class="flex flex-row justify-end p-4 bg-slate-500">
        <Link class="hover:text-white " to="/login">
          Login
        </Link>
        <Link class="mx-20 hover:text-white " to="/register">
          Register
        </Link>
      </nav>
      <main class="bg-white m-10">
        <h1>Home</h1>
        <CardHome />  
      </main>
    </div>
  );
}
export default Home;
