import { Link } from "react-router-dom";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { useRegisterController } from './useRegisterController';

export function Register() {
    const { handleSubmit, register, errors, isPending } = useRegisterController()

  return (
    <div className="flex flex-col gap-8 w-full items-center">
      <header>
        <h1 className="text-xl font-medium">
          Crie uma nova conta
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

          <Input
            type="password"
            placeholder="Repita a sua senha..."
            maxLength={20}
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && <span className="text-purple-normal text-xs">{errors.confirmPassword.message}</span>}

          <Button isLoading={isPending} type="submit">Registrar</Button>
        </form>

        <p className="space-x-2 mt-3">
          <span className="text-black-300 text-sm font-regular">
            Já possui conta?
          </span>
          <Link
            to="/login"
            className="text-white-900 text-sm font-regular text-decoration-line: underline"
          >
            Faça seu login aqui.
          </Link>
        </p>
      </div>
    </div>
  )
}
