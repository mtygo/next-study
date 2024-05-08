import React from 'react';

import './index.scss'

const Index:React.FC<any> = ({app, dispatch})=> {

  return (
    <div className="Index">
      <div className="text-up">宝宝的爱</div>
      <div className="text">93%</div>
      <div className="contrast">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {/* 底部的 */}
        <div className="circle"></div> 
        {/* 下面的 */}
        <div className="button"></div>
      </div>
    </div>
  );
}

export default Index;
