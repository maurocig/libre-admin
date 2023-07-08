import { create } from "zustand";

type State = {
  isOpen: boolean;
};

type Actions = {
  onOpen: () => void;
  onClose: () => void;
};

export const useStoreModal = create<State & Actions>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
