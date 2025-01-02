import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { authService } from '../../../app/services/authService';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { RegisterParams } from '../../../app/services/authService/register';

const schema = z.object({
  email: z.string()
    .min(1, 'Por favor, insira um endereço de e-mail para se registrar.')
    .email('Por favor, insira um endereço de e-mail válido para se registrar.'),
  password: z.string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres.')
    .max(20, 'A senha não deve exceder 20 caracteres.'),
  confirmPassword: z.string()
}).refine((f) => f.password === f.confirmPassword, {
  path: ['confirmPassword'],
  message: 'As senhas não coincidem.'
});

type FormData = z.infer<typeof schema>;

export function useRegisterController() {
  const navigate = useNavigate();

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: RegisterParams) => {
      return authService.register(data);
    }
  })

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const userCredential  = await mutateAsync(data);
      const user = userCredential.user;

      console.log('Usuário autenticado: ', user)

      toast.success('Sucesso!');
      navigate('/login');
    } catch {
      toast.error('Não foi possível criar o usuário, verifique os dados informados.');
    }
  });

  return { handleSubmit, register, errors, isPending };
}
