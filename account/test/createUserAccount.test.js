import { createUserUseCase } from "../src/use-case/createUserAccount.js";

const user = createUserUseCase("Rayanne", "rayannefernandacb@gmail.com","1234")
console.log(user)
