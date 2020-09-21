import model from "../models/product";

class ProductService {
    static async getAllProducts() {
        try {
            return await model.find({}).sort({"_id": -1});
        } catch (e) {
            throw e;
        }   
    }

    static async getProduct(id) {
        try {
            return await model.findOne({ _id: id });
        } catch (e) {
            throw e;
        }  
    }

    static async postProduct(data) {
        try {
            return model.create(data);
        } catch (e) {    
            throw e;
        }  
    }

    static async deleteProduct(id) {
        try {
            return await model.findByIdAndDelete({ _id: id });
        } catch (e) {
            throw e;
        }  
    }
};

export default ProductService;
