import { createProductUseCase } from "../use-case/createProductUseCase.js";
import { listProducts } from "../../src/use-case/listProduct.js";
import { produto1, produto2 } from "../../src/repositories/products.js";
import { produto } from "../usecase/createProductUseCase.test";

const productList = await listProducts();
console.log("Product: ", productList);
console.log (createProductUseCase, produto);
console.log (produto1,produto2)