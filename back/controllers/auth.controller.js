import { User } from "../models/User.js";
import bcrypt from "bcryptjs";
//import jwt from "jsonwebtoken";
import { v4 } from "uuid";
import { valRegexEmail } from "../validations/validations.js";
import { token } from "morgan";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).send("Error faltan datos");
    }

    /* VALIDACION DE FORMATO EMAIL */

    /*
    const booleanEmail = valRegexEmail(email);
    if(!booleanEmail){
      res.status(403).send("El email , tiene el formato incorrecto")
    } 
      */

    /* VALIDACION DE UNICA CUENTA (CORREO UNICO) */

    const userFoundByEmail = await User.findOne({ email: email });
    console.log(userFoundByEmail);

    if (userFoundByEmail) {
      return res.status(422).send("El email del usuario , ya esta registrado");
    }

    const passwordHashed = await bcrypt.hash(password, 10);
    const tokenUUID = v4();

    const newUser = new User({
      username,
      password: passwordHashed,
      email,
      token: tokenUUID,
    });

    await newUser.save();

    res.status(200).json({ token: tokenUUID });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).send({ message: "Error de sistema" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if( !email || !password ){
      return res.status(400).send("Email y Password requeridos");
    }

    const userLogin = await User.findOne({email: email});

    if(!userLogin){
      return res.status(404).send("Email y/o contraseña incorrecta");
    }

    const passwordCrypt = await bcrypt.compare(password, userLogin.password);
    
    if(passwordCrypt){
      const tokenLogin = v4();
      userLogin.token = tokenLogin;
      userLogin.save();
      res.json({ token: tokenLogin });
    }else{
     res.status(404).send("Email y/o contraseña incorrecta");
    }
    
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).send({ message: "Error de sistema" });
  }

};

export const logOut = async (req, res) => {
  try {
    const { token } = req.body;

    const user = await User.findOne({ token: token });

    if (user) {
      user.token = null;
      user.save();
      res.status(202).send("Sesion Cerrada");
    } else {
      res.status(400).send("Denegado , vuelva iniciar sesion");
    }

  } catch (error) {
    console.log("Error:", error);
    return res.status(500).send({ message: "Error de sistema" });
  }
};
