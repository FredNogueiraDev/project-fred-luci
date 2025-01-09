import { useState } from "react";

export function useModalController() {
  const [isRefreshModalOpen, setIsRefreshModalOpen] = useState(false);

  function handleOpenRefreshModal() {
    setIsRefreshModalOpen(true);
  }

  function handleCloseRefreshModal() {
    setIsRefreshModalOpen(false);
  }

  return {
    handleOpenRefreshModal, handleCloseRefreshModal, isRefreshModalOpen
  }
}
