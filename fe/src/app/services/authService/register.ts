import { createUser } from "../../../Services/auth";

export interface RegisterParams {
  email: string;
  password: string;
}

export async function register(params: RegisterParams){
  const userCredential = await createUser(params.email, params.password)

  return userCredential;
}
