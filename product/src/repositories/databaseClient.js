import { Sequelize } from 'sequelize';
const client = new Sequelize('mysql://root:caixa162004!@product_db:3307/products');
export default client;