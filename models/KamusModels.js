import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Kamus = db.define('Kamus', {
    gambar: DataTypes.STRING,
    keterangan: DataTypes.STRING,
}, {
    freezeTableName:true
});

export default Kamus;


