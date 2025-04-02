import jwt from "jsonwebtoken";
import fs from "node:fs";

export const generatedToken = (payload) => {

    const privateKey = fs.readFileSync("private.key","utf8");
    const token = jwt.sign(payload,privateKey,{algorithm: "RS256" , expiresIn: 60});

    return token;
}

export const verifyToken = (token) => {
    const publicKey = fs.readFileSync("public.key","utf-8");
    jwt.verify(token,publicKey,{ algorithm: 'RS256' }, (err,decoded) => {
        if (err) {
            console.log('Error:', err.message);
        } else {
            console.log('Token decodificado:', decoded);
            return decoded;
        }
    });
}