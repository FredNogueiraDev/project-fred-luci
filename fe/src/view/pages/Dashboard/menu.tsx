import { useEffect, useState } from "react";

import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Flex, Spinner, TabNav } from "@radix-ui/themes";
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
    },
    {
      id: 2,
      image: { img },
      title: "Marguerita",
      category: "🍕 Pizza",
      price: "R$ 43,00",
    },
    {
      id: 3,
      image: { img },
      title: "Mussarela",
      category: "🍕 Pizza",
      price: "R$ 41,00",
    },
    {
      id: 4,
      image: { img },
      title: "Calabresa",
      category: "🍕 Pizza",
      price: "R$ 70,00",
    },
    {
      id: 5,
      image: { img },
      title: "Marinara",
      category: "🍕 Pizza",
      price: "R$ 21,00",
    },
    {
      id: 6,
      image: { img },
      title: "Portuguesa",
      category: "🍕 Pizza",
      price: "R$ 50,00",
    },
    {
      id: 7,
      image: { img },
      title: "Frango com Catupiry",
      category: "🍕 Pizza",
      price: "R$ 55,00",
    },
    {
      id: 8,
      image: { img },
      title: "Pepperoni",
      category: "🍕 Pizza",
      price: "R$ 60,00",
    },
    {
      id: 9,
      image: { img },
      title: "Napolitana",
      category: "🍕 Pizza",
      price: "R$ 45,00",
    },
    {
      id: 10,
      image: { img },
      title: "Rúcula com Tomate Seco",
      category: "🍕 Pizza",
      price: "R$ 52,00",
    },
    {
      id: 11,
      image: { img },
      title: "Baiana",
      category: "🍕 Pizza",
      price: "R$ 48,00",
    },
    {
      id: 12,
      image: { img },
      title: "Brócolis com Bacon",
      category: "🍕 Pizza",
      price: "R$ 53,00",
    },
    {
      id: 13,
      image: { img },
      title: "Palmito",
      category: "🍕 Pizza",
      price: "R$ 46,00",
    },
    {
      id: 14,
      image: { img },
      title: "Carne Seca com Catupiry",
      category: "🍕 Pizza",
      price: "R$ 58,00",
    },
    {
      id: 15,
      image: { img },
      title: "Vegetariana",
      category: "🍕 Pizza",
      price: "R$ 47,00",
    },
    {
      id: 16,
      image: { img },
      title: "Toscana",
      category: "🍕 Pizza",
      price: "R$ 49,00",
    },
    {
      id: 17,
      image: { img },
      title: "Mexicana",
      category: "🍕 Pizza",
      price: "R$ 54,00",
    },
    {
      id: 18,
      image: { img },
      title: "Alho e Óleo",
      category: "🍕 Pizza",
      price: "R$ 42,00",
    },
    {
      id: 19,
      image: { img },
      title: "Provolone",
      category: "🍕 Pizza",
      price: "R$ 51,00",
    },
    {
      id: 20,
      image: { img },
      title: "Camarão",
      category: "🍕 Pizza",
      price: "R$ 75,00",
    }
  ]);

  const [categories, setCategories] = useState([
    {
      id: 1,
      image: { img },
      title: "Pizza",
      icon: "🍕",
    },
    {
      id: 2,
      image: { img },
      title: "Hambúrguer",
      icon: "🍔",
    },
    {
      id: 3,
      image: { img },
      title: "Outros",
      icon: "🍟",
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
          <div className="flex m-full h-full justify-center items-center">
            <Spinner className="h-8 w-8 text-black-300 animate-spin fill-white-300" />
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
