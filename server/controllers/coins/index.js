import express from "express";
import User from "../../models/User.js";
import Coin from "../../models/Coin.js";

const router = express.Router();
import {
  coinValidations,
  errorMiddleware,
} from "../../middlewares/validations/index.js";
import verifyToken from "../../middlewares/auth/index.js";

router.get("/", async (req, res) => {
  try {
    const coinData = await Coin.find({}); //using find by id is optimal
    res.status(200).json(coinData[coinData.length - 1]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

router.post(
  "/",
  coinValidations(),
  errorMiddleware,
  verifyToken,
  async (req, res) => {
    try {
      req.body.user = req.user._id;
      const newRecord = new Coin(req.body);
      await newRecord.save();

      res.status(200).json(newRecord);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Internal server error" });
    }
  }
);

export default router;
