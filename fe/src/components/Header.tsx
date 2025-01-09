interface RightAction {
  text?: string;
  href?: string;
  icon?: string;
  onClick?: () => void;
}

interface HeaderProps {
  title?: string;
  subtitle?: string;
  icon?: string;
  rightAction?: RightAction;
}

export function Header({ title, subtitle, icon, rightAction }: HeaderProps) {
  return (
    <header className="font-medium p-5 flex justify-between items-center">
      <div className="flex flex-col">
        <div className="flex gap-2 mb-2">
          {icon && <img className="w-7" src={icon} alt={title} />}
          <span className="text-xl text-black">{title}</span>
        </div>
        <span className="text-sm font-normal text-gray-1">{subtitle}</span>
      </div>
      {rightAction && (
        <div className="my-auto">
          <a
            className="flex gap-2 text-purple-normal text-sm"
            href={rightAction.href}
            onClick={rightAction.onClick}
          >
            {rightAction.icon && <img className="w-5" src={rightAction.icon} alt={rightAction.text} />}
            {rightAction.text}
          </a>
        </div>
      )}
    </header>
  );
}
