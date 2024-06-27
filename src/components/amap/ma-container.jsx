'use client';
import React, { useEffect } from 'react';
import './map-container.css';
import AMapLoader from '@amap/amap-jsapi-loader';
import { Input } from '../ui/input';

const MapContainer = () => {
  let map = null;

  useEffect(() => {
    window._AMapSecurityConfig = {
      securityJsCode: 'a611eefef68f805370bb0a9e06ed7110',
    };
    AMapLoader.load({
      key: '07c64a75cfdd7897e5587a97557a1c67', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [
        'AMap.Scale',
        'AMap.ControlBar',
        'AMap.Geolocation',
        'AMap.AutoComplete',
        'AMap.PlaceSearch',
        'AMap.ToolBar',
      ], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
    })
      .then((AMap) => {
        map = new AMap.Map('container', {
          // 设置地图容器id
          viewMode: '3D', // 是否为3D地图模式
          zoom: 11, // 初始化地图级别
          center: [116.397428, 39.90923], // 初始化地图中心点位置
        });
        const toolbar = new AMap.ToolBar(); //创建工具条插件实例
        map.addControl(toolbar); //添加工具条插件到页面
        const scale = new AMap.Scale();
        map.addControl(scale);
        const autoOptions = {
          //city 限定城市，默认全国
          city: '全球',
          input: 'input_id',
        };
        //实例化AutoComplete
        const autoComplete = new AMap.AutoComplete(autoOptions);
        //根据关键字进行搜索 keyword 为搜索的关键词
        var placeSearch = new AMap.PlaceSearch({
          map: map,
        }); //构造地点查询类
        autoComplete.on('select', select); //注册监听，当选中某条记录时会触发
        function select(e) {
          placeSearch.setCity(e.poi.adcode);
          placeSearch.search(e.poi.name); //关键字查询查询
        }
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {
      map?.destroy();
    };
  }, []);

  return (
    <>
      <div id="container" className="container" style={{ height: '100%' }}></div>
      <Input placeholder="关键词搜索" id="input_id" />
    </>
  );
};
export default MapContainer;
