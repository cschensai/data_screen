import React, { Component, Fragment } from 'react';
import moment from 'moment';
import echarts from 'echarts';
import Decoration2 from '@jiaminghi/data-view-react/es/decoration2';
import Decoration5 from '@jiaminghi/data-view-react/es/decoration5';
import ScrollBoard from '@jiaminghi/data-view-react/es/scrollBoard';
import TabsComp from './components/TabsComp';
import map from './echartsJs/map';
import radarFun from './echartsJs/radar';
import bar from './echartsJs/bar';
import line from './echartsJs/line';
import pie from './echartsJs/pie';
// mock数据
import { overviewData, monitorData, pointPanelData, userPanelData, orderTabs,
  orderPanelData, channelData, quarterSaleData, countryHotData, provinceHotprovinceHotData, provinceHotData } from './mock';
import './index.less';

const mapObj = {
  up: 'iconarrow-up',
  down: 'iconarrowdown',
}
export default class Demo2 extends Component {
  state = {
    currentTime: moment().format('YYYY年MM月DD日-HH时mm分ss秒'),
    tabVal: '365天',
    activeLeftIndex: 0,
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
    const radarFunChart = radarFun(echarts);
    const barChart = bar(echarts);
    const lineChart = line(echarts);
    const pieChart = pie(echarts);
    // 屏幕缩放对chart图表进行自适应处理，调用实例的resize方法
    window.onresize = () => {
      mapChart.resize();
      radarFunChart.resize();
      barChart.resize();
      lineChart.resize();
      pieChart.resize();
    }
  }
  componentWillUnmount() {
    this.timer1 && clearInterval(this.timer1);
    window.lineTimer2 && clearInterval(window.lineTimer2);
  }
  // 数据展示
  renderDataItem = (arr = [], isShowLine) => {
    return arr.map((data, index) => {
      return (
        <Fragment key={index}>
          <div className="item">
            <p>
              {data.value.toLocaleString()}
              {data.unit && <span className="unit">{data.unit}</span>}
            </p>
            <span className="bottom">
              <i className="iconfont iconicon_status-dot-small" style={{ color: data.color }}></i>
              <label>{data.label}</label>
            </span>
          </div>
          {isShowLine && index === 0 && <Decoration2 style={{width: '100%', height: '5px'}} />}
        </Fragment>
      )
    })
  }
  handleTabs = async val => {
    this.setState({ tabVal: val });
  }
  renderChannelData = () => {
    return channelData.map((channel, index) => (
      <div className="item" key={index}>
        <div className="top">{channel.value}<span className="unit">%</span></div>
        <div className="bottom"><i className={`iconfont ${channel.icon}`}></i>{channel.label}</div>
      </div>
    ))
  }
  renderCountryRank = (arr = []) => {
    const mapObj = {
      0: 'iconfirst',
      1: 'iconsecond',
      2: 'iconthird',
    };
    return arr.map((item, index) => {
      return (
        <div className="rank">
          <i className={`iconfont ${mapObj[index]}`}></i>
          <span>{ item }</span>
        </div>
      )
    })
  }
  handleHover = index => {
    this.setState({ activeLeftIndex: index });
  }
  renderProvinceLeft = (arr = []) => {
    const { activeLeftIndex = 0 } = this.state;
    return arr.map((item, index) => {
      const activeIndexBool = index === activeLeftIndex;
      return (
        <div className={`leftItem ${activeIndexBool ? 'activeLeftItem' : ''}`} onMouseEnter={() => this.handleHover(index)}>
          <span>{ item.label }</span>
          <span>{ item.value.toLocaleString() }<i className={`iconfont ${mapObj[item.type]}`}></i></span>
        </div>
      )
    })
  }
  renderProvinceRight = (arr = []) => {
    return arr.map(item => {
      return (
        <div className="rightItem">
          <span>{ item.label }</span>
          <span>{ item.value.toLocaleString() }<i className={`iconfont ${mapObj[item.type]}`}></i></span>
        </div>
      )
    })
  }
  renderProvinceRank = (arr = []) => {
    const { activeLeftIndex = 0 } = this.state;
    return (
      <Fragment>
        <div className="left">
          {this.renderProvinceLeft(provinceHotData)}
        </div>
        <div className="right" >
          {this.renderProvinceRight(provinceHotData[activeLeftIndex].category)}
        </div>
      </Fragment>
    )
  }
  render() {
    const { currentTime, tabVal } = this.state;
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
                {this.renderDataItem(overviewData)}
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
              <div className="inner">
                <h3>职能分布</h3>
                <div className="content">
                  <div className="chart"></div>
                  <div className="desc">
                    {this.renderDataItem(pointPanelData, true)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            {/* 地图 */}
            <div className="map">
              <div className="chart"></div>
            </div>
            {/* 用户数量统计 */}
            <div className="panel user">
              <div className="inner">
                <h3>用户总量统计</h3>
                <div className="content">
                  <div className="chart"></div>
                  <div className="desc">
                    {this.renderDataItem(userPanelData, true)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 右侧列 */}
          <div className="column">
            {/* 订单 */}
            <div className="panel order">
              <div className="inner">
                <TabsComp tabs={orderTabs} onChange={this.handleTabs} value={tabVal} />
                <div className="desc">
                  {this.renderDataItem(orderPanelData[tabVal], false)}
                </div>
              </div>
            </div>
            {/* 销售额 */}
            <div className="panel sale">
              <div className="inner">
                <h3>销售额统计</h3>
                <div className="chart"></div>
              </div>
            </div>
            {/* 渠道分布 && 一季度销售进度 */}
            <div className="wrap">
              <div className="panel channel">
                <div className="inner">
                  <h3>渠道分布</h3>
                  {this.renderChannelData(channelData)}
                </div>
              </div>
              <div className="panel quarter">
                <div className="inner">
                  <h3>一季度销售进度</h3>
                  <div className="chart"></div>
                  <div className="desc">
                    {this.renderDataItem(quarterSaleData)}
                  </div>
                </div>
              </div>
            </div>
            {/* 全国热榜 */}
            <div className="panel hot">
              <div className="inner">
                <div className="country">
                  <h3>全国热榜</h3>
                  <div className="countryRank">
                    {this.renderCountryRank(countryHotData)}
                  </div>
                </div>
                <div className="province">
                  <h3>
                    各省热榜
                    <span className="subTitle">// <em>近30日</em> //</span>
                  </h3>
                  <div className="provinceRank">
                    {this.renderProvinceRank(provinceHotData)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
