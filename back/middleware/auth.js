const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];  // on récupère le token de la requête entrante
       const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');   // on le vérifie
       const userId = decodedToken.userId;   // on récupère l'id du token
       req.auth = {
           userId: userId
       };
	next();
   } catch(error) {
       res.status(401).json({ error });
   }
};