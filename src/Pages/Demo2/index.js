import React, { Component } from 'react';
import moment from 'moment';
import echarts from 'echarts';
import Decoration5 from '@jiaminghi/data-view-react/es/decoration5';
import ScrollBoard from '@jiaminghi/data-view-react/es/scrollBoard';
import map from './echartsJs/map';
// mock数据
import { overviewData, monitorData } from './mock';
import './index.less';

export default class Demo2 extends Component {
  state = {
    currentTime: moment().format('YYYY年MM月DD日-HH时mm分ss秒'),
  }
  UNSAFE_componentWillMount() {
    this.timer1 = setInterval(() => {
      this.setState({ currentTime: moment().format('YYYY年MM月DD日-HH时mm分ss秒') });
    }, 1000); 
  }
  // 设置charts图表
  componentDidMount() {
    // 地图
    const mapChart = map(echarts);
    // 屏幕缩放对chart图表进行自适应处理，调用实例的resize方法
    window.onresize = () => {
      mapChart.resize();
    }
  }
  componentWillUnmount() {
  }
  // 数据概览
  renderOverview = () => {
    return overviewData.map(data => {
      return (
        <div className="item">
          <p>{data.value.toLocaleString()}</p>
          <span>
            <i className="iconfont iconicon_status-dot-small" style={{ color: data.color }}></i>
            <label>{data.label}</label>
          </span>
        </div>
      )
    })
  }
  render() {
    const { currentTime } = this.state;
    return (
      <div className="demo2">
        {/* 头部 */}
         <header>
          <h1>数据可视化-调研2</h1>
          <span className="showTime">当前时间：{currentTime}</span>
          <Decoration5 className="decoration5" />
        </header>
        <main>
          <div className="column">
            {/* 数据概览 */}
            <div className="panel overview">
              <div className="inner">
                { this.renderOverview() }
              </div>
            </div>
            {/* 设备监控 */}
            <div className="panel monitor">
              <div className="inner">
                <ScrollBoard config={monitorData} />
              </div>
            </div>
            {/* 点位分布统计 */}
            <div className="panel point">
              <div className="inner"></div>
            </div>
          </div>
          <div className="column">
            {/* 地图 */}
            <div className="map">
              <div className="chart"></div>
            </div>
            {/* 用户数量统计 */}
            <div className="panel user">
              <div className="inner"></div>
            </div>
          </div>
          {/* 右侧列 */}
          <div className="column">
            {/* 订单 */}
            <div className="panel order">
              <div className="inner"></div>
            </div>
            {/* 销售额 */}
            <div className="panel sale">
              <div className="inner"></div>
            </div>
            {/* 渠道分布 && 季度销售*/}
            <div className="wrap">
              <div className="panel channel">
                <div className="inner"></div>
              </div>
              <div className="panel quarter">
                <div className="inner"></div>
              </div>
            </div>
            {/* 全国热榜 */}
            <div className="panel hot">
              <div className="inner"></div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
