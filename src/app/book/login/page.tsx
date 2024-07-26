'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { LabelProps } from '@radix-ui/react-label';
import { JSX, RefAttributes } from 'react';

const FormSchema = z.object({
  userName: z.string().min(2, {
    message: '用户名至少2个字符',
  }),
  password: z.string().min(6, {
    message: '密码至少6个字符',
  }),
  rePassword: z.string().optional(),
});

const ItemLabel = (
  s: JSX.IntrinsicAttributes &
    Omit<LabelProps & RefAttributes<HTMLLabelElement>, 'ref'> &
    RefAttributes<HTMLLabelElement>,
) => {
  return (
    <FormLabel
      className="w-24 text-base text-slate-600 font-semibold text-right pr-3 pt-2"
      {...s}
    />
  );
};

const Login = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userName: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const res = await axios.post('http://localhost:3000/user/login', {
        userName: data.userName,
        password: data.password,
      });
      if (res.status === 201 || res.status === 200) {
        toast({
          title: '登录成功，即将跳转',
        });
        setTimeout(() => {
          window.location.href = '/book';
        }, 1000);
      } else {
        toast({
          variant: 'destructive',
          title: '登录失败',
          description: res.message,
        });
      }
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: '登录失败',
        description: error.response.data.message,
      });
    }
  };

  return (
    <div className="mt-24 mb-0 ml-auto mr-auto text-center ">
      <h1 className="text-5xl">图书管理系统</h1>
      <div className="w-128 mt-10 ml-auto mr-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <ItemLabel>用户名:</ItemLabel>
                  <div className="flex-1">
                    <FormControl>
                      <Input placeholder="请输入用户名" {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <ItemLabel>密码:</ItemLabel>
                  <div className="flex-1">
                    <FormControl>
                      <Input type="password" placeholder="请输入密码" {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <div className="text-center">
              <a className='text-[#1E80FF]' href="register">没有账号？去注册</a>
            </div>
            <Button type="submit" className="w-128">
              登录
            </Button>
          </form>
        </Form>
        <Toaster />
      </div>
    </div>
  );
};

export default Login;
