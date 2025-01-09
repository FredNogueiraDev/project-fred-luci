
import { Button } from '../../../../components/Button'
import { Modal } from '../../../../components/Modal'


interface RefreshModalProps {
  open: boolean;
  onClose():void;
}

export function RefreshModal({open, onClose}: RefreshModalProps) {
  const handleSubmit = () => {
    console.log("ok")
  }

  return (
    <Modal
      title="Reiniciar o dia"
      open={open}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center gap-3'>
          <span className="text-black text-center text-base">Ao reiniciar o dia, todos os pedidos
          serão arquivados no status atual.</span>

          <span className="text-black text-center text-base">Deseja reiniciar o dia?</span>
        </div>

        <div className="mt-5 flex gap-4 justify-around items-center">
          <a href="#" onClick={onClose} className='flex w-32 text-purple-normal hover:bg-gray-0 rounded-lg h-[40px] items-center justify-center'>Cancelar</a>
          <Button type="submit" className="w-32 bg-purple-normal rounded-lg border border-white-300 h-[40px]
        text-white font-medium focus-visible:outline-none hover:bg-purple-normalHover
        disabled:bg-purple-normalHover">Continuar</Button>
        </div>
      </form>
    </Modal>
  )
}
