// 地球
// 引入地图必须要引入下面的两个文件
import 'echarts-gl';
import 'echarts/map/js/world';
import 'echarts/map/json/world.json';
import worldImg from '../../../assets/pictures/world.topo.bathy.200401.jpg';
// import starfieldImg from '../../../assets/pictures/starfield.jpg';

export default function map(echarts) {
    // 实例化
    const myChart = echarts.init(document.querySelector('.map .chart'));
    // 设置属性
    const option = {
			// backgroundColor: 'transparent',
			globe: {
					baseTexture: worldImg,
					heightTexture: worldImg,
					displacementScale: 0.04,
					shading: 'realistic',
					// 环境贴图
					// environment: starfieldImg,
					environment: '',
					realisticMaterial: {
							roughness: 0.9
					},
					postEffect: {
							enable: true
					},
					light: {
							main: {
									intensity: 5,
									shadow: true
							},
							// 会使用纹理作为环境光的光源
							ambientCubemap: {
									texture: 'https://cs-static-assets.oss-cn-beijing.aliyuncs.com/data_screen/demo2/pisa.hdr', // 纹理资源
									diffuseIntensity: 0.2
							}
					}
			}
	};
	myChart.setOption(option);
	return myChart;
}