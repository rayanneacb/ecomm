import { saveAccount } from '../../repositories/accountRepository';
import bcrypt from 'bcryptjs';
import { randomUUID } from 'crypto';
import { hashPassword } from '../helpers/password.js';
import { saveAccount } from '../../repositories/accountRepository';


export async function createUserUseCase(name, email, password) {

    const id = randomUUID();

    const createdDate = new Date().toISOString().substring(0, 10);
    const hashedPassword = await hashPassword(password);
    const user = {
        id,
        name,
        email,
        password: hashedPassword,
        createdDate
    };

    saveAccount(user);
    return user;
}
