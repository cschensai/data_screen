import React, { Component } from 'react';
import moment from 'moment';
import echarts from 'echarts';
import bar1 from './echartsJs/bar1';
import bar2 from './echartsJs/bar2';
import line1 from './echartsJs/line1';
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
  // 设置charts图表
  componentDidMount() {
    // 左侧柱状图
    const bar1Chart = bar1(echarts);
    const bar2Chart = bar2(echarts);
    const line1Chart = line1(echarts);
    // 屏幕缩放对chart图表进行自适应处理，调用实例的resize方法
    window.onresize = () => {
      bar1Chart.resize();
      bar2Chart.resize();
      line1Chart.resize();
    }
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
            <div className="panel bar1">
              <h2>柱状图1-行业</h2>
              <div className="chart"></div>
              <div className="panelFooter"></div>
            </div>
            <div className="panel line1">
              <h2>折线图1</h2>
              <div className="chart"></div>
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
            {/* 地图 */}
            <div className="map">
              <div className="map1"></div>
              <div className="map2"></div>
              <div className="map3"></div>
              <div className="chart">地图模块</div>
            </div>
          </div>
          <div className="column">
            <div className="panel bar2">
              <h2>柱状图2-就业率</h2>
              <div className="chart"></div>
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
