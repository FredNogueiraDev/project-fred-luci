import { Navbar } from "../../../components/Navbar";
import { Header } from "../../../components/Header";

import ProfileIcon from "../../../assets/icons/profile.svg";

export function Profile() {
  return (
    <div className="text-white-900 w-full h-full flex justify-center items-center">
      <Navbar />
      <main className="w-full h-full flex flex-col bg-gray-0 p-5">
        <Header title="Meu Perfil" subtitle="Gerencie e atualize os dados da casa" icon={ProfileIcon} />
      </main>
    </div>
  );
}
