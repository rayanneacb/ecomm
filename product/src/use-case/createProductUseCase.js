import { randomUUID } from 'crypto';
import {saveProduct} from '../repositories/productRepository.js';
export async function createProductUseCase(produto) {
   // const usuarioId = randomUUID();
   // const data = new Date();
    //let dataFormatada = data.toISOString().substring(0, 10);
    //console.log(dataFormatada);
    //const createProduct = produto
    //produto.usuarioId = usuarioId;
    //produto.dataFormatada = dataFormatada
    
    await saveProduct(produto)
    return produto;

}
