'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '../ui/button';
import { Toaster } from '../ui/sonner';

const Nest = () => {
  const [params, setParams] = useState(null);

  const getParams = async () => {
    try {
      const res = await axios.post('http://localhost:3000/person/create', {
        name: '名字',
        age: 20.111
      });
      if (res?.data) {
        setParams(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getParams();
  }, []);

  const del = async () => {
    try {
      const res = await axios.post('http://localhost:3000/person/del', {
        id: '1'
      });
      if (res?.success) {
        Toaster('删除成功');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <div>
    <h1>{params}</h1>
    <Button type="button" onClick={del}>删除</Button>
  </div>;
};

export default Nest;
