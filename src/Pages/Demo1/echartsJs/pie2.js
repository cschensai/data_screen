export default function pie2(echarts) {
  const myChart = echarts.init(document.querySelector('.pie2 .chart'));
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      // 修改图例的位置
      bottom: 0,
      // 修改图例样式
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255, 255, 255, .5)',
        fontSize: 12,
      }
    },
    series: [
      {
        name: '面积模式',
        type: 'pie',
        radius: ['20%', '70%'],
        center: ['50%', '45%'],
        data: [
          {value: 10, name: '河南'},
          {value: 5, name: '山东'},
          {value: 15, name: '浙江'},
          {value: 25, name: '江苏'},
          {value: 20, name: '四川'},
          {value: 35, name: '湖南'},
          {value: 30, name: '湖北'},
          {value: 40, name: '吉林'}
        ],
        // 半径模式
        roseType: 'raduis',
        // 修改图形文字大小
        label: {
          fontSize: 10,
        },
        // 修改引导线的样式
        labelLine: {
          length: 6, // 长线
          length2: 4, // 短线
        },
      }
    ]
  };
  myChart.setOption(option);
  return myChart;
}