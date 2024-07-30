import products from "../models/product.js";

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

export const getAllProduct = async (req, res) => {
  try {
    const { nameTitle, ...query } = req.query;
    
    let productsData;
    
    if (nameTitle) {
      // Using a case-insensitive partial matching regex
      productsData = await products.find({
        nameTitle: { $regex: new RegExp(nameTitle.split(' ').join('.*'), 'i') }
      });
    } else {
      productsData = await products.find(query);
    }

    return res.status(200).json({
      message: nameTitle ? "Tìm sản phẩm thành công" : "Lấy sản phẩm thành công",
      data: productsData
    });
    
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
}


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

