import { useState } from "react";

export function useModalController() {
  const [isRefreshModalOpen, setIsRefreshModalOpen] = useState(false);
  const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{ id?: number; title?: string }>({});

  function handleOpenRefreshModal() {
    setIsRefreshModalOpen(true);
  }

  function handleCloseRefreshModal() {
    setIsRefreshModalOpen(false);
  }

  function handleOpenCategoriesModal(id?: number, title?: string) {
    setSelectedCategory({ id, title });
    setIsCategoriesModalOpen(true);
  }

  function handleCloseCategoriesModal() {
    setIsCategoriesModalOpen(false);
  }

  return {
    handleOpenRefreshModal,
    handleCloseRefreshModal,
    isRefreshModalOpen,
    handleOpenCategoriesModal,
    handleCloseCategoriesModal,
    isCategoriesModalOpen,
    selectedCategory
  }
}
