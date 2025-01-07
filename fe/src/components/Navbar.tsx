import { Link, useLocation } from "react-router-dom";

import logo1 from "../assets/logo/temp-logo.svg";
import home from "../assets/icons/home.svg";
import order from "../assets/icons/order.svg";
import menu from "../assets/icons/menu.svg";
import users from "../assets/icons/users.svg";
import profile from "../assets/icons/profile.svg";
import logoff from "../assets/icons/logoff.svg";

import { Spinner } from "./Spinner";

export function Navbar() {
  const isLoading = false;
  const location = useLocation();

  const handleLogout = () => { //TEMPORÁRIO
    localStorage.removeItem("loggedIn");
  };

  const primaryLinks = [
    { to: "/", src: home, alt: "Home", label: "Home" },
    { to: "/orders", src: order, alt: "Histórico", label: "Histórico" },
    { to: "/menu", src: menu, alt: "Cardápio", label: "Cardápio" },
    { to: "/users", src: users, alt: "Usuários", label: "Usuários" },
  ];

  const secondaryLinks = [
    { to: "/profile", src: profile, alt: "Meu Perfil", label: "Meu Perfil" },
    { to: "/login", src: logoff, alt: "Sair", label: "Sair", onClick: handleLogout },
  ];

  return (
    <nav className="h-full min-w-24">
    {
      isLoading && (
        <div className="flex m-full h-full justify-center items-center">
        <Spinner className="h-8 w-8 text-black-300 animate-spin fill-white-300" />
        </div>
      )
    }
    {!isLoading && (
      <div className="flex flex-col justify-around h-full">
        <div className="flex items-center w-full justify-center">
          <Link to="/" >
            <img src={logo1} alt="Logo" className="h-9 w-9" />
          </Link>
        </div>
        <div className="flex flex-col gap-6 items-center">
          {primaryLinks.map(({ to, src, alt, label }) => (
            <Link
              key={to}
              to={to}
              className={`flex flex-col w-14 justify-center items-center gap-2 ${
              location.pathname === to
              ? "text-purple-normal"
              : "text-gray-1 hover:text-purple-darkHover"
              }`}
            >
              <img className="h-6 w-6" src={src} alt={alt} />
              <span className="font-medium text-xs">{label}</span>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-6 items-center">
          {secondaryLinks.map(({ to, src, alt, label, onClick }) => (
            <Link
              key={to}
              to={to}
              onClick={onClick}
              className={`flex flex-col w-14 justify-center items-center gap-2 ${
              location.pathname === to
              ? "text-purple-dark"
              : "text-gray-1 hover:text-purple-darkHover"
              }`}
            >
              <img className="h-6 w-6" src={src} alt={alt} />
              <span className="font-medium text-xs">{label}</span>
            </Link>
          ))}
        </div>

      </div>
    )}
    </nav>
  );
}
