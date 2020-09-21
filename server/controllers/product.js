import ProductService from "../service/product";
import cloudinary from "cloudinary";
import FarmerService from "../service/farmers";

class ProductController {
    static async getAllProducts(_req, res) {
        try {
            const info = await ProductService.getAllProducts();
            if(info) {
                return res.status(200).json({
                    success: true,
                    info: info
                });
            }
            else {
                return res.status(400).json({
                    success: false
                });
            }
        } catch (e) {
            return res.status(500).json({
                message: e.message
            });
        }  
    }

    static async getProduct(req, res) {
        try {
            const { id } = req.params;
            const info = await ProductService.getProduct(id);
            if(info) {
                return res.status(200).json({
                    info: info,
                    success: true
                });
            }
            else {
                return res.status(400).json({
                    success: false
                });
            }
        } catch (e) {
            return res.status(500).json({
                message: e.message
            });
        }  
    }

    static async createProduct(req, res) {
        try {
            const { type, address, about } = req.body;
            if(!type || !address || !about) {
                return res.status(400).json({
                    success: false
                });
            }
            else if(req.file == undefined || req.file == ''){
                return res.status(400).json({
                    success: false
                })
            }
            else {
                const { farmerId } = req.params
                const farmer = await FarmerService.getFarmer(farmerId)
                if(farmer) {
                    var image = req.file.path
                    const result = await cloudinary.uploader.upload(image)
                    var imgUrl = result.secure_url
                    const info = await ProductService.postProduct(req.body);
                    info.photo = imgUrl
                    info.owner = farmer.name;
                    await info.save()
                    var farmerPosts = farmer.products
                    farmerPosts.push(info)
                    await farmer.save()
                    return res.status(201).json({
                        success: true
                    });
                }
                return res.status(400).json({
                    success: false
                })
            }
        } catch (e) {
            return res.status(500).json({
                message: e.message
            });
        }
    }

    static async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            const info = await ProductService.deleteProduct(id);
            if(info) {
                return res.status(200).json({
                    success: true
                });
            }
            else {
                return res.status(400).json({
                    success: false
                });
            }
        } catch (e) {
            return res.status(500).json({
                message: e.message
            });
        }
    }
};

export default ProductController;
