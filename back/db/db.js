import moongose from 'mongoose';
import dotenv from 'dotenv'; 
dotenv.config();

const USERNAME = process.env.DB_USER ;
const PASSWORD = process.env.DB_PASSWORD;
const HOST = process.env.DB_HOST;
const DATABASE = process.env.DATABASE;

export const connectionDatabase = async () => {
    try {
        await moongose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@${DATABASE}.${HOST}`)
        .then(db => console.log("Conectado a la base de datos"));
    } catch (error) {
        console.log("Error")
    }
    
}
