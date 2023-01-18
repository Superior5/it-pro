export function checkAccess(req, res, next) {
   const token = req.body.token;
   if (token != '') {
      next();
   }
   else {
      res.json({ msg: "Отказ в доступе" });
   }
}