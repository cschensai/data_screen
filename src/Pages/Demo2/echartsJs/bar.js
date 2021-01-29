export default function bar(echarts) {
  const myChart = echarts.init(document.querySelector('.user .inner .content .chart'));
  const salvProName = ["安徽", "河南", "浙江", "湖北", "贵州", "江西", "江苏", "四川", "云南", "湖南", "大连"];
  const salvProValue = [239, 181, 154, 144, 135, 117, 74, 72, 67, 55, 88];
  const salvProMax = [];//背景按最大值
  for (let i = 0; i < salvProValue.length; i++) {
    salvProMax.push(salvProValue[0]);
  }
  const option = {
    // backgroundColor: "#003366",
    grid: {
      left: '2%',
      right: '2%',
      bottom: '2%',
      top: '2%',
      containLabel: true
    },
    xAxis: {
      show: false,
      type: 'value'
    },
    yAxis: [{
      type: 'category',
      inverse: true,
      axisLabel: {
        show: true,
        textStyle: {
          color: 'rgba(255, 255, 255, .8)',
        },
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      data: salvProName
    }, {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      axisLabel: {
        textStyle: {
          color: 'rgba(255, 255, 255, .8)',
          fontSize: 12,
        },
        // 格式化数值展示
        // formatter: '{value} w',
      },
      data: salvProValue
    }],
    series: [{
      name: '值',
      type: 'bar',
      zlevel: 1,
      itemStyle: {
        normal: {
          barBorderRadius: 30,
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: 'rgb(57,89,255,1)'
          }, {
            offset: 1,
            color: 'rgb(46,200,207,1)'
          }]),
        },
      },
      // 修改柱状图宽度
      barWidth: 10,
      data: salvProValue,
    },
    {
      name: '背景',
      type: 'bar',
      // 修改柱状图宽度
      barWidth: 10,
      barGap: '-100%',
      data: salvProMax,
      itemStyle: {
        normal: {
          color: 'rgba(24,31,68,1)',
          barBorderRadius: 30,
        }
      },
    },
    ]
  };
  myChart.setOption(option);
  return myChart;
}
