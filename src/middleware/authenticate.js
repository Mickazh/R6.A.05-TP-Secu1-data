export async function getAuthenticate(req, res) {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw new Error("Il faut un token");
    }
    
    const decoded = this.jwt.verify(token);

    console.log(decoded);
    req.jwtVerify();
    return { valid: true, decoded };
  } catch (err) {
    console.error(err);
    res.code(401).send({ ...err, message: "Vous ne passerez pas !" });
  }
}
