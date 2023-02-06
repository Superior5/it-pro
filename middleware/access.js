import Admin from "../models/adminModel.js";
import Token from "../models/tokenModel.js";

export async function checkAccess(req, res, next) {
   const token = await Token.find( {
      token: req.get('Authorization'),
   });


   if (token[0] === undefined) {
      res.json({ msg: "Отказ в доступе" });
   }
   else {
      next();
   }
}