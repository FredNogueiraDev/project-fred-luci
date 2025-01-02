import { Link } from "react-router-dom";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { useLoginController } from "./useLoginController";

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
