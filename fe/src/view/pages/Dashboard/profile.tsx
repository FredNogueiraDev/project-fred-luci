import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";

import ProfileIcon from "../../../assets/icons/profile.svg";

export function Profile() {
  return (
    <div className="text-white-900 w-full h-full flex justify-center items-center">
      <Sidebar />
      <main className="w-full h-full flex flex-col bg-gray-0 p-5 ml-24">
        <Header title="Meu Perfil" subtitle="Gerencie e atualize os dados da casa" icon={ProfileIcon} />
      </main>
    </div>
  );
}
