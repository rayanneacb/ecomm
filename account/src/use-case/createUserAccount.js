var accounts = [];
export function createUserUseCase(nome, email, senha){
   const data = new Date();
   let dataFormatada = data.toISOString().substring(0, 10);
   console.log(dataFormatada);
    const account = {
      id: accounts.length+1,
      name: nome,
      email: email,
      password: senha,
      createdDate: dataFormatada,
   };
   accounts.push(account)

   return account;
}

