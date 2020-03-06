import express from "express";
import productsRoute from "./products";
import userRoute from './users';

const router = express.Router();

router.use("/products", productsRoute);
router.use('/users', userRoute);
router.get("/", (req, res) => res.send("Hello"));

export default router;
