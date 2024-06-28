'use client';
import React, { useEffect } from 'react';
import './map-container.css';
import AMapLoader from '@amap/amap-jsapi-loader';
import { Input } from '../ui/input';
import {creatMap} from './ma-container';

const MapContainer = () => {

  useEffect(() => {
    creatMap();
  }, []);

  return (
    <>
      <div id="container" className="container" style={{ height: '100%' }}></div>
      <Input placeholder="关键词搜索" id="input_id" />
    </>
  );
};
export default MapContainer;
