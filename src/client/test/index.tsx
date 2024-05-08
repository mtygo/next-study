'use client';

import { useCallback } from 'react';
import { addTodo } from './data';
import { deploy, getTodo } from '@/client/test/data';
import { useStore } from '@/client/test/store';
interface IndexProps {
  getTodos: () => void;
  id: string;
}
const Form: React.FC<IndexProps> = ({ getTodos }) => {
  const submit = useCallback(async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    await addTodo({
      name: formData.get('name') as string,
      time: formData.get('time') as string,
    });
    getTodos();
  }, []);

  return (
    <form className="flex items-center space-x-3" onSubmit={submit}>
      <input name="name" className="w-48 border rounded px-2" placeholder="请输入任务名称" />
      <input name="time" className="w-48 border rounded px-2" placeholder="请输入执行时间" />
      <button type="submit" className="border rounded px-2 min-w-16">
        添加
      </button>
    </form>
  );
};

const Del: React.FC<IndexProps> = ({ getTodos, id }) => {
  return (
    <span
      className="text-red-500 mx-4"
      onClick={() => {
        deploy(id);
        getTodos();
      }}
    >
      删除
    </span>
  );
};

export { Form, Del };
