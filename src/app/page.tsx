
import React from 'react';
import dynamic from 'next/dynamic';
import Nest from '@/components/nest';

export default function Home() {
  
  // const Map = dynamic(() => import('../components/amap'), { ssr: false })

  return (
    <main className="flex h-[100vh]">
      {/* <Map /> */}
      <Nest />
    </main>
  );

}
