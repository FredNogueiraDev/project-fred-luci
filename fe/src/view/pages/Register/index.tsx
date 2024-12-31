import { Link } from "react-router-dom";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

export function Register() {
  return (
    <div className="flex flex-col gap-8 w-full items-center">
      <header>
        <h1 className="text-2xl font-medium">
          Crie uma nova conta
        </h1>
      </header>

      <div className="flex flex-col gap-1 w-full items-center px-3">
        <form className="flex flex-col gap-2 w-full">
          <Input
            type="email"
            placeholder="Insira o seu e-mail..."
            maxLength={254}
          />

          <Input
            type="password"
            placeholder="Insira a sua senha..."
            maxLength={20}
          />

          <Input
            type="password"
            placeholder="Repita a sua senha..."
            maxLength={20}
          />

          <Button type="submit">Registrar</Button>
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
