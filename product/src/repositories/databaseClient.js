import { Sequelize } from 'sequelize';
const client = new Sequelize('mysql://root:caixa162004!@product_db/products');
export default client;