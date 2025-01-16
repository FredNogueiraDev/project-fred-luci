
import { Button } from '../../../../components/Button'
import { Input } from '../../../../components/Input';
import { Modal } from '../../../../components/Modal'

interface categoriesModalProps {
  open: boolean;
  onClose():void;
  categoryId?: number;
  categoryTitle?: string;
}

export function CategoriesModal({open, onClose, categoryId, categoryTitle}: categoriesModalProps) {
  const handleSubmit = () => {
    console.log("ok")
  }

  return (
    <Modal
      title={categoryId === undefined ? "Nova Categoria" : "Editar Categoria"}
      open={open}
      onClose={onClose}
    >

      <form onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center gap-3'>
        <Input
            type="txt"
            placeholder="Nome da Categoria"
            maxLength={50}
            defaultValue={categoryTitle}
          />
        </div>

        <div className="mt-5 flex gap-4 justify-around items-center">
          <a href="#categories" onClick={onClose} className='flex w-32 text-purple-normal hover:bg-gray-0 rounded-lg h-[40px] items-center justify-center'>Cancelar</a>
          <Button type="submit" className="w-32 bg-purple-normal rounded-lg border border-white-300 h-[40px]
        text-white font-medium focus-visible:outline-none hover:bg-purple-normalHover
        disabled:bg-purple-normalHover">Continuar</Button>
        </div>
      </form>
    </Modal>
  )
}
