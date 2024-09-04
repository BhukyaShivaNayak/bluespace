const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/createJob");




router.post("/user/register", controllers.createJob);


module.exports = router
