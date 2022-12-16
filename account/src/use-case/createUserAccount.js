import { saveAccount } from "../../repositories/accountRepository.js";

export  async function createUserUseCase(nome, email, senha){
  /* const bcrypt = require ('bcrypt')
   const crypto = require ('crypto')
    const salt = bcrypt.genSaltSync(10)
    const senhaParaSalvar = bcrypt.hashSync(password, salt) */
   const data = new Date();
   let dataFormatada = data.toISOString().substring(0, 10);
   console.log(dataFormatada);
    const user = {
      name: nome,
      email: email,
      password: senha,
      createdDate: dataFormatada,
   }
   saveAccount(user);
   return (user)
}

