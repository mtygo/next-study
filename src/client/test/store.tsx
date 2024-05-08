import React from 'react';
import { create } from 'zustand';
import prisma from '@/app/prisma';

/**
 * @name useStore
 * @param {null} remark
 */
const useStore = create((set) => ({
  data: [],
  getData: (value: any) => set(() => ({ data: value })),
}));

export { useStore };
