import { Sequelize } from 'sequelize';
const client = new Sequelize('mysql://root:root@mysqldb:3307/product');
export default client;