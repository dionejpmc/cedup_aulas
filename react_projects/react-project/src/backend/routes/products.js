import express from "express";

import htmlControllerProd from "../controller/htmlControllerProducts.js";

const router = express.Router();



router.get("/crudproduct", htmlControllerProd); 



export default router;