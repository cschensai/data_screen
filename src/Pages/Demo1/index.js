import React, { Component } from 'react';
import moment from 'moment';
import echarts from 'echarts';
import bar1 from './echartsJs/bar1';
import bar2 from './echartsJs/bar2';
import line1 from './echartsJs/line1';
import line2 from './echartsJs/line2';
import pie1 from './echartsJs/pie1';
import pie2 from './echartsJs/pie2';
import map from './echartsJs/map';
import './index.less';

export default class Demo1 extends Component {
  state = {
    currentTime: moment().format('YYYY年MM月DD日-HH时mm分ss秒'),
    give: parseInt(18020 + Math.random()),
    need: parseInt(26904 + Math.random()),
  }
  calcNum = async () => {
    return new Promise((resolve) => {
      this.timer = setTimeout(() => {
        this.setState(prev => ({
          give: parseInt(prev.give + Math.random() * 688),
          need: parseInt(prev.need + Math.random() * 710),
        }), () => {
          clearInterval(this.timer);
        })
        resolve();
      }, 50);
    })
  }
  renderDigital = async () => {
    for (let index = 0; index < 5; index++) {
      await this.calcNum();
    }
  }
  UNSAFE_componentWillMount() {
    this.timer1 = setInterval(() => {
     this.setState({ currentTime: moment().format('YYYY年MM月DD日-HH时mm分ss秒') });
    }, 1000); 
    this.renderDigital();
    this.timer2 = setInterval(() => {
      this.renderDigital();
    }, Math.random() * 3000 + 3000);
  }
  // 设置charts图表
  componentDidMount() {
    // 左侧柱状图
    const bar1Chart = bar1(echarts);
    const bar2Chart = bar2(echarts);
    const line1Chart = line1(echarts);
    const line2Chart = line2(echarts);
    const pie1Chart = pie1(echarts);
    const pie2Chart = pie2(echarts);
    const mapChart = map(echarts);
    // 屏幕缩放对chart图表进行自适应处理，调用实例的resize方法
    window.onresize = () => {
      bar1Chart.resize();
      bar2Chart.resize();
      line1Chart.resize();
      line2Chart.resize();
      pie1Chart.resize();
      pie2Chart.resize();
      mapChart.resize();
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer1);
    clearInterval(this.timer2);
  }
  render() {
    const { currentTime, give, need } = this.state;
    return (
      <div className="demo1">
        {/* 头部 */}
        <header>
          <h1>数据可视化-调研1</h1>
          <span className="showTime">当前时间：{currentTime}</span>
        </header>
        {/* 主题 */}
        <main>
          <div className="column">
            <div className="panel bar1">
              <h2>行业职位</h2>
              <div className="chart"></div>
              <div className="panelFooter"></div>
            </div>
            <div className="panel line1">
              <h2>销售量</h2>
              <div className="chart"></div>
              <div className="panelFooter"></div>
            </div>
            <div className="panel pie1">
              <h2>来源类型</h2>
              <div className="chart"></div>
              <div className="panelFooter"></div>
            </div>
          </div>
          <div className="column">
            {/* 数字模块 */}
            <div className="no">
              <div className="noHd">
                <div className="noHdItem">{give}</div>
                <div className="noHdItem">{need}</div>
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
              <div className="chart"></div>
            </div>
          </div>
          <div className="column">
            <div className="panel bar2">
              <h2>就业率</h2>
              <div className="chart"></div>
              <div className="panelFooter"></div>
            </div>
            <div className="panel line2">
              <h2>采购量</h2>
              <div className="chart"></div>
              <div className="panelFooter"></div>
            </div>
            <div className="panel pie2">
              <h2>地区分布</h2>
              <div className="chart"></div>
              <div className="panelFooter"></div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
