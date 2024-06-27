'use client';
import React, { useEffect } from "react";
import "./map-container.css";
import AMapLoader from "@amap/amap-jsapi-loader";

const MapContainer = () => {
  let map: { destroy: () => void; } | null = null;

  useEffect(() => {
    window._AMapSecurityConfig = {
      securityJsCode: "a611eefef68f805370bb0a9e06ed7110",
    };
    AMapLoader.load({
      key: "07c64a75cfdd7897e5587a97557a1c67", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
    })
      .then((AMap) => {
        map = new AMap.Map("container", {
          // 设置地图容器id
          viewMode: "3D", // 是否为3D地图模式
          zoom: 11, // 初始化地图级别
          center: [116.397428, 39.90923], // 初始化地图中心点位置
        });
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {
      map?.destroy();
    };
  }, []);

  return (
    <div
      id="container"
      className='container'
      style={{ height: "800px" }}
    ></div>
  );
}
export default  MapContainer;