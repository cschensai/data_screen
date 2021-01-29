export default function pie(echarts) {
  const myChart = echarts.init(document.querySelector('.quarter .inner .chart'));
  const option = {
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['80%', '100%'],
        
        //是否标签重叠
        avoidLabelOverlap: true,
        // 开始角度，顺时针方向计算
        startAngle: 180,
        emphasis: {
          label: {
            show: true,
          }
        },
        labelLine: {
          show: false
        },
        // 位置
        top: '20%',
        left: '-30%',
        right: '-30%',
        bottom: '-20%',
        data: [
          { value: 50, name: '75%', label: { show: true, position: 'center', fontSize: 16, fontWeight: 600, color: '#fff' } },
          { value: 50, name: '邮件营销', label: { show: false }, itemStyle: { color: '#4c9bfd' } },
          { value: 100, name: '联盟广告', label: { show: false }, itemStyle: { color: 'transparent'} },

        ]
      }
    ]
  };
  myChart.setOption(option);
  return myChart;
}