import FarmerService from "../service/farmers";

class FarmerController {
    static async newFarmer(req, res) {
        try {
            const { name, email, password, address, phone } = req.body;
            if(!name || !email || !password || !address || !phone) {
                return res.status(400).json({
                    success: false
                });
            }
            else {
                const info = await FarmerService.newFarmer(req.body);
                return res.status(201).json({
                    success: true
                });
            }
        } catch (e) {
            return res.status(500).json({
                message: e.message
            });
        }
    }

    static async getFarmers(_req, res) {
        try {
            const info = await FarmerService.getFarmers()
            if(info) {
                return res.status(200).json({
                    info: info,
                    success: true
                })
            }
            return res.status(400).json({
                success: false
            })
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }

    static async getFarmer(req, res) {
        try {
            const { id } = req.params
            const info = await FarmerService.getFarmer(id)
            if(info) {
                return res.status(200),json({
                    info: info,
                    success: true
                })
            }
            return res.status(400).json({
                success: false
            })
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }

    static async deleteFarmer(req, res) {
        try {
            const { id } = req.params
            const info = await FarmerService.deleteFarmer(id)
            if(info) {
                return res.status(200).json({
                    success: true
                })
            }
            return res.status(400).json({
                success: false
            })
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }
};

export default FarmerController;
