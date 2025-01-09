interface HeaderProps {
  title?: string
  subtitle?: string
  icon?: string
  textBtn?: string
  hrefBtn?: string
  iconBtn?: string
  onClick():void;
}

export function Header ({ title, subtitle, icon, textBtn, hrefBtn, iconBtn, onClick}: HeaderProps) {
  return (
    <header className="font-medium p-5 flex justify-between items-cente">
      <div className="flex flex-col ">
        <div className="flex gap-2 mb-2">
          <img className="w-7" src={icon} alt={title} />
          <span className="text-xl text-black">{title}</span>
        </div>
        <span className="text-sm font-normal text-gray-1">{subtitle}</span>
      </div>
      <div className="my-auto">
        <a className='flex gap-2 text-purple-normal text-sm' onClick={onClick} href={hrefBtn}>
          <img className="w-5" src={iconBtn} />
          {textBtn}
        </a>
      </div>
    </header>
  )
}
