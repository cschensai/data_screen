
export default function line(echarts) {
  const myChart = echarts.init(document.querySelector('.sale .inner .chart'));
  const xData = function () {
    var data = [];
    for (let i = 1; i < 31; i++) {
      data.push(i + "日");
    }
    return data;
  }();
  const option = {
    // backgroundColor: "#1A1835",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none",
        textStyle: {
          color: "#fff",
        }
      },
      // 修改文案样式
      textStyle: {
        fontSize: 10,
      }
    },
    grid: {
      borderWidth: 0,
      top: '18%',
      bottom: '0',
      // 调整图标的大小
      left: 0,
      right: 0,
      // 距离会包含坐标轴的label
      containLabel: true,
    },
    // 剧中显示图例
    legend: {
      textStyle: {
        color: 'rgba(255, 255, 255, .8)',
        fontSize: 10,
      },
      data: ['访问量', '订单量'],
      // 修改图例样式
      itemWidth: 14,
      itemHeight: 8,
    },
    // 是否显示拖拽的手柄
    // calculable: true,
    xAxis: [
      {
        type: "category",
        axisLabel: {
          textStyle: {
            color: 'rgba(255, 255, 255, .8)',
            fontSize: 10,
          },
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: 'rgba(255, 255, 255, .1)',
          },
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        data: xData,
      }
    ],

    yAxis: [
      {
        type: "value",
        // 不显示刻度线
        axisTick: {
          show: false
        },
        // 修改刻度标签
        axisLabel: {
          textStyle: {
            color: 'rgba(255, 255, 255, .8)',
            fontSize: 10,
          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, .1)',
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
    // 底部自定义缩放区域
    // dataZoom: [
    //   {
    //     show: true,
    //     height: 30,
    //     xAxisIndex: [0],
    //     bottom: 30,

    //     "start": 10,
    //     "end": 80,
    //     handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
    //     handleSize: '110%',
    //     handleStyle: {
    //       color: "#5B3AAE"
    //     },
    //     textStyle: {
    //       color: "rgba(204,187,225,0.5)"
    //     },
    //     fillerColor: "rgba(67,55,160,0.4)",
    //     borderColor: "rgba(204,187,225,0.5)"

    //   }, {
    //     type: "inside",
    //     show: true,
    //     height: 15,
    //     start: 1,
    //     end: 35
    //   }
    // ],
    series: [
      {
        name: "访问量",
        type: "line",
        symbolSize: 6,
        symbol: 'circle',
        // 设置折线点的具体样式
        itemStyle: {
          color: "#0184d5"
        },
        markPoint: {
          // 修改标记点的类型和样式
          symbol: 'pin',
          // 标记点宽、高，单值时表示宽和高一样
          symbolSize: 40,
          // 标记点位置偏移水平、垂直方向
          symbolOffset:[0, 3],
          label: {
            normal: {
              textStyle: {
                color: 'rgba(255, 255, 255, .8)',
                fontSize: 10,
              }
            }
          },
          // 延迟展示
          animationDelay: 2000, // ms
          data: [
            {
              type: 'max',
              name: '最大值'

            }, {
              type: 'min',
              name: '最小值'
            }
          ]
        },
        data: [],
        // 平滑设置
        smooth: true,
      }, {
        name: "订单量",
        type: "line",
        // 折线点的大小
        symbolSize: 6,
        symbol: 'circle',
        // 设置折线点的具体样式
        itemStyle: {
          color: "#2fce91"
        },
        markPoint: {
          // 修改标记点的类型和样式
          symbol: 'pin',
          // 标记点宽、高，单值时表示宽和高一样
          symbolSize: 40,
          // 标记点位置偏移水平、垂直方向
          symbolOffset:[0, 3],
          label: {
            normal: {
              textStyle: {
                color: 'rgba(255, 255, 255, .8)',
                fontSize: 10,
              }
            }
          },
          // 延迟展示
          animationDelay: 2000, // ms
          data: [
            {
              type: 'max',
              name: '最大值'

            }, {
              type: 'min',
              name: '最小值'
            }
          ]
        },
        data: [],
        // 平滑设置
        smooth: true,
      },
    ]
  }
  function setLineData () {
    option.series[0].data = new Array(30).fill().map(_ => parseInt(600 + Math.random() * 1000));
    option.series[1].data = new Array(30).fill().map(_ => parseInt(1000 + Math.random() * 1000));
    myChart.setOption(option);
  }
  setLineData()
  window.lineTimer2 = setInterval(setLineData, 4000);
  return myChart;
}
