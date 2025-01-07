import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { authService } from '../../../app/services/authService';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { LoginParams } from '../../../app/services/authService/login';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  email: z.string()
    .min(1, 'Por favor, insira um endereço de e-mail para o login.')
    .email('Por favor, insira um endereço de e-mail válido para o login.'),

  password: z.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres.')
    .max(20, 'A senha não pode exceder 20 caracteres.')
})

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const navigate = useNavigate();

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: LoginParams) => {
      return authService.loginService(data);
    }
  })

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const userCredential  = await mutateAsync(data);
      const user = userCredential.user;

      console.log('Usuário autenticado: ', user)

      localStorage.setItem("loggedIn", "true");

      toast.success('Sucesso!');
      navigate('/');
    } catch {
      toast.error('Não foi possível efetuar o Login, verifique seu e-mail e senha.');
    }
  });

  return { handleSubmit, register, errors, isPending };
}
