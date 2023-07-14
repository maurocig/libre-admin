"use client";

import { useEffect, useState } from "react";

import StoreModal from "@/components/modals/StoreModal";

type modalProviderProps = {};

export function ModalProvider() {
  // Avoid server sync errors when using modals on server components:
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If the component is not mounted, it means it's running on the server. we won't run any modals on the server side. That way we avoid synchronization issues.
  if (!isMounted) {
    return null;
  }

  return <StoreModal />;
}
