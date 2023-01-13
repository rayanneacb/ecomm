import  { Product } from '../models/models/product.js'
import { ProductImage } from '../models/models/productimage.js'
import { ProductFeture } from '../models/models/productfeture.js'
export async function saveProduct(produtos) {
    const createdProduct = await Product.create(produtos);
    await createdProduct.save();
    return createdProduct;
}
export async function findProducts(){
const produtos= await Product.findAll({include : [
    {
           model: ProductFeture,
            as: 'fetures'
    }, {
        model: ProductImage,
        as: 'images'
 }]
});
 return produtos;
}