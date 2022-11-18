const Data = require('../model/Data');

const getAllData = async(req, res) => {
    try {
        const datas = await Data.find();
        res.json(datas);
    }
    catch (error) {
        console.log(error);
    }
}

const createData = async(req, res) => {
    try {
        const data = await Data.create({
            name: req.body.name,
            email: req.body.email
        });
    }
    catch (error) {
        console.log(error);
    }
}

const deleteData = async(req, res) => {
    try {
        await Data.deleteOne({ _id:req.params.id})
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllData,
    createData,
    deleteData
}
