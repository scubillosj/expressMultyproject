import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ error: "Token requerido" });

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({ error: "Token inválido" });

    req.user = decoded;
    next();
  });
};
