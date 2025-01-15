import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";

import OrderIcon from "../../../assets/icons/order.svg";

export function Orders() {
  return (
    <div className="text-white-900 w-full h-full flex justify-center items-center">
      <Sidebar />
      <main className="w-full h-full flex flex-col bg-gray-0 p-5 ml-24">
        <Header title="Histórico" subtitle="Visualize pedidos anteriores" icon={OrderIcon}/>
      </main>
    </div>
  );
}
