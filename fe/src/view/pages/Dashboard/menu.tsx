import { Navbar } from "../../../components/Navbar";
import { Header } from "../../../components/Header";

import MenuIcon from "../../../assets/icons/menu.svg";

export function Menu() {
  return (
    <div className="text-white-900 w-full h-full flex justify-center items-center">
      <Navbar />
      <main className="w-full h-full flex flex-col bg-gray-0 p-5">
        <Header title="Cardápio" subtitle="Gerencie os produtos do seu estabelecimento" icon={MenuIcon} />
      </main>
    </div>
  );
}
