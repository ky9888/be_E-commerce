import mongoose from "mongoose";
const product = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nameTitle: {
      type: String,
     
    },
    note: {
      type: String,
     
    },
    priceG: {
      type: String,
      
    },
    giam: {
      type: String,
      
    },
    price: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      
    },

    images: [
      {
        image: {
          type: String,
        },
        color: {
          type: String,
        },
      },
      {
        image: {
          type: String,
        },
        color: {
          type: String,
        },
      },
      {
        image: {
          type: String,
        },
        color: {
          type: String,
        },
      },
      
      
    ],

    describe: {
      type: String,
     
    },
  },
  { versionKey: false, timestamps: true }
);
const products = mongoose.model("product", product);

export default products;
