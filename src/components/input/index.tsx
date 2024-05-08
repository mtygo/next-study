"use client";
import React from 'react';
import { useStore } from './store';
import { Input } from '@/components/ui/input';

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  const remark = useStore((state: any) => state.remark);
  const onRemarkChenge = useStore((state: any) => state.onRemarkChenge);

  return (
    <div>
      <div style={{ margin: '10px' }}>remark: {remark}</div>
      <Input type="email" onChange={(e) => onRemarkChenge(e.target.value)} placeholder="Email" />
    </div>
  );
};

export default Index;
