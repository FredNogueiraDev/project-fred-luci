import { auth } from "../../../Services/firebase";
import { createUser } from "../../../Services/auth";

export interface RegisterParams {
  email: string;
  password: string;
}

export async function register(params: RegisterParams){
  const userCredential = await createUser(auth, params.email, params.password)

  return userCredential;
}
