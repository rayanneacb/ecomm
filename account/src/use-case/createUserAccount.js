import { saveAccount } from '../../repositories/accountRepository';
import  bcrypt from 'bcryptjs';
import { randomUUID } from 'crypto';

export async function createUserUseCase(name, email, password) {
    
    const id = randomUUID();
    const createdDate = new Date().toISOString().substring(0,10);
    const passHash = bcrypt.hashSync(password, 10);

    const user = {
         id,
         name,
         email,
         password: passHash,
         createdDate
    };
    
    saveAccount(user);
    return user;
}

