export function checkAccess(req, res, next) {
   const token = req.body.token;

   if (token === undefined) {
      res.json({ msg: "Отказ в доступе" });
   }
   else {
      next();
   }
}