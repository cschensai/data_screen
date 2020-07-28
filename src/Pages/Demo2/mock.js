// 数据概览
export const overviewData = [{
  label: '设备总数',
  value: 2190,
  color: '#1452c4',
}, {
  label: '季度新增',
  value: 190,
  color: '#72c4af',
}, {
  label: '运营设备',
  value: 3001,
  color: '#80ad8a',
}, {
  label: '异常设备',
  value: 108,
  color: '#fe5835',
}];
// 监控数据
export const monitorData = {
  header: ['列1', '列2', '列3'],
  data: [
    ['行1列1', '行1列2', '行1列3'],
    ['行2列1', '行2列行2列2行2列22', '行2列3'],
    ['行3列1', '行3列2', '行3列3'],
    ['行4列1', '行4列2', '行4列3'],
    ['行5列1', '行5列2', '行5列3'],
    ['行6列1', '行6列2', '行6列3'],
    ['行7列1', '行7列2', '行7列3'],
    ['行8列1', '行8列2', '行8列3'],
    ['行9列1', '行9列2', '行9列3'],
    ['行10列1', '行10列2', '行10列3']
  ],
  // 显示序号
  index: true,
  // 列宽
  // columnWidth: [50],
  // 列对齐方式
  align: ['center'],
  // 表头背景色
  headerBGC: 'rgba(1, 26, 107, .5)',
  // 奇数行
  oddRowBGC: '',
  // 偶数行
  evenRowBGC: '',
  // 表行数
  rowNum: 8,
}
// 职能分布数据
export const pointPanelData = [{
  label: '职位总数',
  value: 32011,
  color: '#dc635d',
}, {
  label: '新增职位',
  value: 4180,
  color: '#80ad8a',
}];
// 用户统计数据
export const userPanelData = [{
  label: '用户总量',
  value: 512068,
  color: '#dc635d',
}, {
  label: '新增用户',
  value: 98980,
  color: '#80ad8a',
}];
// 销售面板数据
export const orderTabs = ['365天', '90天', '30天', '24小时'];
export const orderPanelData = {
  '365天': [{
    label: '订单量',
    value: 876567,
    color: '#dc635d',
  }, {
    label: '销售额（万）',
    value: 9878,
    color: '#eacfa9',
  }],
  '90天': [{
    label: '订单量',
    value: 576567,
    color: '#dc635d',
  }, {
    label: '销售额（万）',
    value: 3878,
    color: '#eacfa9',
  }],
  '30天': [{
    label: '订单量',
    value: 76567,
    color: '#dc635d',
  }, {
    label: '销售额（万）',
    value: 1878,
    color: '#eacfa9',
  }],
  '24小时': [{
    label: '订单量',
    value: 6567,
    color: '#dc635d',
  }, {
    label: '销售额（万）',
    value: 878,
    color: '#eacfa9',
  }]
}
// 渠道数据
export const channelData = [{
  value: 39,
  label: '机场',
  icon: 'iconjiesongjifuwu',
}, {
  value: 28,
  label: '商场',
  icon: 'iconshangchang',
}, {
  value: 20,
  label: '地铁',
  icon: 'iconditie',
}, {
  value: 13,
  label: '火车站',
  icon: 'iconhuochezhan',
}]
