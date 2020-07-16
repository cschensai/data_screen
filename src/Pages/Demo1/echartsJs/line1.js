export default function line1(echarts) {
  const myEchart = echarts.init(document.querySelector('.line1 .chart'));
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
			textStyle: {
				color: '#4c9bfd',
			},
			right: '10%',
    },
    grid: {
			top: '20%',
      left: '3%',
      right: '4%',
			bottom: '3%',
			// 显示边框
			show: true,
			// 边框颜色
			borderColor: '#012f4a',
			// 包含刻度文字在内
      containLabel: true,
    },
    xAxis: {
			type: 'category',
			// 坐标轴两边留白策略
      boundaryGap: false,
			data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
			axisLabel: {
				color: '#4c9bfd',
			},
			// 去除轴线
			axisLine: {
				show: false,
			},

    },
    yAxis: {
			type: 'value',
			// 去除轴线
			axisLine: {
				show: false,
			},
			// 分割线颜色
			splitLine: {
				lineStyle: {
					color: '#012f4a',
				}
			},
			axisTick: {
				show: false,
			},
    },
    series: [
			{
				name: '邮件营销',
				type: 'line',
				stack: '总量',
				data: [120, 132, 101, 134, 90, 230, 210],
				// 平滑曲线
				smooth: true,
			},
			{
				name: '联盟广告',
				type: 'line',
				stack: '总量',
				data: [220, 182, 191, 234, 290, 330, 310],
				// 平滑曲线
				smooth: true,
			},
    ]
  };
  myEchart.setOption(option);
  return myEchart;
}