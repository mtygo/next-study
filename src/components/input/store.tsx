import React from 'react';
import { create } from 'zustand';


/**
 * @name useStore
 * @param {null} remark
 */
const useStore = create((set) => ({
  remark: null,
  onRemarkChenge: (value: any) => set(() => ({ remark: value })),
}));

export { useStore };
