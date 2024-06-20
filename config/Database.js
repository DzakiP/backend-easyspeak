import { Sequelize } from "sequelize";

const db = new Sequelize('auth_capstone', 'root', 'alfarizi', {
    host: "34.101.235.52",  // Gantilah dengan alamat IP publik VM Anda
    dialect: "mysql",
    port: 3306,  // Pastikan port ini benar
    dialectOptions: {
        connectTimeout: 60000  // Tambahkan timeout jika perlu
    }
});

export default db;