import moongose from 'mongoose';

export const connectionDatabase = async () => {
    try {
        await moongose.connect('mongodb+srv://dev-nik0:nico123@simplelogin.0wo2q.mongodb.net/')
        .then(db => console.log("Conectado a la base de datos"));
    } catch (error) {
        console.log("Error")
    }
    
}
