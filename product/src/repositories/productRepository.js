import  { Produtos } from '../models/produtos.js'
 export async function saveProduct(produtos) {
    const createdProduct = await Produtos.create(produtos);
    await createdProduct.save();
    return createdProduct;
}
export async function findProducts(){
    return [];
}