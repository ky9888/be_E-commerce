import products from "../models/product.js";
import { remove as removeDiacritics } from 'diacritics';
import redis from 'redis';

const diacriticMap = {
  'dong ho': 'đồng hồ',
  'ao': 'áo',
  'giay': 'giày',
};

// Initialize Redis client
const client = redis.createClient({ url: 'redis://localhost:6379' });

client.connect();

const convertToDiacritics = (str) => {
  const words = str.split(' ');
  const convertedWords = words.map(word => diacriticMap[word] || word);
  return convertedWords.join(' ');
};

export const getAllProduct = async (req, res) => {
  try {
    const { nameTitle, ...query } = req.query;

    let productsData;

    // Check Redis cache first
    const cacheKey = `products:${nameTitle || 'all'}:${JSON.stringify(query)}`;
    const cachedData = await client.get(cacheKey);

    if (cachedData) {
      console.log('Cache hit');
      return res.status(200).json({
        message: nameTitle ? "Tìm sản phẩm thành công" : "Lấy sản phẩm thành công",
        data: JSON.parse(cachedData)
      });
    }

    // Fetch products from MongoDB if not in cache
    if (nameTitle) {
      const diacriticTitle = convertToDiacritics(nameTitle);
      const normalizedTitle = removeDiacritics(diacriticTitle).split(' ').join('.*');
      const allProducts = await products.find({});
      productsData = allProducts.filter(product =>
        removeDiacritics(product.nameTitle).match(new RegExp(normalizedTitle, 'i'))
      );
    } else {
      productsData = await products.find(query);
    }

    // Cache the result in Redis for future requests
    await client.set(cacheKey, JSON.stringify(productsData), {
      EX: 3600, // Cache for 1 hour
    });

    return res.status(200).json({
      message: nameTitle ? "Tìm sản phẩm thành công" : "Lấy sản phẩm thành công",
      data: productsData
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching products' });
  }
};




export const getDetailProduct=async(req,res)=>{
  try {
      const productDetail=await products.findById(req.params.id)
      return res.status(200).json({
          message:"tìm  sản phẩm thành công",
          data:productDetail
      }) 
  } catch (error) {
      res.status(500).send(error.message);
      
  }
}

export const createProducts = async (req, res) => {
  const newProduct = new products(req.body);
  try {
    const saveProduct = await newProduct.save();
    res.status(200).json({
      message: "tạo sản phẩm thành công",
      data: saveProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: "tạo sản phẩm thất bại",
      
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updateProducts = await products.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json(updateProducts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const updateProducts = await products.findByIdAndDelete(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json(updateProducts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};