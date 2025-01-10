import { useEffect, useState } from "react";

import { Navbar } from "../../../components/Navbar";
import { Header } from "../../../components/Header";
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
    <div className="text-white-900 w-full h-full flex justify-center items-center">
      <Navbar />
      <main className="w-full h-full flex flex-col bg-gray-0 p-5">
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
          <div className="h-full p-5">
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

            {activeTab === 'products' ? <MenuTable data={produtcts} /> : <CategorieTable data={categories} />}

            <RefreshModal open={isRefreshModalOpen} onClose={handleCloseRefreshModal}/>
          </div>
        )}
      </main>
    </div>
  );
}
