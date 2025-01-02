import { sleep } from "../../utils/sleep";
import { login } from "../../../Services/auth";

export interface LoginParams {
  email: string;
  password: string;
}

export async function loginService(params: LoginParams){
  await sleep(3)

  const userCredential = await login(params.email, params.password)

  return userCredential;
}
