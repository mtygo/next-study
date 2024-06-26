
import React from 'react';
import dynamic from 'next/dynamic';

export default function Home() {
  
  const Map = dynamic(() => import('../components/amap'), { ssr: false })

  return (
    <main className="flex h-[100vh]">
      <Map />
    </main>
  );

}
