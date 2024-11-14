const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/createJob");






router.post("/user/register", controllers.createJob);
router.get("/user/details", controllers.getJob);
router.get("/user/:id", controllers.getsingleJob);
router.put("/user/edit/:id", controllers.jobedit);
router.delete('/user/delete/:id', controllers.jobdelete)




router.post("/user/register1", controllers.candidate);

router.get("/user/details1", controllers.getcandidate);






module.exports = router;