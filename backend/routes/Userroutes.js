const express=require('express')
const router = express.Router();
const cloudinary = require('cloudinary');
const multer  = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const usercontroler=require("../controller/UserControler")
const postctr=require('../controller/PostControler')
const comments=require('../controller/CommentsControler')
const categories=require('../controller/Cetagory')




// signup and login routes
router.post("/login",usercontroler.login)
router.post("/signup",usercontroler.signup)
// post routes
router.post("/createpost",upload.single('image'),postctr.createpostctr)
router.get("/getpost",postctr.getpostctr)
router.get("/getpostbyid/:id",postctr.getpostbyidctr)
router.delete("/deletepost/:id",postctr.deletepost)
router.put("/updatepost/:id",postctr.updatapost)
// comments routes
router.post("/createcomments",comments.createcomments)
router.get("/getcomments",comments.getcomments)
router.get("/postcomments/:id",comments.getbypostcomments)
router.put("/update/:id",comments.updatecmnt)
router.delete("/dellcomments/:id",comments.deletecomments)
// category
// router.get("/gadget",categoryctrl.mobileCategory)
// router.get("/software",categoryctrl.softwareCategory)

    router.get("/posts/:category?", postctr.getpostctr)
    router.get("/categories/all",categories.getCategories );
    router.post("/categories/creat", categories.createCategories);

module.exports=router