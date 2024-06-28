'use client';
import React, { useEffect } from 'react';
import './map-container.css';
import { Input } from '../ui/input';
import {creatMap} from './ma-container';
import { getTodo, addTodo } from './store';
import { Button } from '../ui/button';

const MapContainer = () => {
  const [value, setValue] = React.useState(''); 
  useEffect(() => {
   console.log(1)
    getData();
    creatMap();
  }, []);

  const getData = async () => {
    const res = await getTodo();
    console.log(res);
  };

  const onSave = () => {
    console.log(value)
    addTodo({name: value, age: 12})
  }

  

  return (
    <>
      <div id="container" className="container" style={{ height: '100%' }}></div>
      <div className='input-selcet'>
      <Input placeholder="关键词搜索" id="input_id" onChange={(e) => setValue(e.target.value)} value={value} />
      <Button type="submit" onClick={onSave}>保存</Button>
      </div>
    </>
  );
};
export default MapContainer;
