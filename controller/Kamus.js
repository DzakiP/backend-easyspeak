import Kamus from "../models/KamusModels.js";

export const getKamus = async(req, res) => {
    try {
        const response = await Kamus.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getKamusbyId = async(req, res) => {
    try {
        const response = await Kamus.findOne({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createKamus = async(req, res) => {
    const { gambar, keterangan} = req.body;
    try {
        await Kamus.create({
            gambar: gambar,
            keterangan: keterangan,
        });
        res.status(201).json({msg: "Kamus berhasil ditambahkan"});
    } catch (error) {
        console.log(error.message);
    }
}
