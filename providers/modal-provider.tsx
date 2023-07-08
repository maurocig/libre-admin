"use client";

import StoreModal from "@/components/modals/store-modal";

import { useEffect, useState } from "react";

type modalProviderProps = {};

export function ModalProvider() {
  // Avoid server sync errors when using modals on server components.
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <StoreModal />;
}
