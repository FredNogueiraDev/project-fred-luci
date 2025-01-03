import { Link } from "react-router-dom";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { useLoginController } from "./useLoginController";

import google from "../../../assets/icons/google.svg"
// import facebook from "../../../assets/icons/facebook.svg"

export  function Login() {
  const { handleSubmit, register, errors, isPending } = useLoginController()

  return (
    <div className="flex flex-col gap-8 w-full items-center">
      <header>
        <h1 className="text-2xl font-medium">
          Acesse sua conta
        </h1>
      </header>

      <div className="flex flex-col gap-1 w-full items-center px-3">
        <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Insira o seu e-mail..."
            maxLength={254}
            {...register('email')}
          />
          {errors.email && <span className="text-purple-normal text-xs">{errors.email.message}</span>}

          <Input
            type="password"
            placeholder="Insira a sua senha..."
            maxLength={20}
            {...register('password')}
          />
          {errors.password && <span className="text-purple-normal text-xs">{errors.password.message}</span>}

          <Button isLoading={isPending} type="submit">Entrar</Button>
        </form>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-6 bg-gray-3 border-0" />
          <span className="absolute px-1 font-medium text-gray-3 -translate-x-1/2 bg-white left-1/2">ou</span>
        </div>

        <div className="flex-col w-full space-y-2">
          <a href="#" className="inline-flex items-center text-center justify-center px-3 h-[52px] w-full text-base font-medium text-black rounded-lg bg-white hover:bg-whiteHover border border-black-300">
            <img className="w-5 h-5" src={google} alt="Login com Google" />
            <span className="w-full">Continue com Google</span>
          </a>
          {/* <a href="#" className="inline-flex items-center text-center justify-center px-3 h-[52px] w-full text-base font-medium text-black rounded-lg bg-white hover:bg-whiteHover border border-black-300">
            <img className="w-5 h-5" src={facebook} alt="Login com Facebook" />
            <span className="w-full">Continue com Facebook</span>
          </a> */}
        </div>


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
