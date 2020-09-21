import express from "express";
const router = express.Router();
import productcontroller from "../controllers/product";
import farmercontroller from "../controllers/farmers";
import { catchErrors } from "../handlers/errorHandler";
import cloudinary from "cloudinary";
import multer from "multer";
import config from "../config";

cloudinary.config({
    cloud_name: config.cloud_name,
    api_key : config.api_key,
    api_secret : config.api_secret
});

const storage = multer.diskStorage({
    filename:function(req, file, cb){
        cb(null, Date.now()+file.originalname);
    }
});

const imageFilter = function(req, file, cb){
    if(!file.originalname.match(/\.(jpeg|jpg|png)$/i)) {
        return cb('Only image files are allowed', false);
    }
    else {
        cb(null,true);
    }
}

const upload = multer({
    storage:storage,
    fileFilter:imageFilter
});

router.post("/api/v1/post/:farmerId", upload.single('photo'), productcontroller.createProduct);
router.get("/api/v1/products", catchErrors(productcontroller.getAllProducts));
router.get("/api/v1/product/:id", catchErrors(productcontroller.getProduct));
router.delete("/api/v1/delete/product/:id", catchErrors(productcontroller.deleteProduct));

router.post("/api/v1/register", farmercontroller.newFarmer);
router.get("/api/v1/farmer/:id", catchErrors(farmercontroller.getFarmer));
router.get("/api/v1/farmers", catchErrors(farmercontroller.getFarmers));
router.delete("/api/v1/delete/farmer", catchErrors(farmercontroller.deleteFarmer));

export default router;
