const router = require('express').Router();

router.get("/home",(req,res)=>res.send("homme"));

module.exports = router;