import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/index.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password)
      return res.status(400).json({ error: "Todos los campos son obligatorios." });

    const exists = await User.findOne({ where: { email } });
    if (exists)
      return res.status(400).json({ error: "El correo ya está registrado." });

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashed,
    });

    return res.json({ message: "Usuario creado correctamente", user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error en el servidor." });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ error: "Usuario y contraseña requeridos" });

   
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(400).json({ error: "Credenciales inválidas" });

    
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: "Credenciales inválidas" });

    const access = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "15m" }
    );

    const refresh = jwt.sign(
      { id: user.id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d" }
    );

    return res.json({ access, refresh });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error en el servidor" });
  }
};


export const refreshToken = (req, res) => {
  try {
    const { refresh } = req.body;

    if (!refresh)
      return res.status(400).json({ error: "Refresh token requerido" });

    jwt.verify(
      refresh,
      process.env.JWT_REFRESH_SECRET,
      (err, decoded) => {
        if (err) return res.status(401).json({ error: "Refresh token inválido" });

        const access = jwt.sign(
          { id: decoded.id },
          process.env.JWT_SECRET,
          { expiresIn: process.env.JWT_EXPIRES_IN || "15m" }
        );

        return res.json({ access });
      }
    );
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error en el servidor" });
  }
};