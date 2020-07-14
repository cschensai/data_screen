export default function bar1(echarts) {
  // 实例化对象
  const myChart = echarts.init(document.querySelector('.bar .chart'));
  // 配置项
  const option = {
    color: ['#2f89cf'],
    tooltip: {
      // 坐标轴指示器，坐标轴触发有效
      trigger: 'axis',
      axisPointer: {
        // 默认为直线，可选为：'line' | 'shadow'
        type: 'shadow',
      }
    },
    grid: {
      left: '0%',
      top: 10,
      right: '0%',
      bottom: '4%',
      // true: 数值离DOM盒子的距离 false: 坐标轴离DOM盒子的距离
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['旅游', '教育', '游戏', '医疗', '电商', '社交', '金融'],
        axisTick: {
          alignWithLabel: true
        },
        // 修改坐标值样式
        axisLabel: {
          color: 'rgba(255, 255, 255, .6)',
          fontSize: 12,
        },
        // 不显示坐标轴线
        axisLine: {
          show: false,
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        // 修改坐标值样式
        axisLabel: {
          color: 'rgba(255, 255, 255, .6)',
          fontSize: 12
        },
        // 修改坐标轴线样式
        axisLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, .1)',
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, .1)',
          }
        }
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        data: [10, 52, 200, 334, 390, 1030, 220],
        // bar 样式修改
        itemStyle: {
          barBorderRadius: 5,
        }
      }
    ]
  };
  // 配置项给实例对象
  myChart.setOption(option);
  return myChart;
}