'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Nest = () => {
  const [params, setParams] = useState(null);

  const getParams = async () => {
    try {
      const res = await axios.post('http://localhost:3000/person/create', {
        name: '名字',
        age: 20
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

  return <h1>{params}</h1>;
};

export default Nest;
