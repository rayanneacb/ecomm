import { saveAccount } from '../../repositories/accountRepository';
import { existsAccountByEmail } from '../../repositories/accountRepository';
import { hashPassword } from '../helpers/password.js';

export async function createUserUseCase(name, email, password) {

    const accountAlreadyExists = await existsAccountByEmail(email);


    if(accountAlreadyExists) {
        console.error('Account already exists', email);
        throw new Error('Account already exists');
    }

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
