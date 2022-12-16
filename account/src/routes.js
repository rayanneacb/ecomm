import { Router } from 'express';
import { createUserUseCase } from '../src/use-case/createUserAccount.js';
import bcrypt from 'bcryptjs';
export const router = new Router();
router.post('/accounts', function(request, response) {
    const { name, email, password } = request.body;
    const saltRounds = 10;
    const encodedPassword = bcrypt.hashSync(password,saltRounds)
    createUserUseCase(name, email, password)
        .then(createdAccount => {
            delete createdAccount.password
            response.status(201).json(createdAccount)
        })
        .catch(error => {
            response.status(400).json({ status: 'error', message: error.message });
        }); 
});