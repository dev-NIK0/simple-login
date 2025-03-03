import app from "./app.js";
import dotenv from 'dotenv'; 
import { connectionDatabase } from "./db/db.js";

dotenv.config();
connectionDatabase();

const PORT = process.env.PORT || 4000;

app.listen( PORT ,() => {
    console.log(`Server on port ${PORT}`);
})

