const express=require('express');
const router=express.Router();
const {addnum,subtractnum,mulnum,dividednum}=require("./controller")
const checkType=require(./middleware/check);

router.post("/add",checkType,addnum);
router.post("/sub",checkType,subtractnum);
router.post("/multiply",checkType,mulnum);
router.post("/divide",checkType,dividednum);
module.exports=router;