import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";

const router = express.Router();

// CREATE
router.post("/" , createHotel);

//UPDATE
router.put("/:id" , updateHotel);

//DELETE
router.delete("/:id" , deleteHotel);

//GET
router.get("/find/:id" , getHotel);

//GET ALL
router.get("/" , getHotels);
router.get("/countByCity" , countByCity);
router.get("/countByType" , countByType);

export default router