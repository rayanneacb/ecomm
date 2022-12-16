import { listProducts } from "../../use-case/listProducts.js";


const productList = await listProducts();
console.log("Product: ", productList);
