import { saveAccount } from "../../repositories/accountRepository.js";

export  async function createUserUseCase(nome, email, senha){
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

