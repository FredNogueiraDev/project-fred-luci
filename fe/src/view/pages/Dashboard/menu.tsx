import { useEffect, useState } from "react";

import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Flex, TabNav } from "@radix-ui/themes";
import { MenuTable } from "./Tables/MenuTable";
import { CategorieTable } from "./Tables/CategorieTable";

import { useModalController } from "./Modals/useModalController";
import { RefreshModal } from "./Modals/RefreshModal";

import img from "../../../assets/images/img.png";
import MenuIcon from "../../../assets/icons/menu.svg";

export function Menu() {
  const {handleOpenRefreshModal, handleCloseRefreshModal, isRefreshModalOpen} = useModalController();
  const [activeTab, setActiveTab] = useState('products');

  const isLoading = false;

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setActiveTab(hash || 'products');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const [produtcts, setProdutcts] = useState([
    {
      id: 1,
      image: { img },
      title: "Quatro Queijos",
      category: "🍕 Pizza",
      price: "R$ 40,00",
      availability: true,
      rating: 4.5,
    },
    {
      id: 2,
      image: { img },
      title: "Marguerita",
      category: "🍕 Pizza",
      price: "R$ 43,00",
      availability: true,
      rating: 4.8,
    },
    {
      id: 3,
      image: { img },
      title: "Mussarela",
      category: "🍕 Pizza",
      price: "R$ 41,00",
      availability: true,
      rating: 4.3,
    },
    {
      id: 4,
      image: { img },
      title: "Calabresa",
      category: "🍕 Pizza",
      price: "R$ 70,00",
      availability: true,
      rating: 4.7,
    },
    {
      id: 5,
      image: { img },
      title: "Marinara",
      category: "🍕 Pizza",
      price: "R$ 21,00",
      availability: true,
      rating: 3.9,
    },
    {
      id: 6,
      image: { img },
      title: "Portuguesa",
      category: "🍕 Pizza",
      price: "R$ 50,00",
      availability: true,
      rating: 4.2,
    },
    {
      id: 7,
      image: { img },
      title: "Frango com Catupiry",
      category: "🍕 Pizza",
      price: "R$ 55,00",
      availability: true,
      rating: 4.6,
    },
    {
      id: 8,
      image: { img },
      title: "Pepperoni",
      category: "🍕 Pizza",
      price: "R$ 60,00",
      availability: false,
      rating: 4.9,
    },
    {
      id: 9,
      image: { img },
      title: "Napolitana",
      category: "🍕 Pizza",
      price: "R$ 45,00",
      availability: true,
      rating: 4.4,
    },
    {
      id: 10,
      image: { img },
      title: "Rúcula com Tomate Seco",
      category: "🍕 Pizza",
      price: "R$ 52,00",
      availability: true,
      rating: 4.0,
    }
  ]);

  const [categories, setCategories] = useState([
    {
      id: 1,
      image: { img },
      title: "🍕 Pizza",
    },
    {
      id: 2,
      image: { img },
      title: "🍔 Hambúrguer",
    },
    {
      id: 3,
      image: { img },
      title: "🍟 Outros",
    },
  ]);

  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <main className="w-full flex flex-col bg-gray-0 pt-5 px-5 ml-24 overflow-y-auto">
        <Header
          title="Cardápio"
          subtitle="Gerencie os produtos do seu estabelecimento"
          icon={MenuIcon}
        />

        {isLoading && (
          <div className="flex flex-col m-full h-full justify-center animate-pulse mx-5">
              <div className="flex gap-3">
                <div className="h-7 w-[10vw] bg-gray-0 rounded col-span-2 my-1"></div>
                <div className="h-7 w-[5vw] bg-gray-0 rounded col-span-2 my-1"></div>
              </div>
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index}>
                  <div className="h-11 w-[85vw] bg-gray-0 rounded col-span-2 my-1 "></div>
                </div>
              ))}
          </div>
        )}

        {!isLoading && (
          <div className="h-auto">
            <Flex direction="column" gap="4" pb="2" className="mb-6">
              <TabNav.Root size="2" color="purple">
                <TabNav.Link href="#products" className={activeTab === 'products' ? '!text-purple-normal !font-medium' : ''}>
                  Produtos
                </TabNav.Link>

                <TabNav.Link href="#categories" className={activeTab === 'categories' ? '!text-purple-normal !font-medium' : ''}>
                  Categorias
                </TabNav.Link>
              </TabNav.Root>
            </Flex>

            <div className="flex justify-between">
              <div className="flex gap-2 font-medium text-base">
                <span>{activeTab === 'products' ? 'Produtos' : 'Categorias'}</span>
                  <div className="flex justify-center text-center bg-gray-0 w-6 h-6 rounded-lg">
                    {activeTab === 'products' ? <span>{produtcts.length}</span> : <span>{categories.length}</span>}
                </div>
              </div>
              <a className="font-medium text-purple-normal text-sm" href="#" onClick={handleOpenRefreshModal}>
                {activeTab === 'products' ? 'Novo Produto' : 'Nova Categoria'}
              </a>
            </div>

            <div className="min-h-[64vh]">
              {activeTab === 'products' ? <MenuTable data={produtcts} /> : <CategorieTable data={categories} />}
            </div>

            <RefreshModal open={isRefreshModalOpen} onClose={handleCloseRefreshModal}/>
            <Footer />
          </div>
        )}
      </main>
    </div>
  );
}
