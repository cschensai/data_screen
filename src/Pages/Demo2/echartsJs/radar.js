export default function radarFun(echarts) {
  const myChart = echarts.init(document.querySelector('.point .inner .content .chart'));
  const option = {
    tooltip: {
      // 提示框修改
      textStyle: {
        fontSize: 12,
      },
    },
    legend: {
      data: ['预算分配', '实际开销'],
      // 修改
      itemWidth: 15,
      itemHeight: 8,
      textStyle: {
        color: 'rgba(255, 255, 255, .8)',
        fontSize: 10,
      },
      // 位置
      bottom: 0,
    },
    radar: {
      // shape: 'circle',
      name: {
        textStyle: {
          color: 'rgba(255, 255, 255, .8)',
          padding: [3, 5],
          fontSize: 10,
        },
      },
      // 指示器名称和指示器轴的距离
      nameGap: 3,
      indicator: [
        { name: '销售', max: 6500 },
        { name: '管理', max: 16000 },
        { name: '信息技术', max: 30000 },
        { name: '客服', max: 38000 },
        { name: '研发', max: 52000 },
        { name: '市场', max: 25000 }
      ],
       // grid中的区域
      splitArea: {
        show: false,
      },
      // 分割线
      splitLine: {
        lineStyle: {
          color: '#0a384d',
        },
      },
      // 位置
      center: ['50%', '45%'],
      // 大小
      radius: '70%',
    },
    series: [{
      name: '预算 vs 开销',
      type: 'radar',
      // 设置折线点的大小
      symbolSize: 8,
      data: [
        {
          value: [4300, 10000, 28000, 35000, 50000, 19000],
          name: '预算分配',
          itemStyle: {
            color: '#c23631',
          },
        },
        {
          value: [5000, 14000, 28000, 31000, 42000, 21000],
          name: '实际开销',
          itemStyle: {
            color: '#2e4454',
          },
        }
      ]
    }]
  };
  myChart.setOption(option);
  return myChart;
}