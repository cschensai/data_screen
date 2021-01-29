const myColor = ['#1089e7', '#f57474', '#56d0e3', '#f8b448', '#8b78f6'];
export default function bar2(echarts) {
  const myChart = echarts.init(document.querySelector('.bar2 .chart'));
  const option = {
    grid: {
      top: '10%',
      left: '22%',
      bottom: '10%',
      containLabel: false,
    },
    // 不显示x轴
    xAxis: {
      show: false,
    },
    yAxis: [{
      type: 'category',
      data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
      // y轴线相关设置
      axisLine: {
        show: false,
      },
      // 不显示y轴刻度
      axisTick: {
        show: false,
      },
      // 修改刻度标签颜色
      axisLabel: {
        color: 'white',
      },
      // 反向坐标轴
      inverse: true,
    }, {
      data: [702, 350, 610, 793, 664, 780],
      // y轴线相关设置
      axisLine: {
        show: false,
      },
      // 修改刻度标签颜色
      axisLabel: {
        color: 'white',
      },
      // 不显示y轴刻度
      axisTick: {
        show: false,
      },
      // 反向坐标轴
      inverse: true,
    }],
    series: [
      {
        name: '2011年',
        type: 'bar',
        data: [78, 23, 66, 77, 23, 56],
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子之间的宽度
        barWidth: 10,
        // 柱子的样式
        itemStyle: {
          barBorderRadius: 20,
          color: params => {
            return myColor[params.dataIndex];
          }
        },
        // 显示柱子中间的%标签
        label: {
          show: true,
          position: 'inside',
          // 格式化百分比数据 c: data里的数据
          formatter: '{c}%',
        },
        // 设置覆盖，存在多个 y轴的时候有用
        yAxisIndex: 0,
      },
      {
        name: '2012年',
        type: 'bar',
        data: [100, 100, 100, 100, 100, 100],
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子之间的宽度
        barWidth: 15,
        // 柱子的样式
        itemStyle: {
          barBorderRadius: 15,
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: 3,
        },
        // 覆盖在上面，存在多个 y轴的时候有用
        yAxisIndex: 1,
      }
    ]
  };
  myChart.setOption(option);
  return myChart;
}