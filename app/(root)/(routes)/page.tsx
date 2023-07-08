"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

export default function SetupPage() {
  /* // this is weird because of useEffect requirements (?) */
  /*  const onOpen = useStoreModal((state) => state.onOpen); */
  /*  const isOpen = useStoreModal((state) => state.isOpen); */

  // this works fine apparently
  const { isOpen, onOpen } = useStoreModal();

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
}
