const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/createJob");

//const multer = require('multer');
//const cors = require('cors');

/*
//---- 
const multer = require('multer');
const path = require('path');

// Setup storage engine
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Init upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // Limit file size to 1MB
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
}).single('Resume'); // Expecting a file field called 'Resume'

// Check File Type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /pdf|doc|docx/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: PDFs, DOCs, and DOCXs Only!');
    }
}

// Update your route to use multer
router.post("/user/register1", upload, controllers.candidate);

*/

//---


/*const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });


  const upload = multer({ storage });
*/




router.post("/user/register", controllers.createJob);
router.get("/user/details", controllers.getJob);
router.put("/user/edit/:id", controllers.useredit);

router.post("/user/register1", controllers.candidate);
//router.post("/user/register1",upload.single('Resume'), controllers.candidate);
router.get("/user/details1", controllers.getcandidate);



//router.post("/user/register1", controllers1.addCandidate);
//router.get("/user/details1", controllers1.getCandidate);
//router.put("/user/edit1/:id", controllers1.useredit1);

module.exports = router;