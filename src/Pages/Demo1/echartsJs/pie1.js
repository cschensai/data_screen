export default function pie1(echarts) {
  const myChart = echarts.init(document.querySelector('.pie1 .chart'));
  const option = {
    // 自定义饼形图的颜色
    color: ['#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      // 可滚动翻页的图例
        type: 'scroll',
        orient: 'horizontal',
        bottom: 0,
        // 修改图例宽高
        itemWidth: 10,
        itemHeight: 10,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        // 修改图例文字样式
        textStyle: {
          color: 'rgba(255, 255, 255, .5)',
          fontSize: 12,
        },
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        // 修改饼形图的大小
        radius: ['40%', '60%'],
        // 可以通过center属性修改饼形图的位置
        center: ['50%', '45%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        // 链接label和饼形图之间的线
        labelLine: {
          show: false
        },
        data: [
          {value: 335, name: '直接访问'},
          {value: 310, name: '邮件营销'},
          {value: 234, name: '联盟广告'},
          {value: 135, name: '视频广告'},
          {value: 1548, name: '搜索引擎'}
        ]
      }
    ]
  };
  myChart.setOption(option);
  return myChart;
}
