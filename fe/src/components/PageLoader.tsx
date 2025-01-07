import logo from '../assets/logo/temp-logo-white.svg';

export function PageLoader(){
  return (
    <div className="w-full h-full flex justify-center items-center bg-purple-dark">
      <div className="flex flex-col justify-center items-center gap-3">
        <img src={logo} alt="Logo" className="w-14 h-14" />
        <div className="flex text-purple-light text-lg">
          <span className="font-bold">PROJETO</span> <span>MILHÃO</span>
        </div>
      </div>
    </div>
  )
}
