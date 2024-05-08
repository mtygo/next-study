'use client';
import { Form, Del } from '@/client/test';
import dayjs from 'dayjs';
import { useStore } from '@/client/test/store';
import { getTodo } from '@/client/test/data';
import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import {DataTableDemo} from '@/components/table';
import InputIndex from '@/components/input';

const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-3 mb-10">
      <Skeleton className="h-[125px] w-[400px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[400px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
    </div>
  );
}

export default function Home() {
  const data = useStore((state: any) => state.data);
  const set = useStore((state: any) => state.getData);

  const getTodos = async () => {
    const data = await getTodo();
    set(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const dataRender = () => {
    if (data.length) {
      return (
        <ul className="mb-4 px-3">
          {data.map((item: any) => (
            <li key={item.id}>
              <span className="text-sky-500">{item.time}</span>
              <span className="mx-2">执行</span>
              <span className="text-orange-500">{item.name}</span>
              <span className="mx-2">创建时间：</span>
              <span>{dayjs(item.created).format('YYYY-MM-DD HH:mm')}</span>
              <Del getTodos={getTodos} id={item.id} />
            </li>
          ))}
        </ul>
      );
    } else {
      return <SkeletonCard />;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-10 mx-auto w-[600px]">
        {dataRender()}
        <Form getTodos={getTodos} id={''} />
        <DataTableDemo />
        <InputIndex />
      </div>
    </main>
  );
}
