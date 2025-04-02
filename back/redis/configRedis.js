import { createClient } from "redis"; 
//import app from "./../app.js";


export const client = createClient({
    host: "localhost",
    port: 6379,
});

  
export const main = async (PORT) => {
    await client.connect();
    //app.listen(PORT);
    console.log("Server conectado por redis");
};