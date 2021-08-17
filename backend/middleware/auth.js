const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  let jwtToken = req.header("Authorization");
  if (!jwtToken) return res.status(400).send("Authorization denied: No token");
  //[Bearer,3214mndsdighzkghej]
  //[0 , 1]
  console.log(jwtToken); //eliminar linea
  jwtToken = jwtToken.split(" ")[1]; //dividir el bearen token por espacios y tomar el 1 del array
  //3214mndsdighzkghej
  if (!jwtToken) return res.status(400).send("Authorization denied: No token");
  try {
    const payload = await jwt.verify(jwtToken, process.env.SECRET_KEY_JWT);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(400).send("Authorization denied: Invalid token");
  }
};

module.exports =  auth; //No van en corchetes debido a que es solo una funcion y los middleware nunca van con llaves
