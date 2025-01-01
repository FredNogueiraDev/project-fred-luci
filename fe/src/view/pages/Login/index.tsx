import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from "../../../Services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [,setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user;
    console.log('Usuário autenticado: ', user)

    navigate('/dashboard');
  } catch (err: any){
    setError(err.message);

    console.log('ERRO: ', err.message)
  };
};

  return (
    <div className="flex flex-col gap-8 w-full items-center">
      <header>
        <h1 className="text-2xl font-medium">
          Acesse sua conta
        </h1>
      </header>

      <div className="flex flex-col gap-1 w-full items-center px-3">
        <form className="flex flex-col gap-2 w-full" onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Insira o seu e-mail..."
            maxLength={254}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Insira a sua senha..."
            maxLength={20}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit">Entrar</Button>
        </form>

        <p className="space-x-2 mt-3">
          <span className="text-black-300 text-sm font-regular">
            Não possui conta?
          </span>
          <Link
            to="/register"
            className="text-white-900 text-sm font-regular text-decoration-line: underline"
          >
            Cadastre-se aqui
          </Link>
        </p>
      </div>
    </div>
  )
}
