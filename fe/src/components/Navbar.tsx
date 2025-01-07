import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logo/temp-logo.svg";

import { HomeIcon } from "../assets/icons/icons_svg/home";
import { OrderIcon } from "../assets/icons/icons_svg/order";
import { MenuIcon } from "../assets/icons/icons_svg/menu";
import { UsersIcon } from "../assets/icons/icons_svg/users";
import { ProfileIcon } from "../assets/icons/icons_svg/profile";
import { LogoffIcon } from "../assets/icons/icons_svg/logoff";

export function Navbar() {
  const isLoading = false; //TEMPORÁRIO
  const location = useLocation();

  const handleLogout = () => { //TEMPORÁRIO
    localStorage.removeItem("loggedIn");
  };

  const primaryLinks = [
    { to: "/", Icon: HomeIcon, alt: "Home", label: "Home" },
    { to: "/orders", Icon: OrderIcon, alt: "Histórico", label: "Histórico"},
    { to: "/menu", Icon: MenuIcon, alt: "Cardápio", label: "Cardápio" },
    { to: "/users", Icon: UsersIcon, alt: "Usuários", label: "Usuários" },
  ];

  const secondaryLinks = [
    { to: "/profile", Icon: ProfileIcon, alt: "Meu Perfil", label: "Meu Perfil" },
    { to: "/login", Icon: LogoffIcon, alt: "Sair", label: "Sair", onClick: handleLogout },
  ];

  return (
    <nav className="h-full min-w-24">
    {
      isLoading && (
        <div className="flex flex-col h-full w-full animate-pulse justify-center gap-6 items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <div className="h-11 w-11 bg-gray-0 rounded col-span-2 my-2 mx-auto"></div>
              <div className="h-5 w-20 bg-gray-0 rounded col-span-2"></div>
            </div>
          ))}
        </div>
      )
    }
    {!isLoading && (
      <div className="flex flex-col justify-around h-full">
        <div className="flex items-center w-full justify-center">
          <Link to="/" >
            <img src={logo} alt="Logo" className="h-9 w-9" />
          </Link>
        </div>
        <div className="flex flex-col gap-6 items-center">

        {primaryLinks.map(({ to, Icon, alt, label }) => (
          <Link
            key={to}
            to={to}
            className={`flex flex-col w-14 justify-center items-center gap-2 ${
              location.pathname === to
                ? "text-purple-normal"
                : "text-gray-1 hover:text-purple-normal"
            }`}
          >
            <Icon className="h-6 w-6" aria-label={alt} />
            <span className="font-medium text-xs">{label}</span>
          </Link>
        ))}


        </div>
        <div className="flex flex-col gap-6 items-center">
          {secondaryLinks.map(({ to, Icon, alt, label, onClick }) => (
            <Link
              key={to}
              to={to}
              onClick={onClick}
              className={`flex flex-col w-14 justify-center items-center gap-2 ${
              location.pathname === to
              ? "text-purple-normal"
              : "text-gray-1 hover:text-purple-normal"
              }`}
            >
            <Icon className="h-6 w-6" aria-label={alt} />
            <span className="font-medium text-xs">{label}</span>
            </Link>
          ))}
        </div>

      </div>
    )}
    </nav>
  );
}
