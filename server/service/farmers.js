import model from "../models/farmers";

class FarmerService {
    static async newFarmer(data) {
        try {
            return await model.create(data);
        } catch (e) {
            throw e;
        }
    }

    static async getFarmer(id) {
        try {
            return await model.findOne({ _id: id });
        } catch (e) {
            throw e;
        }
    }

    static async getFarmers() {
        try {
            return await model.find({}).sort({ "_id": -1 });
        } catch (e) {
            throw e;
        }   
    }

    static async deleteFarmer(id) {
        try {
            return await model.findOneAndDelete({ _id: id })
        } catch (e) {
            throw e;
        }
    }
};

export default FarmerService;
