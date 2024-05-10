import { create } from 'zustand';
import { Product } from '../types';


interface EditModalState {
    openEditModal: boolean;
    setOpenEditModalTrue: () => void;
    setOpenEditModalFalse: () => void;
    selectedItemToEdit:  Product | null; // Define ItemType appropriately
    setSelectedItemToEdit: (item:  Product) => void;
    userDetails:any,
    setUserDetails: (item:  any) => void;
}

export const useStore = create<EditModalState>((set) => ({
  openEditModal: false,
  selectedItemToEdit: null,
  userDetails:{},
  setOpenEditModalTrue: () => set({ openEditModal: true }),
  setOpenEditModalFalse: () => set({ openEditModal: false }),
  setSelectedItemToEdit: (item:  Product) => set({ selectedItemToEdit: item }),
  setUserDetails: (details:  any) => set({ userDetails: details }),

})); 