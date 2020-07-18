export default function line2(echarts) {
  const myChart = echarts.init(document.querySelector('.line2 .chart'));
  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
			textStyle: {
        color: 'rgba(255, 255, 255, .5)',
        fontSize: 12,
			},
    },
    grid: {
        top: 30,
        right: 10,
        bottom: 10,
        left: 10,
        containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLabel: {
          textStyle: {
            color: 'rgba(255, 255, 255, .6)',
            fontSize: 12,
          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, .2)',
          },
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, .1)',
          },
        },
        axisLabel: {
          textStyle: {
            color: 'rgba(255, 255, 255, .6)',
            fontSize: 12,
          },
        },
        // 修改分割线颜色
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, .1)',
          },
        },
      }
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        // 修改折线点，默认不展示
        symbol: 'circle',
        symbolSize: 8,
        showSymbol: false,
        // 设置折线点的具体样式
        itemStyle: {
          color: '#0184d5',
          borderColor: 'rgba(221, 220, 107, .1)',
          borderWidth: 12,
        },
        // 修改渐变颜色
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(1, 132, 213, .4)', // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(1, 132, 213, .1)', // 100% 处的颜色
            }],
            global: false, // 缺省为 false
          },
          shodowColor: 'rgba(0, 0, 0, .1)',
        },
        data: [120, 132, 101, 134, 90, 230, 210],
        smooth: true,
      },
      {
        name: '联盟广告',
        type: 'line',
        // 修改折线点，默认不展示
        symbol: 'circle',
        symbolSize: 8,
        showSymbol: false,
        // 设置折线点的具体样式
        itemStyle: {
          color: '#00d887',
          borderColor: 'rgba(221, 220, 107, .1)',
          borderWidth: 12,
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(0, 216, 135, .4)', // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(0, 216, 135, .1)', // 100% 处的颜色
            }],
            global: false, // 缺省为 false
          },
          shodowColor: 'rgba(0, 0, 0, .1)',
        },
        data: [80, 182, 79, 234, 290, 330, 310],
        smooth: true,
      },
    ]
  };
  myChart.setOption(option);
  return myChart;
}