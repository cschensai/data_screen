import React, { Fragment } from 'react';
import './index.less';

export default function TabsComp(props) {
  const { tabs = [], onChange, value = tabs[0] } = props;
  const handleClick = tab => {
    // 避免重复获取数据，实现onChange功能
    if (tab === value) return false;
    onChange(tab);
  }
  return (
    <div className="tabsComp">
      {
        tabs.map((tab, index, arr) => {
          return (
            <Fragment key={index}>
              <span className={tab === value ? 'tab active' : 'tab'} onClick={() => handleClick(tab)}>{tab}</span>
              {
                (index < arr.length - 1) && <span className="line"></span>
              }
            </Fragment>
          )
        })
      }
    </div>
  )
}