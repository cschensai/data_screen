import React, { Component } from 'react';
import moment from 'moment';
import './index.less';

export default class Demo1 extends Component {
  state = {
    currentTime: moment().format('YYYY年MM月DD日-HH时mm分ss秒'),
  }
  UNSAFE_componentWillMount() {
   this.timer = setInterval(() => {
     this.setState({ currentTime: moment().format('YYYY年MM月DD日-HH时mm分ss秒') });
   }, 1000); 
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { currentTime } = this.state;
    return (
      <div className="demo1">
        {/* 头部 */}
        <header>
          <h1>数据可视化-Demo1</h1>
          <span className="showTime">当前时间：{currentTime}</span>
        </header>
        {/* 主题 */}
        <main>
          <div className="column">
            <div className="panel bar">
              <h2>标题</h2>
              <div className="chart">若表</div>
              <div className="panelFooter"></div>
            </div>
            <div className="panel line">
              <h2>标题1</h2>
              <div className="chart">若表</div>
              <div className="panelFooter"></div>
            </div>
            <div className="panel pie">
              <h2>标题2</h2>
              <div className="chart">若表</div>
              <div className="panelFooter"></div>
            </div>
          </div>
          <div className="column">
            {/* 数字模块 */}
            <div className="no">
              <div className="noHd">
                <div className="noHdItem">17767</div>
                <div className="noHdItem">27878</div>
              </div>
              <div className="noBd">
                <div className="noBdItem">前端供应人数</div>
                <div className="noBdItem">前端需求人数</div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="panel bar">
              <h2>标题</h2>
              <div className="chart">若表</div>
              <div className="panelFooter"></div>
            </div>
            <div className="panel line">
              <h2>标题1</h2>
              <div className="chart">若表</div>
              <div className="panelFooter"></div>
            </div>
            <div className="panel pie">
              <h2>标题2</h2>
              <div className="chart">若表</div>
              <div className="panelFooter"></div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
