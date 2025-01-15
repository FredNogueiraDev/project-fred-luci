import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";

import HomeIcon from "../../../assets/icons/home.svg";
import Refresh from "../../../assets/icons/refresh.svg";
import { RefreshModal } from "./Modals/RefreshModal";
import { useModalController } from "./Modals/useModalController";


export function Dashboard() {
  const {handleOpenRefreshModal, handleCloseRefreshModal, isRefreshModalOpen} = useModalController();

  return (
    <div className="text-white-900 w-full h-full flex justify-center items-center">
      <Sidebar />
      <main className="w-full h-full flex flex-col bg-gray-0 p-5 ml-24">
      <Header
        title="Home"
        subtitle="Acompanhe os pedidos dos clientes"
        icon={HomeIcon}
        rightAction={{
          text: "Reiniciar o dia",
          href: "#",
          icon: Refresh,
          onClick: handleOpenRefreshModal,
        }}
      />

        <RefreshModal open={isRefreshModalOpen} onClose={handleCloseRefreshModal}/>
      </main>
    </div>
  );
}
