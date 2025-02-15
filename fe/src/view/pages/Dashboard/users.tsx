import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";

import UserIcon from "../../../assets/icons/users.svg";

export function Users() {
  return (
    <div className="text-white-900 w-full h-full flex justify-center items-center">
      <Sidebar />
      <main className="w-full h-full flex flex-col bg-gray-0 p-5 ml-24">
        <Header title="Usuários" subtitle="Cadastre e gerencie seus usuários" icon={UserIcon} />
      </main>
    </div>
  );
}
