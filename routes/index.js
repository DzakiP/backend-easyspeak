import express from "express";
import {getUsers, Register, Login, Logout} from "../controller/Users.js";
import { getKamus, getKamusbyId, createKamus } from "../controller/Kamus.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.get('/kamus', getKamus);   
router.get('/kamus/:id', getKamusbyId);   
router.post('/kamus', createKamus);

export default router;