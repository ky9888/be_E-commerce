import hotel from "../models/hotel.js";

export const createHotel = async (req, res) => {
  const newHotel = new hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};
export const getAllHotel = async (req, res) => {
  try {
    const hotels = await hotel.find();
    return res.status(200).json({
      message: " thành công",
      data: hotels,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

