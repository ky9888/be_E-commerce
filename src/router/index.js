import express from "express";
import routerAuth from "./auth.js";
import routerflight from "./flight.js";
import routerTicker from "./ticker.js";
import routerHotel from "./hotel.js";
import routerRoomHotel from "./roomHotel.js";


const router = express.Router();

router.use("/auth", routerAuth);
router.use("/auth", routerflight);
router.use("/auth", routerTicker);
router.use("/auth", routerHotel);
router.use("/auth", routerRoomHotel);




export default router;
