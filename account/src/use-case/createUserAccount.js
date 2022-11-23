var accounts = [];
export function createUserUseCase(nome, email, senha){
   function dataAtualFormatada() {
      var data = new Date(),
        dia = data.getDate().toString(),
        diaF = dia.length == 1 ? "0" + dia : dia,
        mes = (data.getMonth() + 1).toString(),
        mesF = mes.length == 1 ? "0" + mes : mes,
        anoF = data.getFullYear();
      return diaF + "/" + mesF + "/" + anoF;
    }  
    const account = {
      id: accounts.length+1,
      name: nome,
      email: email,
      password: senha,
      createdDate: dataAtualFormatada(),
   };
   accounts.push(account)

   return account;
}

